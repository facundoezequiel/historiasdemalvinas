import React from "react";
import { useUser } from "@/lib/useUser";

export default function Layout({ children }) {
  const { user } = useUser();

  return <>{children}</>;
}
