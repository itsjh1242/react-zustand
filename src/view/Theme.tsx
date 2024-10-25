// component
import { Frame, Divider, Title } from "../components/Frame";
// zustand store
import useThemeStore from "../store/useThemeStore";

export const Theme: React.FC = () => {
  const { theme, toggleTheme } = useThemeStore();

  return (
    <Frame>
      <Title text="Theme" />
      <Divider />
      <p>Current Theme: {theme}</p>
      <Divider />
      <button onClick={() => toggleTheme()}>Change Theme</button>
    </Frame>
  );
};
