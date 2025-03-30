import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";

type Props = {
  className?: string;
} & PropsWithChildren;

export default function AppLayoutMain({ children, className }: Props) {
  return (
    <main className={cn("w-full max-w-6xl mx-auto", className)}>
      {children}
    </main>
  );
}
