import "./globels.css";
import { Route, Routes } from "react-router-dom";
import Home from "./_root/pages/Home";
import SinginForm from "./_auth/forms/SinginForm";
import SingupForm from "./_auth/forms/SingupForm";
import AuthLayout from "./_auth/AuthLayout";
import RootLayout from "./_root/RootLayout";
const App = () => {
  return (
    <main className="flex h-screen">
      <Routes>
        {/* Public Routes */}
        <Route element={<AuthLayout />}>
          <Route path="/sing-in" element={<SinginForm />} />
          <Route path="/sing-up" element={<SingupForm />} />
        </Route>

        {/* Private Routes */}
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </main>
  );
};
export default App;
