import { useLayoutEffect } from "react";
import { Outlet } from "react-router-dom";
// zustand store
import useThemeStore from "../store/useThemeStore";

export const Root = () => {
  const { theme } = useThemeStore();

  // useLayoutEffect는 브라우저가 페인트하기 전에 실행됨.
  // 페이지가 렌더링되기 전에 테마를 적용.
  useLayoutEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <div className="w-screen h-full min-h-screen">
      <Outlet />
    </div>
  );
};
