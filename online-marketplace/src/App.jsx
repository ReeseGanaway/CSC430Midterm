import { Routes, Route, BrowserRouter } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import FormSwitch from "./components/FormSwitch";
import Sidebar from "./components/Sidebar";
import { styled } from "@mui/material/styles";

function App() {
  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  }));

  return (
    <div className="App">
      <Sidebar />
      <DrawerHeader />
      <main className="ml-16 p-6">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<FormSwitch />} />
          </Routes>
        </BrowserRouter>
      </main>
    </div>
  );
}

export default App;
