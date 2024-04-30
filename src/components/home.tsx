import { useState } from "react";
import { userInfo } from "./reactjs/models/user-info";
import { DashboardContext } from "./reactjs/hooks/use-context";
import Profile from "./profile";

export default function Home() {
  const [user] = useState<userInfo>({
    name: "Pushparaja",
    empId: 290345,
  });
  return (
    <>
      <DashboardContext.Provider value={user}>
        <Profile />
      </DashboardContext.Provider>
      <div>
        <strong style={{ padding: "20px", color: "green" }}>
          Javascript Basics
        </strong>
        <ul>
          <li>
            <a href="#">Promise</a>
          </li>
          <li>
            <a href="#">Aync await</a>
          </li>
          <li>
            <a href="#">Hoisting</a>
          </li>
        </ul>
        <div>
          <strong style={{ padding: "20px", color: "green" }}>
            React essentials
          </strong>

          <ul>
            <li>
              <a href="/pure-com">Pure component</a>
            </li>
            <li>
              <a href="/hoc">Higher order component</a>
            </li>
            <li>
              <a href="/use-effect">useEffect</a>
            </li>
            <li>
              <a href="#">State and Props</a>
            </li>
            <li>
              <a href="#">Error boundary</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
