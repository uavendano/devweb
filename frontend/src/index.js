import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';        // importamos bootstrap a toda la app
import 'bootstrap/dist/js/bootstrap.bundle.js';
import './css/customs/colors.css';
import './css/customs/fontSize.css';
import './css/customs/paddings.css';
import './css/customs/fontFamily.css';
import './css/customs/margins.css';
import './css/customs/imgSize.css';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from "react-helmet-async";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <BrowserRouter>            
            <HelmetProvider>
                <App />
            </HelmetProvider>        
        </BrowserRouter>
    </React.StrictMode>
);