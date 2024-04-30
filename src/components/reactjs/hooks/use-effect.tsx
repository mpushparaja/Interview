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

  const array = [
    { key: "1", type: "planet", value: "Tatooine" },
    { key: "2", type: "planet", value: "Alderaan" },
    { key: "3", type: "starship", value: "Death Star" },
    { key: "4", type: "starship", value: "CR90 corvette" },
    { key: "5", type: "starship", value: "Star Destroyer" },
    { key: "6", type: "person", value: "Luke Skywalker" },
    { key: "7", type: "person", value: "Darth Vader" },
    { key: "8", type: "person", value: "Leia Organa" },
  ];

  const [inputValue, setInputValue] = useState("");
  const [inputType, setInputType] = useState("");
  const [filteredArray, setFilteredArray] = useState(array);

  const inputValueHandler = (e: any) => {
    setInputValue(e.target.value);
  };

  const inputTypeHandler = (e: any) => {
    setInputType(e.target.value);
  };

  useEffect(() => {
    setFilteredArray((_) => {
      const newArray = array
        .filter((item) => item.value.includes(inputValue))
        .filter((item) => item.type.includes(inputType));
      return newArray;
    });
  }, [inputValue, inputType]);

  // Prepare array to be rendered
  const listItems = filteredArray.map((item) => (
    <>
      <tr>
        <td style={{ border: "1px solid lightgray", padding: "0 1rem" }}>
          {item.type}
        </td>
        <td style={{ border: "1px solid lightgray", padding: "0 1rem" }}>
          {" "}
          {item.value}
        </td>
      </tr>
    </>
  ));

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

      <h3>Running on state change: live filtering</h3>
      <form
        style={{
          maxWidth: "23rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <label htmlFor="input-type">
            Filter by <b>type</b>
          </label>
          <br />
          <input
            type="text"
            id="input-type"
            autoComplete="off"
            onChange={inputTypeHandler}
            style={{ height: "1.5rem", width: "10rem", marginTop: "1rem" }}
          />
        </div>
        <div>
          <label htmlFor="input-value">
            Filter by <b>value</b>
          </label>
          <br />
          <input
            type="text"
            id="input-value"
            autoComplete="off"
            onChange={inputValueHandler}
            style={{ height: "1.5rem", width: "10rem", marginTop: "1rem" }}
          />
        </div>
      </form>
      <br />
      <table
        style={{ width: "20rem", border: "1px solid gray", padding: "0 1rem" }}
      >
        <tr>
          <th>Type</th>
          <th>Value</th>
        </tr>
        {listItems}
      </table>
    </>
  );
}
