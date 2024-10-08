import * as React from 'react';
import { Html, Button, Head, Container, Img } from "@react-email/components";
import { ResendEmailType } from './mail';


const SendUserEmail: React.FC<ResendEmailType> = (props) => {
  const { email, name, message, phoneNumber, quantity, productName } = props;
  return (
    <Html lang="en">
      <Head>
        <title>New Quote</title>
      </Head>
      <Container>
        <h1>Hi Naresh we <b>have received your new quote request from Global Electronic Solutions</b></h1>
        <p>
          Name - <b>{name}</b> <br />
          Email - <b>{email}</b> <br />
          Phone Number - <b>{phoneNumber}</b> <br />
        </p>
        <p>
          Message - {message}
        </p> <br /> <br />
        {
          quantity && <p>
            <b>Product Enquiry</b>
            Product Name - <b>{productName}</b> <br />
            Quantity - <b>{quantity}</b>
          </p>
        }
      </Container>
    </Html>
  );
}
export default SendUserEmail