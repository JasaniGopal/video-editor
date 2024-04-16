import Sidebar from "../compontent/sidebar/Sidebar";

function NewVideo() {
    return (
        <div className="flex">
        <div className="w-[15%]">
        <Sidebar />
        </div>
        <div className="w-[85%]">
          new videos
        </div>
      </div>
    );
  }
  
  export default NewVideo;
  