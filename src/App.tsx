import ANHeader from "./components/Header/Header";
import ANShowCase from "./components/ShowCase/ANShowCase";
import AboutMe from "./components/AboutMe/AboutMe";
import Resume from "./components/Resume/Resume";
import Skills from "./components/Skills/Skills";
import classes from "./App.module.css";
import RecentProeject from "./components/RecentProjects/RecentProjects";
function App() {
  return (
    <div className={classes.mainContainer}>
      <ANHeader />
      <ANShowCase />
      <AboutMe />
      <Resume />
      <Skills />
      <RecentProeject />
    </div>
  );
}

export default App;
