"use client";
import ReactLenis, { useLenis } from "lenis/react";
import React, { ReactNode } from "react";

const ClientWrapper = ({ children }: { children: ReactNode }) => {
  //   const lenis = useLenis(({ scroll }) => {});
  return <ReactLenis root>{children}</ReactLenis>;
};

export default ClientWrapper;
