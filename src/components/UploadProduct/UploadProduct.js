import React from "react";
import { Button, Form } from "react-bootstrap";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../firebase/firebase';

const UploadProduct = () => {

  const [user] = useAuthState(auth);

  const handleUpload = (e) =>{
    e.preventDefault();
    const name = e.target.name.value
     const price = e.target.price.value
    

     const url = 'http://localhost:5000/uploadpd';

     fetch(url, {
      method: 'POST',
      body: JSON.stringify({
       name,price
      }),
      headers: {
        'authorization':`${user.email} ${localStorage.getItem("accessToken")}`,
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        e.target.reset();
      });
  }

  return (
    <div >
      <h1 className="text-center my-3">UploadProduct</h1>
      <div className="w-50 mx-auto">
        <Form onSubmit={handleUpload}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Product Name</Form.Label>
            <Form.Control type="text" name="name" placeholder="Product Name" />           
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Price</Form.Label>
            <Form.Control type="text" name="price" placeholder="Price" />
          </Form.Group>
          
          <Button variant="primary" type="submit">
            Upload
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default UploadProduct;
