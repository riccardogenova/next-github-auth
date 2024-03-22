"use client";

import Link from "next/link";
import { useState } from "react";

export default function Page() {
  const access_token = localStorage.getItem("access_token");
  const [isLogged, setIsLogged] = useState(!!access_token);

  if (isLogged)
    return (
      <div>
        <h1>Benvenuto</h1>
        <button
          onClick={() => {
            localStorage.removeItem("access_token");
            setIsLogged(false);
          }}
        >
          Logout
        </button>
      </div>
    );

  return <Link href="/login">GitHub Login</Link>;
}
