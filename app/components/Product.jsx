"use client";
import createcart from "@/utils/createcart";
import Image from "next/image";

export default function Product({ props }) {
  const { id, title, price, category, image } = props;

  const handleAddToCart = () => {
    createcart(id)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <div className="card w-[360px] bg-base-100 shadow-xl mt-6">
      <figure className="h-[225px] w-full flex items-center justify-center">
        <Image
          src={image}
          alt="Shoes"
          width={200}
          height={300}
          className="object-scale-down h-48 w-96"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{category}</p>
        <div className="card-actions items-center justify-between">
          <p className="font-bold">${price}</p>
          <button onClick={handleAddToCart} className="btn btn-primary btn-sm">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
