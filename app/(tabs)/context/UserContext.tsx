import React, { createContext, ReactNode, useContext, useState } from "react";

type UserContextType = {
  username: string;
  setUsername: (name: string) => void;
  profileImageUri: string | null;
  setProfileImageUri: (uri: string | null) => void;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [username, setUsername] = useState("");
  const [profileImageUri, setProfileImageUri] = useState<string | null>(null);

  return (
    <UserContext.Provider
      value={{
        username,
        setUsername,
        profileImageUri,
        setProfileImageUri,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) throw new Error("useUser must be used within a UserProvider");
  return context;
};
