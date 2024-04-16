import React, { useState } from "react";
import { ReactMic } from "react-mic";

function AudioRecorder() {
  const [recording, setRecording] = useState(false);
  const [recordedBlob, setRecordedBlob] = useState(null);

  const toggleRecording = () => {
    if (!recording) {
      startRecording();
    } else {
      stopRecording();
    }
  };

  const startRecording = () => {
    setRecording(true);
  };

  const stopRecording = () => {
    setRecording(false);
  };

  const onData = (recordedBlob) => {
    console.log("chunk of real-time data is: ", recordedBlob);
  };

  const onStop = (recordedBlob) => {
    console.log("recordedBlob is: ", recordedBlob);
    setRecordedBlob(recordedBlob.blob);
  };

  const downloadAudio = () => {
    const url = URL.createObjectURL(recordedBlob);
    const a = document.createElement("a");
    document.body.appendChild(a);
    a.style = "display: none";
    a.href = url;
    a.download = "recorded-audio.wav";
    a.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <>
      <div>
        <h2 className="text-center py-[20px] text-[30px] font-[500]">
          Click on start recording to record the audio
        </h2>
      </div>
      <div className="flex justify-center m-auto mt-[40px] w-[500px] h-[150px] rounded-[10px]">
        <ReactMic
          record={recording}
          className="sound-wave"
          visualSetting="sinewave"
          onStop={onStop}
          onData={onData}
          strokeColor="#ffffff"
          backgroundColor="#a3a4a3"
        />
      </div>
      <div className="flex justify-center gap-[50px]">
        <div className="flex justify-center mt-[40px]">
          <button
            className={`bg-[#ece9e9] hover:bg-white px-[40px] text-center py-[10px] rounded-[8px] cursor-pointer border-2 border-[#000000] hover:border-[#2f6fa5] ${
              recording ? "bg-red-500" : ""
            }`}
            onClick={toggleRecording}
          >
            {recording ? "Stop Recording" : "Start Recording"}
          </button>
        </div>
        {recordedBlob && (
          <div className="flex justify-center mt-[40px]">
            <button
              className="bg-[#2f6fa5] text-white px-[20px] py-[10px] rounded-[8px] cursor-pointer"
              onClick={downloadAudio}
            >
              Download Recorded Audio
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default AudioRecorder;
