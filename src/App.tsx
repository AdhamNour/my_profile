import ANHeader from "./components/Header/Header";
import ANShowCase from "./components/ShowCase/ANShowCase";
import classes from "./App.module.css";
function App() {
  return (
    <div className={classes.mainContainer}>
      <ANHeader />
      <ANShowCase />
    </div>
  );
}

export default App;
