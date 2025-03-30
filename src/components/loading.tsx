import { cn } from "@/lib/utils";
import { CircleIcon } from "lucide-react";

type Props = {
  className?: string;
};

export default function Loading({ className }: Props) {
  return (
    <div
      className={cn(
        "w-full flex flex-col items-center justify-center",
        className
      )}
    >
      <div className="relative w-12 h-12 flex items-center justify-center mb-4">
        <div className="absolute inset-0 rounded-full bg-lotr-gold/10 animate-ring-pulse"></div>
        <div className="absolute inset-0 rounded-full bg-lotr-gold/5 animate-ping"></div>
        <CircleIcon className="w-6 h-6 text-lotr-gold animate-spin-slow" />
      </div>
      <p className="font-display animate-pulse text-sm">Loading</p>
    </div>
  );
}
