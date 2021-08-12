import ANHeader from "./components/Header/Header";
import ANShowCase from "./components/ShowCase/ANShowCase";
import AboutMe from "./components/AboutMe/AboutMe";
import Resume from "./components/Resume/Resume";
import classes from "./App.module.css";
function App() {
  return (
    <div className={classes.mainContainer}>
      <ANHeader />
      <ANShowCase />
      <AboutMe />
      <Resume />
    </div>
  );
}

export default App;
