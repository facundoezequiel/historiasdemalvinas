import React from "react";
import { useUser } from "@/lib/useUser";

export default function Layout({ children }) {
  const { user } = useUser();
  console.log(user);

  return <>{children}</>;
}
