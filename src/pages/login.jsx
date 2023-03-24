import { useSession, signIn, signOut } from "next-auth/react";
import Layout from "../components/Layout";

export default function LogInPage() {
  const { data: session} = useSession();
  if (session){
    return (
      <div>
        <p>Welcome, {session.user.email}</p>
        <button onClick={() => signOut()}>Sign Out</button>
      </div>
    );
  } else{
    return (
      <div>
        <p>you are not signed in</p>
        <button onClick={() => signIn()}>Sign In</button>
      </div>
    )
  }
}
 