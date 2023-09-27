"use client";

import { useState } from "react";
import apiClient from "@/libs/api";

import { signIn } from "next-auth/react";
import config from "@/config";

const SigninButton = () => {
  return (
    <button
      className="btn btn-primary"
      onClick={() =>
        signIn(undefined, { callbackUrl: config.auth.callbackUrl })
      }
    >
      Login
    </button>
  );
};

const UserProfile = () => {
  const [isLoading, setIsLoading] = useState(false);

  const saveUser = async () => {
    setIsLoading(true);

    try {
      const { data } = await apiClient.post("/user", {
        email: "new@gmail.com",
      });

      console.log(data);
    } catch (e) {
      console.error(e?.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-12">
      <h2>hey</h2>
      <SigninButton />
    </div>
  );
};

export default UserProfile;
