import React, { useState, useEffect } from 'react';

function App() {
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:3000/')
      .then(response => response.json())
      .then(data => {
        setMessage(data.message);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error:', error);
        setIsLoading(false);
      });
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>音频转录应用程序</h1>
      <p>{isLoading ? '正在连接服务器...' : message}</p>
      <button disabled>开始录音</button>
    </div>
  );
}

export default App; 