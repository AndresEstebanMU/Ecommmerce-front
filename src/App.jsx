import './App.css'
import AgeGate from './components/AgeGate';
import AppRoutes from './routes/AppRoutes'



import  { useState } from 'react';
import ScrollToTop from 'react-scroll-to-top';



const App = () => {
  const [isOver18, setIsOver18] = useState(false);

  const handleAgeConfirmation = () => {
    setIsOver18(true);
  };

  return (
    <div>
      {!isOver18 && <AgeGate onConfirm={handleAgeConfirmation} />}
      <AppRoutes />
      <ScrollToTop smooth color="#113650" />
    </div>
  );
};

export default App;

