import React from 'react';
const StartPage = ({ nextPage }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1 style={{ color: 'LightGreen', fontSize: '48px', marginBottom: '20px' }}>
        Специально для Алёнки @Torubami 💖
      </h1>
      <p style={{ color: 'LightGreen', fontSize: '24px', marginBottom: '40px' }}>
        Тыкни на кнопку, чтобы получить валентинку!
      </p>
      <button
        onClick={nextPage}
        style={{
          padding: '15px 30px',
          fontSize: '20px',
          backgroundColor: 'LightGreen',
          color: '#f826a1',
          border: 'none',
          borderRadius: '10px',
          cursor: 'pointer',
        }}
      >
        Тык сюда!
      </button>
    </div>
  );
};

export default StartPage;