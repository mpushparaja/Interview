import { useNavigate } from "react-router-dom";
import "./pure-com.module.css";

export default function PureCom() {
  const navigate = useNavigate();
  function handleClick() {
      navigate("/home");
    }
  return (
    <>
      <strong style={{padding:'20px', color:"green"}}>Pure component example</strong>
      <p className="des">
        Pure components are the components which render the same output for the
        same state and props. In function components, you can achieve these pure
        components through memoized React.memo() API wrapping around the
        component. This API prevents unnecessary re-renders by comparing the
        previous props and new props using shallow comparison. So it will be
        helpful for performance optimizations.
        <br />
        <mark>The syntactic representation of memoized components looks like below:</mark>
        <em>const MemoizedComponent = memo(SomeComponent, arePropsEqual?);</em>
      </p>
      <button type="button" className="btn btn-primary" onClick={handleClick}>Back to list</button>
    </>
  );
}
