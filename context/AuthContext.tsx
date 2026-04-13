import { createContext, useState } from "react";

// Pass a default value (optional but recommended for testing)
export const MyContext = createContext({
  user: { name: "", email: "", age: 0 },
  setUser: (user: { name: string; email: string; age: number }) => {},
});

export const MyProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState({ name: "", email: "", age: 0 });

  return (
    <MyContext.Provider value={{ user, setUser }}>
      {children}
    </MyContext.Provider>
  );
};
