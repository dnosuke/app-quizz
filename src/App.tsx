import { Route, Routes } from "react-router-dom";
import Home from "./screens/Home";
import QuestionScreen from "./screens/QuestionScreen";

function App() {

  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/question" element={<QuestionScreen />} />
    </Routes>
  );
}

export default App;
