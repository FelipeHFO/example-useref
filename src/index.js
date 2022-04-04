import React from 'react';
// import ReactDOM from 'react-dom'; <-- This works
import { createRoot } from 'react-dom/client';
import App from './App';
const container = document.getElementById('root');
// const root = ReactDOM.createRoot(container); <-- This works
const root = createRoot(container);
root.render(<App />);
