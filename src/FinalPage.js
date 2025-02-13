import React from 'react';
import photoraz from './Images/photoraz.jpg';

const FinalPage = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1 style={{ color: 'LightGreen', fontSize: '48px', marginBottom: '20px' }}>
        С Днём Cвятого Валентина! 💘
      </h1>
      <p style={{ color: 'LightGreen', fontSize: '24px', marginBottom: '40px' }}>
        Ты самая лучшая!!!!! 😘
      </p>
      <img
        src={photoraz}
        alt="Happy Valentine"
        style={{ marginBottom: '40px', borderRadius: '10px', width: '500px' }}
      />
    </div>
  );
};

export default FinalPage;