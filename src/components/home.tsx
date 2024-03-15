export default function Home() {
  return (
    <>
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
