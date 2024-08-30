import { useEffect, useState } from "react";
export default function Products() {
  // let [name, setName] = useState("Iphone 15");
  // let [price, setPrice] = useState(80000);
  // useEffect(
  //   () => {
  //     //component mounted
  //     console.log("Component Mounted");
  //     //return anonymous function when component unmount
  //     return () => {
  //       console.log("Component Unmounted");
  //     };
  //   },
  //   [],
  //   [name, price],
  // );
  let [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        setProducts(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="products">
      {products.map((product) => {
        return (
          <div className="product" key={product.id}>
            <div className="image-wrapper">
              <img
                src={product.images[0]}
                alt={product.title}
                className="p-image"
              />
            </div>

            <h1 className="p-title">{product.title}</h1>
            {/* <p>{product.description}</p> */}
            <h3 className="p-price">$: {product.price}</h3>
          </div>
        );
      })}
    </div>
  );
}

// <h1>{name}</h1>
// <h3>{price}</h3>
// <button
//   onClick={() => {
//     setName("Redmi 12");
//   }}
// >
//   Change Name
// </button>
// <button
//   onClick={() => {
//     setPrice("20000");
//   }}
// >
//   Change Price
// </button>
