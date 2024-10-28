import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./components/SkinCareProducts";

function App() {
  let skincareProducts = [
    "Maks",
    "Facewash",
    "Moistrizer",
    "Aloevera",
    "Lip Balm",
    "Serum",
  ];

  let errorMsg =
    skincareProducts.length === 0 ? <h3>My skin needs care</h3> : null;

  return (
    <>
      <h1>Skin Care Products</h1>
      {errorMsg}
      <SkincareProduct />
    </>
  );
}

export default App;
