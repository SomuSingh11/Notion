import { Logo } from "./logo";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  return (
    <div className="flex items-center w-full p-6 bg-background z-50 dark:bg-[#1F1F1F]">
      <Logo />
      <div className="w-full flex justify-between md:justify-end md:ml-auto items-center gap-x-2 text-muted-foreground">
        <Button variant="ghost" size="sm">
          Privacy Policy
        </Button>
        <Button variant="ghost" size="sm">
          Terms & Conditions
        </Button>
      </div>
    </div>
  );
};
