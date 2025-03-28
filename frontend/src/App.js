import React, { useState, useEffect } from 'react';

function App() {
  const [message, setMessage] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/')
      .then(response => response.json())
      .then(data => setMessage(data.message))
      .catch(error => {
        console.error('Error:', error);
        setError('无法连接到服务器');
      });
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>音频录制和转换应用程序</h1>
      {error ? 
        <p style={{ color: 'red' }}>{error}</p> : 
        <p>{message || '正在连接服务器...'}</p>
      }
    </div>
  );
}

export default App; 