import { useCartData } from "../contexts/dataContext";

export function Wishlist() {
  const { state } = useCartData();
  return (
    <>
      <h1>Wishlist</h1>
      {state.productData.map((product) =>
        product.wishlist ? (
          <li key={product.id} className="listing">
            <span>{product.name}</span>
            <span> - {product.price}</span>
          </li>
        ) : null
      )}
    </>
  );
}
