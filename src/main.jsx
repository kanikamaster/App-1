import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App.jsx'; // ← ここが大事！

ReactDOM.createRoot(document.getElementById('root')).render(<App />);


// const Sub = () => {
//   return <h2>ヘッダーやで</h2>
// }

// export default Sub


// //消さない(動かなくなる)(ファイル読み込んでるから)
// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )
