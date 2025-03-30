import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";

type Props = {
  className?: string;
} & PropsWithChildren;

export default function AppLayoutRoot({ children, className }: Props) {
  return (
    <div
      className={cn(
        "h-screen max-h-screen flex flex-col justify-between px-4",
        className
      )}
    >
      {children}
    </div>
  );
}
