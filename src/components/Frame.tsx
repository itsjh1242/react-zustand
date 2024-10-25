import { cn } from "../lib/utils";

interface FrameProps {
  children: React.ReactNode;
  className?: string;
}
export const Frame: React.FC<FrameProps> = ({ children, className }) => {
  return (
    <div
      className={cn(
        `w-full h-full min-h-screen flex flex-col justify-center items-center dark:bg-[#242424] dark:text-[#ffffff] transition duration-300`,
        className
      )}
    >
      {children}
    </div>
  );
};

interface DividerProps {
  className?: string;
}
export const Divider: React.FC<DividerProps> = ({ className }) => {
  return <div className={cn(`mt-[30px]`, className)}></div>;
};

interface TitleProps {
  className?: string;
  text: string;
}
export const Title: React.FC<TitleProps> = ({ className, text }) => {
  return <p className={cn("text-4xl font-bold", className)}>zustand - {text}</p>;
};
