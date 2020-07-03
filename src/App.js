import React from "react"
import logo from "./logo.svg"
import "./App.css"

function App() {
  React.useEffect(() => {
    const ele = document.getElementById('dd')
    const observer = new IntersectionObserver((entries) => {
      console.log(entries)
    });
    observer.observe(ele)
  }, [])
  return (
    <div className="App">
      <div className="card" id='dd'>todo</div>
      <div className="card">todo</div>
      <div className="card">todo</div>
      <div className="card">todo</div>
      <div className="card">todo</div>
      <div className="card">todo</div>
      <div className="card" >todo</div>
      <div className="freeze" id='sx'>我是个神仙</div>
    </div>
  )
}

export default App
