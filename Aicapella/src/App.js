import './App.css';
import React, { useState, useRef } from 'react';

function MusicPlayer() {
  const [audioFile, setAudioFile] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type === 'audio/wav') {
      setAudioFile(URL.createObjectURL(file));
    } else {
      alert('Please select a .wav file.');
    }
  };

  const handleUploadButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleDownload = () => {
    if (audioFile) {
      const link = document.createElement('a');
      link.href = audioFile;
      link.download = 'music.wav';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <div className='background'>
    <h1 className='title'>Aicapella</h1>
    <h1 className='body'>Choose Your Song</h1>
    <div className='flex'>
      <input
        type="file"
        accept="audio/wav"
        onChange={handleFileChange}
        ref={fileInputRef}
        style={{ display: 'none' }}
      />
      <button className='upload' onClick={handleUploadButtonClick}>Upload</button>
      {audioFile && (
        <div className='flex'>
          <audio controls>
            <source src={audioFile} type="audio/wav" />
            Does not support the audio element.
          </audio>
          <button className='download' onClick={handleDownload}>Download</button>
        </div>
      )}
    </div>
    </div>
  );
}

export default MusicPlayer;
