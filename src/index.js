import React, { createContext }  from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';


export const Context = createContext(null);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<App />
);