import Link from "next/link";
import React from "react";
import { useSession, signOut, signIn } from "next-auth/react";

export default function Login() {
  const { data: session } = useSession();

  if (session) {
    return (
      <div >
        <p>Welcome {session.user.name}</p>
        <Link href={`/userPage/${session.user.id}`}>
          <img
            src={session.user.image}
            style={{ borderRadius: "50px", height: "35px", width: "35px" }}
          ></img>
        </Link>
        <br></br>        
      </div>
    );
  }
  return (
    <>
      <a onClick={() => signIn()}>Sign in</a>
    </>
  );
}
