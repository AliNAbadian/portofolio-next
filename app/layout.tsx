import CursorFlair from "@/features/layout/components/CursorFlair";
import type { ReactNode } from "react";

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <CursorFlair />
      {children}
    </>
  );
}
