import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const setScrollVar = () => {
  const htmlElement = document.documentElement;
  const percentOfScreenHeightScrolled = htmlElement.scrollTop / htmlElement.clientHeight;
  htmlElement.style.setProperty("--scroll", Math.min(percentOfScreenHeightScrolled * 100, 100));
}
setScrollVar()

window.addEventListener("scroll", setScrollVar);
window.addEventListener("resize", setScrollVar)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
)
