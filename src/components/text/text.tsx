import { cn } from "@/lib/utils";
import React from "react";

interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
  className?: string;
}

export const H1: React.FC<TextProps> = ({ children, className }) => {
  return (
    <h1 className={cn("text-3xl font-bold text-gray-900", className)}>
      {children}
    </h1>
  );
};

export const H2: React.FC<TextProps> = ({ children, className }) => {
  return (
    <h2 className={cn("text-2xl font-semibold text-gray-900", className)}>
      {children}
    </h2>
  );
};

export const H3: React.FC<TextProps> = ({ children, className }) => {
  return (
    <h3 className={cn("text-xl font-medium text-gray-800", className)}>
      {children}
    </h3>
  );
};

export const Text: React.FC<TextProps> = ({ children, className }) => {
  return <p className={cn("text-base text-gray-700", className)}>{children}</p>;
};

export const MutedText: React.FC<TextProps> = ({ children, className }) => {
  return <p className={cn("text-sm text-gray-500", className)}>{children}</p>;
};

export const Label: React.FC<TextProps> = ({ children, className }) => {
  return (
    <label className={cn("text-sm font-medium text-gray-900", className)}>
      {children}
    </label>
  );
};

export const Caption: React.FC<TextProps> = ({ children, className }) => {
  return (
    <span className={cn("text-xs text-gray-500", className)}>{children}</span>
  );
};
