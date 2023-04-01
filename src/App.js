import "./styles.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="container">
      <Weather defaultCity="London" />
      <p className="footer">
        This application was coded by{" "}
        <a href="https://github.com/mxgncraig">Megan Craig</a> and is
        open-sourced.
      </p>
    </div>
  );
}
