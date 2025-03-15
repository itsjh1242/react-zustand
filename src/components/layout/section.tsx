import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
}
export const Section: React.FC<SectionProps> = ({ children, className }) => {
  return (
    <section
      className={cn(
        `m-auto flex w-full max-w-[1200px] flex-col space-y-2 py-10`,
        className,
      )}
    >
      {children}
    </section>
  );
};
