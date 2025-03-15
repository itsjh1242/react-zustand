import { Section } from "@/components/layout/section";
import { useUserStore } from "@/store/use-auth-store";
import { useNavigate } from "react-router-dom";

export const MainPage: React.FC = () => {
  const { user } = useUserStore();
  return (
    <>
      <Section className="h-screen w-full items-center justify-center">
        <h1 className="text-4xl font-bold">Zustand Store</h1>
        <p>Guide & Examples</p>
        <div className="h-1 w-[24px] rounded-full bg-black" />
        <p className="max-w-[50%] text-center text-sm text-gray-500">
          <span className="block">
            A small, fast, and scalable bearbones state management solution.{" "}
            <strong>Zustand</strong> has a comfy API based on hooks.
          </span>
          <span className="block">
            It isn't boilerplatey or opinionated, but has enough convention to
            be explicit and flux-like.
          </span>
        </p>
        <div className="h-10 w-full" />
        <Card
          title="Guide"
          description="how to use zustand store modules"
          linkUrl="/guide"
        />
        <div className="flex h-[200px] w-full justify-center space-x-2">
          <Card
            title={`Example: ${user ? "Logout" : "Login"} Form`}
            description={`${user ? "logout" : "login"} form with zustand store`}
            linkUrl="/auth"
          />
          <Card
            title="Example: MyPage"
            description={`${
              user ? "view" : "login and view"
            } mypage with zustand store`}
            linkUrl="/profile"
            disabled={!user}
          />
        </div>
      </Section>
    </>
  );
};

interface CardProps {
  title: string;
  description: string;
  linkUrl: string;
  disabled?: boolean;
}
const Card: React.FC<CardProps> = ({
  title,
  description,
  linkUrl,
  disabled = false,
}) => {
  const navigate = useNavigate();

  const onClick = () => {
    if (disabled) return;
    navigate(linkUrl);
    return;
  };

  return (
    <>
      <div
        className={`flex h-fit w-full cursor-pointer flex-col space-y-2 rounded-md border-[0.5px] border-gray-300 p-4 transition-all ${disabled ? "cursor-not-allowed" : "hover:border-[1px] hover:border-blue-500 hover:bg-gray-50"}`}
        onClick={onClick}
      >
        <div>
          <p className="font-bold">{title}</p>
          <p className="text-sm text-gray-400">{description}</p>
        </div>
      </div>
    </>
  );
};
