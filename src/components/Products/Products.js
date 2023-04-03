import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import auth from './../firebase/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast, ToastContainer } from "react-toastify";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [user] = useAuthState(auth);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handelOrder = (product) =>{
    const {name,price} = product;
    fetch('http://localhost:5000/addOrder', {
      method: 'POST',
      body: JSON.stringify({
       name,price,email:user.email
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((data) =>  toast(data.success));
  }

  return (
    <div>
      <h1>Total Products : {products.length}</h1>
      <div className="row">
      <ToastContainer />
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
