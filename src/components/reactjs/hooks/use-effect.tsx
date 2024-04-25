import { useEffect, useState } from "react";

export function UseEffect() {
  const [data, setData] = useState();
  const [input, setInput] = useState("");
  const [isValid, setIsValid] = useState(false);
  const inputHandler = (e: any) => {
    setInput(e.target.value);
  };

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    const fetchData = async () => {
      const response = await fetch("https://fakestoreapi.com/products/1");
      const data = await response.json();
      setData(data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (input.length < 5) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  }, [input]);
  // Empty dependencies array will make useEffect to run only once at startup because that array never changes
  return (
    <>
      <div>
        <p>Data {JSON.stringify(data, null, "\t")} </p>

        <h3>Running on state change: validating input field</h3>
        <form>
          <label htmlFor="input">
            Write something (more than 5 non numerical characters is a valid
            input)
          </label>
          <br />
          <input
            type="text"
            id="input"
            autoComplete="off"
            onChange={inputHandler}
            style={{ height: "1.5rem", width: "20rem", marginTop: "1rem" }}
          />
        </form>
        <p>
          <span
            style={
              isValid
                ? { backgroundColor: "lightgreen", padding: ".5rem" }
                : { backgroundColor: "lightpink", padding: ".5rem" }
            }
          >
            {isValid ? "Valid input" : "Input not valid"}
          </span>
        </p>
      </div>
    </>
  );
}
