import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyComponent from "./pages/Lists";
import Item from "./pages/Item";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MyComponent />} />
          <Route path="/:id" element={<Item  />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
