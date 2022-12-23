import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  setInterval(() => {
    root.render(<Clock/>)
  })

  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
);

// If you witals();
