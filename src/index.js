// import antd/dist/antd.css;
import 'antd/dist/antd.min.css'
import './index.css'
import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App.jsx';
import {HashRouter} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <HashRouter>
        <App/>
    </HashRouter>
);

