import React, { useState } from 'react';
import Logo from '../Components/LOGO.png'; // Adjust the path to access the image
import './book.css';

const recordAudio = () =>
  new Promise(async resolve => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const mediaRecorder = new MediaRecorder(stream);
    const audioChunks = [];

    mediaRecorder.addEventListener("dataavailable", event => {
      audioChunks.push(event.data);
    });

    const start = () => mediaRecorder.start();

    const stop = () =>
      new Promise(resolve => {
        mediaRecorder.addEventListener("stop", () => {
          const audioBlob = new Blob(audioChunks);
          const audioUrl = URL.createObjectURL(audioBlob);
          const audio = new Audio(audioUrl);
          resolve({ audioBlob, audioUrl, audio });
        });

        mediaRecorder.stop();
      });

    resolve({ start, stop });
  });

const sleep = time => new Promise(resolve => setTimeout(resolve, time));

const App = () => {
  const [recording, setRecording] = useState(null);

  const handleRecordButtonClick = async () => {
    const recorder = await recordAudio();
    recorder.start();
    await sleep(10000);
    const recordedAudio = await recorder.stop();
    setRecording(recordedAudio);
  };

  const handlePlayButtonClick = () => {
    if (recording) {
      recording.audio.play();
    }
  };

  return (
    <div>
      <img src={Logo} alt="Logo" />
      <button onClick={handleRecordButtonClick}>Start Recording</button>
      <button onClick={handlePlayButtonClick} disabled={!recording}>Play Recording</button>
    </div>
  );
};

export default App;
