import React, { useRef, useState } from "react";
import Webcam from "react-webcam";
import RecordRTC from "recordrtc";

function CameraRecorder() {
  const webcamRef = useRef(null);
  const [recording, setRecording] = useState(false);
  const [recordedBlob, setRecordedBlob] = useState(null);
  const recorderRef = useRef(null);

  const toggleRecording = () => {
    if (!recording) {
      startRecording();
    } else {
      stopRecording();
    }
  };

  const startRecording = () => {
    setRecording(true);
    // Check if webcamRef has current and if webcamRef.current has stream
    if (webcamRef.current && webcamRef.current.stream) {
      const recorder = RecordRTC(webcamRef.current.stream, {
        type: "video",
      });
      recorder.startRecording();
      recorderRef.current = recorder;
    }
  };

  const stopRecording = () => {
    setRecording(false);
    if (recorderRef.current) {
      recorderRef.current.stopRecording(() => {
        setRecordedBlob(recorderRef.current.getBlob());
      });
    }
  };

  const downloadVideo = () => {
    if (recordedBlob) {
      const url = URL.createObjectURL(recordedBlob);
      const a = document.createElement("a");
      document.body.appendChild(a);
      a.style = "display: none";
      a.href = url;
      a.download = "recorded-video.webm";
      a.click();
      window.URL.revokeObjectURL(url);
    }
  };

  return (
    <>
      <div>
        <h2 className="text-center py-[20px] text-[30px] font-[500]">
          Click on start recording to record the video
        </h2>
      </div>
      <div className="flex justify-center">
        <div className="w-[850px]">
          <Webcam
            audio={true}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            videoConstraints={{
              width: 1280,
              height: 720,
              facingMode: "user",
            }}
            style={{ borderRadius: "10px" }}
            onUserMedia={() => {
              // Webcam is initialized, you can start recording here if needed
            }}
          />
        </div>
      </div>
      <div className="flex justify-center gap-[50px] mt-[40px]">
          <div className={` flex justify-center gap-[50px] mb-[40px]`}>
            <button
              className={`bg-[#ece9e9] hover:bg-white px-[40px] text-center py-[10px] rounded-[8px] w-[250px] cursor-pointer border-2 border-[#000000] hover:border-[#2f6fa5] ${
                recording ? "bg-red-500" : ""
              }`}
              onClick={toggleRecording}
            >
              {recording ? "Stop Recording" : "Start Recording"}
            </button>
          </div>
          {recordedBlob && (
            <div className="flex justify-center mb-[40px]">
              <button
                className="bg-[#2f6fa5] text-white px-[20px] py-[10px] rounded-[8px] cursor-pointer"
                onClick={downloadVideo}
              >
                Download Recorded Video
              </button>
            </div>
          )}
        </div>
    </>
  );
}

export default CameraRecorder;
