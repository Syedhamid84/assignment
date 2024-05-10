import "./App.css";
import HomeScreen from "./Components/Home/home";
import FormComponent from "./Components/Home/Form/FormComponent";
import ListAPi from "./Components/Home/ListApi/ListAPi";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CrudForm from "./Components/Home/CrudForm/CrudProfile";
import ConditionalRendering from "./Components/Home/ConditionalRendering/ConditionalRendering";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/form" element={<FormComponent />} />
        <Route path="/list" element={<ListAPi />} />
        <Route path="/crud" element={<CrudForm />} />
        <Route
          path="/Conditional_Rendering"
          element={<ConditionalRendering />}
        />
      </Routes>
    </Router>
  );
}

export default App;
