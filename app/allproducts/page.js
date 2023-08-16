import getAllProducts from "@/utils/getAllProducts";
import Link from "next/link";
import Product from "../components/Product";

export default async function AllProducts() {
  const products = await getAllProducts();

  return (
    <>
      <div className="bg-white">
        <main>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-4 md:mx-6 lg:mx-0">
            {products.map((product, index) => {
              return (
                <div key={index}>
                  <Link href="/">
                    <Product props={product} />
                  </Link>
                </div>
              );
            })}
          </div>
        </main>
      </div>
    </>
  );
}
