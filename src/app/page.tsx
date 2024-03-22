"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { UIButton } from "../components/Button";
import { UIPage } from "../components/Page";

export default function Page() {
  const access_token = localStorage.getItem("access_token");
  const [isLogged, setIsLogged] = useState(!!access_token);
  const router = useRouter();

  function onClickLogin() {
    router.replace("/login");
  }

  function onClickLogout() {
    localStorage.removeItem("access_token");
    setIsLogged(false);
  }

  return (
    <UIPage>
      {isLogged ? (
        <>
          <h1>Benvenuto {"username"}</h1>
          <UIButton onClick={onClickLogout}>Logout</UIButton>
        </>
      ) : (
        <UIButton onClick={onClickLogin}>Autenticati con GitHub</UIButton>
      )}
    </UIPage>
  );
}
