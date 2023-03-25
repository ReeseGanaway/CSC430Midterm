import React, { Fragment, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit';
import { productActions } from '../redux/slices/productsSlice';


export const ReduxTest = () => {
  const products = useSelector(state => state.products);

  const [name, setName] = useState('')
  const [type, setType] = useState('')

  const dispatch = useDispatch();

  const onSaveProductClicked = () => {
    if (name && type) {
      dispatch(
        productActions.addProduct({
          id: nanoid(),
          name,
          type
        })
      );
      setName('');
      setType('');
    }
  }

  const onNameChanged = e => setName(e.target.value)
  const onTypeChanged = e => setType(e.target.value)

  const renderedProducts = products.map(product => (
    <article className="product-excerpt" key={product.id}>
      <h3>{product.type}</h3>
      <p className="product-name">{product.name.substring(0, 100)}</p>
    </article>
  ))

  return (
    <Fragment>
        <section className="product-list">
            <h2>Products</h2>
            {renderedProducts}
        </section>
        <section>
      <h2>Add a New Product</h2>
      <form>
        <label htmlFor="productName">Product Name:</label>
        <input
          type="text"
          id="productName"
          name="productName"
          value={name}
          onChange={onNameChanged}
        />
        <label htmlFor="postType">Type:</label>
        <textarea
          id="postType"
          name="postType"
          value={type}
          onChange={onTypeChanged}
        />
        <button type="button" onClick={onSaveProductClicked}>Save Product</button>
      </form>
    </section>
    </Fragment>

  )
}