import React from 'react';

import photodva from './Images/photodva.jpg';


const MessagePage = ({ nextPage }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h2 style={{ color: 'LightGreen', fontSize: '36px', marginBottom: '20px' }}>
        Ты крутая! 💕
      </h2>
      <p style={{ color: 'LightGreen', fontSize: '24px', marginBottom: '40px' }}>
        Спасибо, что общаешься со мной!
      </p>
      <img
        src={photodva}
        alt="Cute heart"
        style={{ marginBottom: '40px', borderRadius: '10px', width: '400px' }}
      />
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
        Дальше!
      </button>
    </div>
  );
};

export default MessagePage;