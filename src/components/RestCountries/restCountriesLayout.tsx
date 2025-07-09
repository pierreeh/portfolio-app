import type { ReactNode } from "react";
import { Outlet } from "react-router-dom";

import RestCountriesHeader from "./restCountriesHeader";

export default function RestCountriesLayout({
  children,
}: {
  children?: ReactNode;
}) {
  return (
    <>
      <RestCountriesHeader />
      <main>{children ?? <Outlet />}</main>
    </>
  );
}
