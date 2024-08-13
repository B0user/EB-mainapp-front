// Modules
import { Routes, Route } from "react-router-dom";
// Layouts
import Layout from "./components/Layouts/Layout";
import PersistLogin from "./components/Layouts/PersistLogin";
// Login
// import Register from "./features/auth/Register";
import Login from "./features/auth/Login";
import LoginRedirection from "./features/auth/LoginRedirection";
import LoginRedir from "./features/auth/LoginRedir";
import RequireAuth from "./components/Layouts/RequireAuth";
// import LoginRedir from "./features/auth/LoginRedir";



import Missing from "./components/Missing";
import Unauthorized from "./components/Unauthorized";

import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import 'react-toastify/dist/ReactToastify.css';
import LandingPage from "./pages/LandingPage";
import CollegeCatalogPage from "./pages/CollegeCatalogPage";
import CollegeProductPage from "./pages/CollegeProductPage";




function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<LandingPage />} />  {/* landing page */}

            <Route path="colleges">
              <Route index element={<CollegeCatalogPage />} /> {/* catalog page */}
              <Route path=":id" element={<CollegeProductPage />} />  {/* product page */}
            </Route>           

            <Route path="*" element={<Missing />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
