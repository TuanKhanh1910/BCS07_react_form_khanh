import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductList from "./pages/ProductList";

function App() {
  // console.log("render");
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
