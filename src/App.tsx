import { FC } from "react";
import { Routes, Route } from 'react-router-dom'

// Pages
import Main from "./pages/main";

const App: FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </>
  )
}

export default App;