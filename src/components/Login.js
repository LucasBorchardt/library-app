import Link from "next/link";
import React from "react";
import { useSession, signOut, signIn } from "next-auth/react";

export default function Login() {
  const { data: session } = useSession();
  console.log(session);
  if (session) {
    return (
      <>
        <Link href={`/userPage/${session.user.id}`}>
          <img
            src={session.user.image}
            style={{ borderRadius: "50px", height: "35px", width: "35px" }}
          ></img>
        </Link>
        <br></br>
        <Link href="/" onClick={() => signOut()}>
          Sign out
        </Link>
      </>
    );
  }
  return (
    <>
      <Link href="/userPage" onClick={() => signIn()}>
        Sign in
      </Link>
    </>
  );
}
