import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handelOrder = (pd) =>{
    console.log(pd)
  }

  return (
    <div>
      <h1>Total Products : {products.length}</h1>
      <div className="row">
        {products.map((pd) => (
          <div className="col-4 g-4" key={pd._id}>
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>{pd.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                Price : {pd.price} TK
                </Card.Subtitle>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button onClick={()=>handelOrder(pd)} variant="link">Order Now</Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
