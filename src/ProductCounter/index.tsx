// eslint-disable-next-line no-unused-vars
import React from "react";
import ProductCount from "./ProductCount";

type ProductCounterPropsType = {
  productName: string;
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
};

const ProductCounter: React.FC<ProductCounterPropsType> = (props) => {
  const { productName, count, setCount } = props;

  const addHandler = (e: any) => {
    setCount((prev) => prev + 1);
  };
  const deleteHandler = () => {
    setCount((prev) => prev - 1);
  };

  return (
    <div className="product_counter">
      <h1>{productName}</h1>
      <ProductCount count={count} />
      <button onClick={addHandler} type="button">
        Добавить
      </button>
      <button onClick={deleteHandler} type="button">
        Убавить
      </button>
    </div>
  );
};

export default ProductCounter;
