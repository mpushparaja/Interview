import { createContext, useContext } from "react";
import { userInfo } from "../models/user-info";

export const DashboardContext = createContext<userInfo | undefined>(undefined);

export function useUserContext() {
  const user = useContext(DashboardContext);
  if (user === undefined) {
    throw new Error("error creating user context");
  }
  console.log(user.name)
  if(user.name === 'Pushparaja'){
    user.name = 'Pushparaja Murugesan'
  }
  return user;
}
