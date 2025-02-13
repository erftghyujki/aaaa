import React, { useState } from 'react';
import StartPage from './StartPage';
import MessagePage from './MessagePage';
import FinalPage from './FinalPage';
import photoraz from './Images/photoraz.jpg';
import photodva from './Images/photodva.jpg';
const App = () => {
  const [page, setPage] = useState(0);

  const nextPage = () => {
    setPage(page + 1);
  };

  return (
    <div style={{ width: '100%' }}>
      {page === 0 && <StartPage nextPage={nextPage} />}
      {page === 1 && <MessagePage nextPage={nextPage} />}
      {page === 2 && <FinalPage />}
    </div>
  );
};

export default App;