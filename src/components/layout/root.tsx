import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

export const RootLayout: React.FC = () => {
  const location = useLocation(); // 현재 URL 가져오기

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <main className="flex min-h-screen w-full flex-col text-gray-900">
      <div className="flex-1 flex-grow">
        <Outlet />
      </div>
    </main>
  );
};
