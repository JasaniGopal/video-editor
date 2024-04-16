import Sidebar from "../compontent/sidebar/Sidebar";

function Template() {
  return (
    <div className="flex">
        <div className="w-[15%]">
        <Sidebar />
        </div>
        <div className="w-[85%]">
          Template
        </div>
      </div>
  );
}

export default Template;
