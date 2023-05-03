import supabase from "./supabase";

const registerUser = async (email, password, name, slug) => {
  const { data, error } = await supabase
    .from("profile")
    .select("*")
    .eq("slug", slug);
  if (error) {
    return {
      success: false,
      message: error.message,
    };
  }

  if (data.length > 0) {
    return {
      success: false,
      message: "User slug already exists",
    };
  }

  const authResponse = await supabase.auth.signUp({
    email,
    password,
  });

  if (authResponse.error) {
    return {
      success: false,
      message: authResponse.error.message,
    };
  }

  if (authResponse.data.user) {
    const addMetaResponse = await supabase
      .from("profile")
      .insert([{ user_Id: authResponse.data.user.id, name, slug }]);

    if (addMetaResponse.error) {
      return {
        success: false,
        message: addMetaResponse.error.message,
      };
    }

    return {
      success: true,
      ...addMetaResponse.data,
    };
  }

  return {
    success: false,
    message: "An Unknown error has occured",
  };
};

export { registerUser};
