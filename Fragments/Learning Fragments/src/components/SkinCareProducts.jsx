function SkinCareProducts() {
  return (
    <ul className="list-group">
      {SkinCareProducts.map((product) => (
        <li key={product} className="list-group-item">
          {product}
        </li>
      ))}
    </ul>
  );
}
export default SkinCareProducts;
