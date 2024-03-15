import HocCheck from "./reactjs/hoc/hoc-check";

function About() {
  return (
    <>
      <strong style={{ padding: "20px", color: "green" }}>About page</strong>
    </>
  );
}

export default HocCheck(About,false);
