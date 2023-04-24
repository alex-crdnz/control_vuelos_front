import React from 'react';
import logo from './logo.svg';
import './App.css';
import Buttons from './components/Buttons/Buttons';
import AppRouter from './components/routes/router';
import "toastr/build/toastr.min.css";


const LazyApp = React.lazy(() => import('./components/routes/router'));

function App() {
  return (
    <div className="App">
      <AppRouter/>
    </div>
  );
}

export default App;
