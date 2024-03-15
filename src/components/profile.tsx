import HocCheck from "./reactjs/hoc/hoc-check";

function Profile() {
  return (
    <>
      <strong style={{ padding: "20px", color: "green" }}>Profile page</strong>
    </>
  );
}

export default HocCheck(Profile, true);
