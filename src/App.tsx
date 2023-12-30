import { FC } from "react";
import { Routes, Route } from 'react-router-dom'

// Pages
import EnterSite from "./pages/entersite";

const App: FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<EnterSite />} />
      </Routes>
    </>
  )
}

export default App;