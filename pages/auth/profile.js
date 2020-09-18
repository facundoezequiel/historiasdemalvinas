import React from "react";
import auth0 from "lib/auth0";
import UserProfile from "@/containers/userprofile";

export default function Profile({ user }) {
  return <UserProfile user={user} />;
}

// Protection page
export async function getServerSideProps({ req, res }) {
  const session = await auth0.getSession(req);
  if (!session || !session.user) {
    res.writeHead(302, {
      Location: "/api/login",
    });
    res.end();
    return {};
  }
  return { props: { user: session.user } };
}
