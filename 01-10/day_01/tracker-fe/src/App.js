import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import ProjectForm from "./components/ProjectForm";
import ProjectList from "./components/ProjectList";

function App() {
  return (
    <div className="App">
      <Header />
      <ProjectList />
      <ProjectForm />
    </div>
  );
}

export default App;
