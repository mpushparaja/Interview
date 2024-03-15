import { useNavigate } from "react-router-dom";
import "../../../index.css";
export default function Hoc() {
    const navigate = useNavigate();
    function handleClick() {
        navigate("/home");
      }
  return (
    <>
      <strong style={{ padding: "20px", color: "green" }}>
        HOC - Higher order component
      </strong>
      <p className="desc">
        HOC is a function that takes a component and return new component, using
        reusable component logic in react. It transforms a component in to
        another component.
        <br />
        <br />
        <mark>
          const EnhancedComponent = higherOrderComponent(wrappedComponent)
        </mark>
        <br />
        <br />
        <strong style={{ padding: "20px", color: "green" }}>
          Benefits of Higher Order Components
        </strong>
        <ul>
          <li>
            Reusability: HOCs allow you to encapsulate shared functionalities
            and apply them to multiple components, promoting code reuse.
          </li>
          <li>
            Separation of Concerns: HOCs help maintain separate
            responsibilities, enabling your components to focus on their
            specific tasks.
          </li>
          <li>
            Code Abstraction: HOCs abstract common logic from components, making
            them more concise and easier to understand.
          </li>
          <li>
            Composability: You can combine various HOCs to compose complex
            functionalities into your components.
          </li>
        </ul>
      </p>
      <button type="button" className="btn btn-primary" onClick={handleClick}>Back to list</button>
    </>
  );
}
