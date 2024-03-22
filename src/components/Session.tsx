"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { UISpinner } from "./Spinner";

export default function Session({ access_token }: { access_token: string }) {
  const router = useRouter();

  useEffect(() => {
    localStorage.setItem("access_token", access_token);

    router.replace("/");
  }, []);

  return <UISpinner />;
}
