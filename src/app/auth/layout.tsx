import { AuthNav, Footer } from "@/components/layout";
import React from "react";

export default function AuthLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <AuthNav />
      {children}
    </>
  );
}
