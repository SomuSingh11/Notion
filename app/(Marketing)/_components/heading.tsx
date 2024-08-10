"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Heading = () => {
  return (
    <div className="max-w-3xl space-y-4">
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
        Centralize your creativity, documents, and planning. Say hello to{" "}
        <span className="underline"> Jotion. </span>
      </h1>
      <h3 className="text-base sm:text-xl md:text-2xl font-medium">
        Jotion: The workspace that brings everything <br />
        together for smoother workflows.
      </h3>
      <Button>
        Enter Jotion
        <ArrowRight className="h-4 w-4 ml-2" />
      </Button>
    </div>
  );
};
