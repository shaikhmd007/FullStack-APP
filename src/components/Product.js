import { useEffect, useState } from "react";
import Navbar from "./Navbar";
function Product() {
  const [products, setProducts] = useState([]);

  // console.log(products);

  const fetchData = async () => {
    const response = await fetch("https://fakestoreapi.com/products/category/electronics");
    const data = await response.json();
    return setProducts(data);
  };

  useEffect(() => {
    fetchData();

  }, []);
  const defaultHandler = async () => {
    const response = await fetch("https://fakestoreapi.com/products/category/electronics");
    const data = await response.json();
    return setProducts(data);
  };

  const jewelery = async () => {
    const response = await fetch("https://fakestoreapi.com/products/category/jewelery");
    const data = await response.json();
    return setProducts(data);
  };
  const MensClothing = async () => {
    const response = await fetch(
      "https://fakestoreapi.com/products/category/men%27s%20clothing"
    );
    const data = await response.json();
    return setProducts(data);
  };
  async function WomensClothing() {
    const response = await fetch(
      "https://fakestoreapi.com/products/category/women's%20clothing"
    );
    const data = await response.json();
    return setProducts(data);
  }
  return (
    <div>
      <Navbar />
      <div className="d-flex mt-4">
        <div
          style={{
            // border:'2px solid red',
            flex: "2",
            backgroundColor: "black",
            color: "white",
            padding: "10px",
            boxShadow: "1px 2px 1px 1px black"
          }}
        >
          <ul>
            <li className="Categories"
              style={{ marginTop: "30px", cursor: 'pointer' }}
              onClick={defaultHandler}
            >
              Electronics
            </li>
          </ul>
          <ul>
            <li className="Categories" style={{ cursor: 'pointer' }} onClick={jewelery}>
              Jewellery's
            </li>
          </ul>
          <ul>
            <li className="Categories" style={{ cursor: 'pointer' }} onClick={MensClothing}>
              MensClothing
            </li>
          </ul>
          <ul>
            <li className="Categories" style={{ cursor: 'pointer' }} onClick={WomensClothing}>
              Women'sClothing
            </li>
          </ul>
        </div>

        <div
          style={{ flex: "10", boxShadow: "1px 2px 5px 1px ", padding: "10px" }}
        >
          {
            products.length === 0 ? (
              <h1>Lodding....</h1>
            ) : (
              products.map((item) => {
                return (
                  <ul>
                    <li className="products-list">{item.title}</li>
                  </ul>
                );
              }))}
        </div>
      </div>
    </div>
  );
}
export default Product;
