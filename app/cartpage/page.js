import cartList from "@/utils/cartList";

export default async function Cartpage() {
  const cartLists = await cartList();
  console.log(cartLists);
  return (
    <div>
      {cartLists.map((cartItem, cartIndex) => (
        <div key={cartIndex}>
          <h1>Cart {cartItem.id}</h1>
          <p>User ID: {cartItem.userId}</p>
          <p>Date: {cartItem.date}</p>
          <ul>
            {cartItem.products.map((product, productIndex) => (
              <li key={productIndex}>
                Product ID: {product.productId}, Quantity: {product.quantity}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
