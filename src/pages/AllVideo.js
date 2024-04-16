import Sidebar from "../compontent/sidebar/Sidebar";

function AllVideo() {
  return (
    <div className="flex">
        <div className="w-[15%]">
        <Sidebar />
        </div>
        <div className="w-[85%]">
          all video
        </div>
      </div>
  );
}

export default AllVideo;
