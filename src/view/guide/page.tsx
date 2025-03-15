import { Section } from "@/components/layout/section";
import { H1, MutedText } from "@/components/text/text";

export const GuidePage: React.FC = () => {
  return (
    <>
      <Section>
        <H1 className="text-3xl font-bold">Zustand Store Guide</H1>
        <MutedText>
          A small, fast, and scalable bearbones state management solution.{" "}
          <strong>Zustand</strong> has a comfy API based on hooks.
        </MutedText>
      </Section>
    </>
  );
};
