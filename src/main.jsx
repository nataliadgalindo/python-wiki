import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./index.css"
import { AppProvider } from "./context"
import MainLayout from "./components/MainLayout"
import LearnLayout from "./components/LearnLayout"
import App from "./components/App.jsx"
import Basics from "./components/Basics.jsx"
import Debugging from "./components/Debugging.jsx"
import DevEnv from "./components/DevEnv.jsx"
import Errors from "./components/Errors.jsx"
import Libraries from "./components/Libraries.jsx"
import Styles from "./components/Styles.jsx"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<App />} />
            <Route path="learn" element={<LearnLayout />}>
              <Route index element={<Basics />} />
              <Route path="devenv" element={<DevEnv />} />
              <Route path="errors" element={<Errors />} />
              <Route path="debugging" element={<Debugging />} />
              <Route path="libraries" element={<Libraries />} />
              <Route path="styles" element={<Styles />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </AppProvider>
  </React.StrictMode>
)
