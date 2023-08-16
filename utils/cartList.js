export default async function cartList() {
  const res = await fetch("https://fakestoreapi.com/carts/user/1");
  const data = await res.json();

  return data;
}
