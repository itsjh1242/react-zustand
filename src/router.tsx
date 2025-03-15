import { Route, Routes } from "react-router-dom";
import { RootLayout } from "./components/layout/root";
import { AuthPage } from "./view/auth/page";
import { GuidePage } from "./view/guide/page";
import { MainPage } from "./view/main/page";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<MainPage />} />
        <Route path="guide" element={<GuidePage />} />
        <Route path="auth" element={<AuthPage />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
