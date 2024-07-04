import React from "react";
import { useStorageState } from "./useStorageState";
import { useRouter } from "expo-router";

// Define the context type with the correct function signatures
type AuthContextType = {
  signIn: ({ email, password }: { email: string; password: string }) => void;
  signOut: () => void;
  session?: string | null;
  isLoading: boolean;
};

const AuthContext = React.createContext<AuthContextType>({
  signIn: () => null,
  signOut: () => null,
  session: null,
  isLoading: false,
});

// This hook can be used to access the user info.
export function useSession() {
  const value = React.useContext(AuthContext);
  if (process.env.NODE_ENV !== "production") {
    if (!value) {
      throw new Error("useSession must be wrapped in a <SessionProvider />");
    }
  }

  return value;
}

export function SessionProvider(props: React.PropsWithChildren) {
  const [[isLoading, session], setSession] = useStorageState("session");
  const router = useRouter();

  const signIn = ({ email, password }: { email: string; password: string }) => {
    alert(`email: ${email}, password: ${password}`);

    // Set the session token (this is just a placeholder)
    setSession("xxx");
    router.replace("/(home)/home");
  };

  return (
    <AuthContext.Provider
      value={{
        signIn,
        signOut: () => {
          setSession(null);
        },
        session,
        isLoading,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}
