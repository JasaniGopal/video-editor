import AudioIcon from "../assets/svg/AudioIcon";
import CameraIcon from "../assets/svg/Camera";
import ScreenIcon from "../assets/svg/ScreenIcon";
import SlidesIcon from "../assets/svg/SlidesIcon";
import styles from "./Page.module.scss";

function RecordVideo() {
  return (
    <>
      <div>
        <h3 className="text-center text-[34px] font-[500] py-[40px]">
          What would you like to record?
        </h3>
        <div
          className={`${styles.recordOptions} flex justify-center gap-[50px] mb-[40px]`}
        >
          <a href="/record-video/camera-recorder" className="bg-[#ece9e9] hover:bg-white px-[40px] text-center py-[10px] rounded-[8px] w-[250px] cursor-pointer border-2 border-[#000000] hover:border-[#2f6fa5]">
            <div className="flex justify-center mb-[5px]">
              <CameraIcon />
            </div>
            <p className="text-[20px] font-[400]">Camera</p>
          </a>
          <a href="/record-video/audio-recorder" className="bg-[#ece9e9]  hover:bg-white px-[40px] text-center py-[10px] rounded-[8px] w-[250px] cursor-pointer border-2 border-[#000000] hover:border-[#2f6fa5]">
            <div className="flex justify-center mb-[5px]">
              <AudioIcon />
            </div>
            <p className="text-[20px] font-[400]">Audio</p>
          </a>
          <a href="/" className="bg-[#ece9e9]  hover:bg-white px-[40px] text-center py-[10px] rounded-[8px] w-[250px] cursor-pointer border-2 border-[#000000] hover:border-[#2f6fa5]">
            <div className="flex justify-center mb-[5px]">
              <ScreenIcon />
            </div>
            <p className="text-[20px] font-[400]">Screen</p>
          </a>
        </div>
        <div
          className={`${styles.recordOptions} flex justify-center gap-[50px]`}
        >
          <a href="/" className="bg-[#ece9e9]  hover:bg-white px-[40px] text-center py-[10px] rounded-[8px] w-[250px] cursor-pointer border-2 border-[#000000] hover:border-[#2f6fa5]">
            <div className="flex gap-[10px] justify-center  mb-[5px]">
              <CameraIcon /> <ScreenIcon />
            </div>
            <p className="text-[20px] font-[400]">Screen & Camera</p>
          </a>
          <a href="/" className="bg-[#ece9e9]  hover:bg-white px-[40px] text-center py-[10px] rounded-[8px] w-[250px] cursor-pointer border-2 border-[#000000] hover:border-[#2f6fa5]">
            <div className="flex gap-[10px] justify-center  mb-[5px]">
              <SlidesIcon /> <CameraIcon />
            </div>
            <p className="text-[20px] font-[400]">Slides & Camera</p>
          </a>
          <a href="/" className="bg-[#ece9e9]  hover:bg-white px-[40px] text-center py-[10px] rounded-[8px] w-[250px] cursor-pointer border-2 border-[#000000] hover:border-[#2f6fa5]">
            <div className="flex gap-[10px] justify-center  mb-[5px]">
              <SlidesIcon />
            </div>
            <p className="text-[20px] font-[400]">Slides</p>
          </a>
        </div>
      </div>
    </>
  );
}

export default RecordVideo;
