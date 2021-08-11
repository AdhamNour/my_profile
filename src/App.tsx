import ANHeader from "./components/Header/Header";
import ANShowCase from "./components/ShowCase/ANShowCase";
import AboutMe from "./components/AboutMe/AboutMe";
import classes from "./App.module.css";
function App() {
  return (
    <div className={classes.mainContainer}>
      <ANHeader />
      <ANShowCase />
      <AboutMe />
    </div>
  );
}

export default App;
