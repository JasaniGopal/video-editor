import "./App.css";
import Dashboard from "./compontent/dashboard/Dashboard";
import Sidebar from "./compontent/sidebar/Sidebar";

function App() {
  return (
    <>
      <div className="flex">
        <div className="w-[15%]">
        <Sidebar />
        </div>
        <div className="w-[85%]">
          <Dashboard />
        </div>
      </div>
    </>
  );
}

export default App;
