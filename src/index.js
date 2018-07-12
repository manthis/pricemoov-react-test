
import React from 'react';
import ReactDom from 'react-dom';
import Layout from './components/layout';
import './style.scss';

// Let's render our React App!
const app = document.getElementById('app');
ReactDom.render(<Layout/>, app);
