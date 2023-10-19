"use client";

import { signIn } from "next-auth/react";
import config from "@/config";

// A simple button to sign in with our providers (Google & Magic Links).
// It automatically redirects user to callbackUrl (config.auth.callbackUrl) after login, which is normally a private page for users to manage their accounts.
const ButtonSignin = ({ text = "Get started", extraStyle }) => {
  return (
    <button
      className={`btn ${extraStyle ? extraStyle : ""}`}
      onClick={() =>
        signIn(undefined, { callbackUrl: config.auth.callbackUrl })
      }
    >
      {text}
    </button>
  );
};

export default ButtonSignin;
