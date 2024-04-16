import React, { useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import styles from "./Page.module.scss";
import UploadIcon from "../assets/svg/UploadIcon";
import SlidesIcon from "../assets/svg/UploadIcon";
import Sissor from "../assets/svg/Sissor";
import Template from "../assets/svg/TemplateIcon";
import CrossIcon from "../assets/svg/CrossIcon";
import DownloadIcon from "../assets/svg/DownloadIcon";
import PreviousIcon from "../assets/svg/PreviousIcon";
import PlayPauseIcon from "../assets/svg/PlayPauseIcon";
import ForwardIcon from "../assets/svg/ForwardIcon";

function CreateProject() {
  const [modalOpen, setModalOpen] = useState(false);
  const [uploadedFile, setUploadedFile] = useState(null);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    openModal();
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles) => {
      setUploadedFile(acceptedFiles[0]);
      closeModal();
    },
  });

  return (
    <>
      {modalOpen && (
        <div className="h-[100vh] flex">
          <div className={`${styles.uploadModal} py-[40px] px-[20px] m-auto`}>
            <div className="modal-content">
              <span
                className="close flex justify-end text-[20px] font-[600] cursor-pointer"
                onClick={closeModal}
              >
                <CrossIcon />
              </span>
              <h2 className="text-center text-[30px] font-[500] pb-[20px]">
                Let's make a video!
              </h2>
              <div className="text-center mt-4">
                <div
                  {...getRootProps()}
                  className="dropzone flex flex-col justify-center items-center border border-[#d4d0d0] bg-[#edefed] w-[300px] m-auto p-[20px] rounded-[8px] cursor-pointer"
                >
                  <input {...getInputProps()} placeholder="Upload your Files" />
                  <UploadIcon />
                  <p className="text-[#000000] text-[18px] font-[400] pt-[10px]">
                    Upload Files
                  </p>
                  <p className="text-[#000000] text-[18px] font-[500]">OR</p>
                  <p className="text-[#000000] text-[18px] font-[400]">
                    Drag and Drop the files here
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className={`${styles.createProjectWrapper} flex`}>
        <div className={` ${styles.assetWrap} p-[20px] w-[20%] text-center`}>
          <h2 className="pb-[20px] text-[28px] font-[600] sticky top-[10px]">
            Assets
          </h2>
          {uploadedFile && (
            <div className="flex flex-col items-center">
              <video  className={`${styles.assetBox} rounded-[4px]`}>
                <source
                  src={URL.createObjectURL(uploadedFile)}
                  type="video/mp4"
                />
              </video>
              <p>{uploadedFile.name}</p>
            </div>
          )}
        </div>
        <div className="w-[60%] p-[20px] text-center text-[28px] font-[600]">
          <h2>Your Edit</h2>
          {uploadedFile && (
            <div>
              <video autoPlay="true" autoPlay controls loop>
                <source
                  src={URL.createObjectURL(uploadedFile)}
                  type="video/mp4"
                />
              </video>
            </div>
          )}
        </div>
        <div className={` ${styles.exportWrapper} w-[20%] p-[10px] gap-[5px]`}>
          <div
            className={` ${styles.exportBtn} cursor-pointer flex gap-[5px] font-[600] justify-end`}
          >
            <DownloadIcon />
            <p className="text-[18px] mt-[-4px]">Export</p>
          </div>
          <div className={`${styles.properties} p-[20px]`}>
            <h3 className="text-center pt-[40px] pb-[20px] text-[22px] font-[500]">
              Properties
            </h3>
            <div className="flex gap-[20px] justify-center">
              <label className="text-[16px] font-[500]">Scale</label>
              <input type="range" id="vol" name="vol" min="0" max="50"></input>
              <p className="border border-black px-[10px]">100%</p>
            </div>

            <div className="flex gap-[20px] justify-center pt-[20px]">
              <label className="text-[16px] font-[500]">Opacity</label>
              <input type="range" id="vol" name="vol" min="0" max="50"></input>
              <p className="border border-black px-[10px]">100%</p>
            </div>

            <div className="flex gap-[20px] justify-center pt-[20px]">
              <label className="text-[16px] font-[500]">Rotation</label>
              <div>
                <div className="flex gap-[10px]">
                  <p>Z</p>
                  <p className="border border-black px-[10px] mb-[10px]">
                    0, 0
                  </p>
                </div>
                <div className="flex gap-[10px]">
                  <p>Y</p>
                  <p className="border border-black px-[10px] mb-[10px]">
                    0, 0
                  </p>
                </div>
                <div className="flex gap-[10px]">
                  <p>X</p>
                  <p className="border border-black px-[10px] mb-[10px]">
                    0, 0
                  </p>
                </div>
              </div>
            </div>

            <div className="flex gap-[20px] justify-center pt-[20px]">
              <label className="text-[16px] font-[500]">Position</label>
              <div>
                <div className="flex gap-[10px]">
                  <p>X</p>
                  <p className="border border-black px-[10px] mb-[10px]">
                    0, 0
                  </p>
                </div>
                <div className="flex gap-[10px]">
                  <p>Y</p>
                  <p className="border border-black px-[10px] mb-[10px]">
                    0, 0
                  </p>
                </div>
                <div className="flex gap-[10px]">
                  <p>Z</p>
                  <p className="border border-black px-[10px] mb-[10px]">
                    0, 0
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[500px] m-auto flex gap-[30px] items-center">
        <div className="border border-black p-[10px] rounded-[100%]">
          <PreviousIcon />
        </div>
        <div className="border border-black p-[10px] rounded-[100%]">
          <PlayPauseIcon />
        </div>

        <div className="border border-black p-[10px] rounded-[100%]">
          <ForwardIcon />
        </div>
        <div className="h-[25px] border border-black w-[200px]">
          <p className="w-[100px] h-[25px] bg-black"></p>
        </div>
      </div>
      <div className="pt-[5px]">
        <div className="flex gap-[10px] p-[10px] border border-t-black border-b-black">
          <Sissor />
          <Template />
          <UploadIcon />
          <SlidesIcon />
          <div className="h-[15px] border border-black w-[200px]">
            <p className="w-[100px] h-[15px] bg-black"></p>
          </div>
        </div>
        <div>
          <p className="pt-[5px]">Track 1</p>
        </div>
      </div>
    </>
  );
}

export default CreateProject;
