import type { ReactNode } from "react";
import Header from "./header";
export default function layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Header />
      <main>{children}</main>
    </div>
  );
}
