import { Link, useLocation } from "react-router-dom";
import HomeIcon from "../../assets/svg/HomeIcon";
import PlusIcon from "../../assets/svg/PlusIcon";
import TemplateIcon from "../../assets/svg/TemplateIcon";
import VideoIcon from "../../assets/svg/VideoIcon";
import styles from "./Sidebar.module.scss"

function Sidebar() {
  const location = useLocation();

  return (
    <>
    <div className={`${styles.sidebarWrapper} px-[20px] sticky top-0`}>
      <div className={`${styles.logoWrapper}`}>
        <p className="text-[30px] font-[700] py-[10px] px-[5px] cursor-pointer">EditVid.io</p>
        <div className={`${styles.sidebarList}`}>
          <li className={` ${location.pathname === "/" ? styles.active : ''} list-none text-[20px] font-[500] px-[5px] py-[5px] my-[10px] hover:bg-[#ece9e9] hover:rounded-[6px] cursor-pointer`}>
            <Link to="/" className="flex items-center gap-[8px]"> <HomeIcon /> Home</Link>
          </li>
          <li className={` ${location.pathname === "/new-video" ? styles.active : ''} list-none text-[20px] font-[500] px-[5px] py-[5px] my-[10px] hover:bg-[#ece9e9] hover:rounded-[6px] cursor-pointer`}>
          <Link to="/new-video" className="flex items-center gap-[8px]"> <PlusIcon /> New Video</Link>
          </li>
          <li className={ ` ${location.pathname === "/template" ? styles.active : ''} list-none text-[20px] font-[500] px-[5px] py-[5px] my-[10px] hover:bg-[#ece9e9] hover:rounded-[6px] cursor-pointer `}>
          <Link to="/template" className="flex items-center gap-[8px]"> <TemplateIcon /> Template</Link>
          </li>
          <li className={ ` ${location.pathname === "/all-videos" ? styles.active : ''} list-none text-[20px] font-[500] px-[5px] py-[5px] my-[10px] hover:bg-[#ece9e9] hover:rounded-[6px] cursor-pointer `}>
          <Link to="/all-videos" className="flex items-center gap-[8px]"> <VideoIcon /> All Videos</Link>
          </li>
        </div>
      </div>
    </div>
    </>
  );
}

export default Sidebar;
