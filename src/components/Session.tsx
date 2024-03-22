"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Session({ access_token }: { access_token: string }) {
  const router = useRouter();

  useEffect(() => {
    localStorage.setItem("access_token", access_token);

    router.replace("/");
  }, []);

  return <div>Caricamento in corso...</div>;
}
