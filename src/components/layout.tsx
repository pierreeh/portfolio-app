import type { ReactNode } from "react";
import { Outlet } from "react-router-dom";

import Header from "./header";

export default function Layout({ children }: { children?: ReactNode }) {
  return (
    <>
      <Header />
      <main>{children ?? <Outlet />}</main>
    </>
  );
}
