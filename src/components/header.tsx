import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";

export type HeaderProps = {
  className?: string;
} & PropsWithChildren;

export default function Header({ children, className }: HeaderProps) {
  return (
    <header className={cn("max-w-4xl mx-auto py-8 md:py-16", className)}>
      {children}
    </header>
  );
}
