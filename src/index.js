import React from "react"
import ReactDom from "react-dom/client"
import Counter from "./Counter"
import "./style.css"


const root=ReactDom.createRoot(document.getElementById("root"))
root.render(< Counter/>)
