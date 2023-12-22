import CssBaseline from "@mui/material/CssBaseline";
import RepoListComponent from "./components/RepoListComponent";
import "./App.css";

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <h1 className="AppHeader">Browse github JS repos</h1>
      <RepoListComponent />
    </div>
  );
}

export default App;
