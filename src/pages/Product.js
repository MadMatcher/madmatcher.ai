import React from 'react';
import { Link } from 'react-router-dom';
import Main from '../layouts/Main';

const Product = () => (
  <Main title="Product" description="Learn about our products">
    <article className="post" id="product">
      <header>
        <div className="title">
          <h2>Our Products</h2>
        </div>
      </header>

      <section>
        <h3>Coming soon...</h3>
      </section>
    </article>
  </Main>
);

export default Product;
