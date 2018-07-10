
import React from 'react';
import ReactDom from 'react-dom';
import Layout from './components/layout';

// We get the div element to render our react app
const app = document.getElementById('app');
ReactDom.render(<Layout/>, app);

// Just some debug message
console.log('App is now running live...');
