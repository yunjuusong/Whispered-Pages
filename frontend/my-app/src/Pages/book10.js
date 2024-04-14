import React, { useState } from 'react';
import Logo from '../Components/LOGO.png'; // Adjust the path to access the image
import PDF from '../Components/the_tale_of_two_bad_mice.pdf';
import AudioFile from '../Components/the_tale_of_two_bad_mice.txt.mp3';
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
  const [recorder, setRecorder] = useState(null);

  const handleRecordButtonClick = async () => {
    const newRecorder = await recordAudio();
    setRecorder(newRecorder);
    newRecorder.start();
  };

  const handleStopButtonClick = async () => {
    if (recorder) {
      const recordedAudio = await recorder.stop();
      setRecording(recordedAudio);
      setRecorder(null);
    }
  };

  const handlePlayButtonClick = () => {
    if (recording) {
      recording.audio.play();
    }
  };

  return (
    <div className="app-container">
      <img src={Logo} alt="Logo" className="bookLogo" />
      <div className="button-bar">
        <button className="record-button" onClick={handleRecordButtonClick} disabled={recorder !== null}>Start Recording</button>
        <button className="stop-button" onClick={handleStopButtonClick} disabled={recorder === null}>Stop Recording</button>
        <button className="play-button" onClick={handlePlayButtonClick} disabled={!recording}>Play Recording</button>
      </div>
      <audio controls>
        <source src={AudioFile} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
      <iframe src={PDF} width="100%" height="600px"></iframe>
    </div>
  );
};

export default App;