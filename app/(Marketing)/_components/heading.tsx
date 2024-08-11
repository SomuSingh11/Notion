"use client";

import { ArrowRight } from "lucide-react";
import { useConvexAuth } from "convex/react";
import { SignInButton } from "@clerk/clerk-react";
import Link from "next/link";

import { Spinner } from "@/components/spinner";
import { Button } from "@/components/ui/button";

export const Heading = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();
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

      {isLoading && (
        <div className="flex items-center justify-center w-full">
          <Spinner size="lg" />
        </div>
      )}

      {isAuthenticated && !isLoading && (
        <Button asChild>
          <Link href="/documents">
            Enter Jotion
            <ArrowRight className="h-4 w-4 ml-2" />
          </Link>
        </Button>
      )}

      {!isAuthenticated && !isLoading && (
        <SignInButton mode="modal">
          <Button>
            {" "}
            Get Jotion free <ArrowRight className="h-4 w-4 ml-2" />{" "}
          </Button>
        </SignInButton>
      )}
    </div>
  );
};
