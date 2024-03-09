"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader
} from "@/components/ui/card";

import { Header } from "@/components/auth/header";
import { Social } from "@/components/auth/social";
import { BackButton } from "@/components/auth/back-button";


interface CardWrapperProps {
  children: React.ReactNode;
  headerLaber: string;
  backButtonLabel: string;
  backButtonHref: string;
  showlSocial?: boolean;
};

export const CardWrapper = ({
  children,
  headerLaber,
  backButtonLabel,
  backButtonHref,
  showlSocial
}: CardWrapperProps) => {
  return (
    <Card className=" w-[400px] shadow-md">
      <CardHeader>
        <Header label={headerLaber} />
      </CardHeader>
      <CardContent>
        {children}
      </CardContent>
      {showlSocial && (
        <CardFooter>
          <Social />
        </CardFooter>
      )}
      <CardFooter>
        <BackButton
          label={backButtonLabel}
          href={backButtonHref}
        />
      </CardFooter>

    </Card>
  )
}