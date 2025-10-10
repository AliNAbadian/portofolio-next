"use client";

import ReactLenis from "lenis/react";
import React, { ReactNode } from "react";
import CustomCursor from "@/shared/ui/visuals/CustomCursor";

const ClientWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <ReactLenis root>{children}</ReactLenis>
      <CustomCursor />
    </>
  );
};

export default ClientWrapper;
