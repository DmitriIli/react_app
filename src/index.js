import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


// ReactDOM.render(
//   // < App />,
//   React.createElement('button', {
//     disabled: true,
//   }, 'push'),
//   document.getElementById('root')
// );

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
    // React.createElement('button', {
    //       onClick:()=> console.log('push'),
    //       disabled: false,
    //     }, 'push')
);