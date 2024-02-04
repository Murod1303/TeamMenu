import { Dashboard } from "./Components/Dashboard/Dashboard";
import { Home } from "./Pages/Home/Home";

function App() {
  return (
    <div className="wrapper flex w-full gap-2">
      <Dashboard />
      <Home />
    </div>
  );
}

export default App;
