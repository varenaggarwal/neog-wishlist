import { useCartData } from "../contexts/dataContext";
import { REMOVE_FROM_CART } from "../contexts/dataContext";
export function Wishlist() {
  const { state, dispatch } = useCartData();
  return (
    <>
      <h1>Wishlist</h1>
      {state.productData.map((product) =>
        product.wishlist ? (
          <li key={product.id} className="listing">
            <span>{product.name}</span>
            <span> - {product.price}</span>
            <button
              onClick={() =>
                dispatch({ type: REMOVE_FROM_CART, payload: product.id })
              }
              className="btn"
            >
              Remove
            </button>
          </li>
        ) : null
      )}
    </>
  );
}
