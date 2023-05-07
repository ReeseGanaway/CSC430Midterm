import supabase from "./supabase";

const registerUser = async (email, password, name, slug) => {


  const { data, error } = await supabase
    .from("profile")
    .select("*")
    .eq("email", email);
  if (error) {
    return {
      success: false,
      message: error.message,
    };
  }

  if (data.length > 0) {
    return {
      success: false,
      message: "User email already exists",
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
      .insert([{ user_id: authResponse.data.user.id, name, slug }]);

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

const loginUser = async (email, password) => {
  const authResponse = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (authResponse.error) {
    return {
      success: false,
      error: authResponse.error,
    };
  }

  if (authResponse.data.user) {
    const meta = await supabase
      .from("profile")
      .select("*")
      .eq("user_id", authResponse.data.user.id);

    if (meta.error) {
      return {
        success: false,
        error: meta.error,
      };
    }
    return {
      ...authResponse,
      meta,
      success: true,
    };
  }

  return {
    success: false,
    message: "An unknown error has occurred",
  };
};

export { registerUser, loginUser};