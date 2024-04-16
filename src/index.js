import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Template from './pages/Template';
import NewVideo from './pages/NewVideo';
import AllVideo from './pages/AllVideo';
import CreateProject from './pages/CreateProject';
import RecordVideo from './pages/RecordVideo';
import CameraRecorder from './pages/CameraRecorder';
import AudioRecorder from './pages/AudioRecorder';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/template" element={<Template />} />
        <Route path="/new-video" element={<NewVideo />} />
        <Route path="/all-videos" element={<AllVideo />} />
        <Route path="/create-project" element={<CreateProject />} />
        <Route path="/record-video" element={<RecordVideo />} />
        <Route path="/record-video/camera-recorder" element={<CameraRecorder />} />
        <Route path="/record-video/audio-recorder" element={<AudioRecorder />} />

      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
