import { useState, useEffect } from "react";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import Layout from "@/components/Layout";

export default function UserPage() {
  const { data: session, status } = useSession({required: true});
  const [books, setBooks] = useState([]);

return (
  <Layout/>
)
}