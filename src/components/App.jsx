import { Routes, Route } from "react-router-dom";

import CardsPage from "../pages/CardsPage";
import ErrorPage from "../pages/ErrorPage";
import MainPage from "../pages/MainPage";
import Header from "./Header";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/characters" element={<CardsPage />} />
        <Route path="/:others" element={<ErrorPage />} />
      </Routes>
    </>
  );
};

export default App;
