export default async function createcart(productId) {
  const date = new Date().toLocaleString();
  const res = await fetch("https://fakestoreapi.com/carts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userId: 1,
      date: date,
      products: [{ productId: productId, quantity: 1 }],
    }),
  });
  const data = await res.json();
  return data;
}
