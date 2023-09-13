import { useEffect } from "react";
import { signIn, useSession } from "next-auth/react";
import config from "@/config";

// Use this on all private routes (like user dashboard, accounts). It will redirect the user to the login page if not authenticated
export const usePrivate = (callbackUrl = config.callbackUrl) => {
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === "unauthenticated") {
      signIn(undefined, { callbackUrl });
    }
  }, [status]);

  return [session, status];
};
