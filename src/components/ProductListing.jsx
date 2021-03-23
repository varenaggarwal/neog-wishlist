import { useCartData } from "../contexts/dataContext";
import { useProductLoader } from "../hooks/useProductLoader";

export default function ProductListing() {
  const { state, dispatch } = useCartData();

  const toggleWishlist = (id) =>
    dispatch({ type: "ADDTOWISHLIST", payload: id });
  return (
    <>
      <h1>Product Listing</h1>
      {state.productData.map((product) => (
        <li key={product.id} className="listing">
          <span>{product.name}</span>
          <span> - {product.price} </span>

          {!product.wishlist ? (
            <button className="btn " onClick={() => toggleWishlist(product.id)}>
              Heart
            </button>
          ) : null}
        </li>
      ))}
    </>
  );
}
