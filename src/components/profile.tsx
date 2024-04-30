import HocCheck from "./reactjs/hoc/hoc-check";
import { useUserContext } from "./reactjs/hooks/use-context";

function Profile() {
  const user =useUserContext();
  console.log(user);
  return (
    <>
      <strong style={{ padding: "20px", color: "green" }}>Profile page</strong>
      <p>UserName: {user?.name}</p>
      <p>Employee Id: {user?.empId}</p>
    </>
  );
}

export default HocCheck(Profile, true);
