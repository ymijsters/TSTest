import { ReactNode } from 'react';
import { CartItem, addToCart, removeFromCart } from '../store/cart-slice';
import { useCartDispatch, useCartSelector } from '../store/hooks';

export default function CartItems() {
  const cartItems = useCartSelector((state) => state.cart.items);
  const dispatch = useCartDispatch();

  const formattedTotalPrice = cartItems
    .reduce((val, item) => val + item.price * item.quantity, 0)
    .toFixed(2);

  function handleRemoveFromCart(id: string) {
    dispatch(removeFromCart(id));
  }

  function handleAddToCart(item: CartItem) {
    dispatch(addToCart({ id: item.id, title: item.title, price: item.price }));
  }

  let noItemText: ReactNode;

  if (cartItems.length === 0) {
    noItemText = <p>No items in cart!</p>;
  } else {
    noItemText = null;
  }

  return (
    <div id='cart'>
      {noItemText}

      {
        <ul id='cart-items'>
          {cartItems.map((item) => {
            const formattedPrice = `$${item.price.toFixed(2)}`;

            return (
              <li key={item.id}>
                <div>
                  <span>{item.title}</span>
                  <span> ({formattedPrice})</span>
                </div>
                <div className='cart-item-actions'>
                  <button onClick={() => handleRemoveFromCart(item.id)}>
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => handleAddToCart(item)}>+</button>
                </div>
              </li>
            );
          })}
        </ul>
      }

      {
        <p id='cart-total-price'>
          Cart Total: <strong>${formattedTotalPrice}</strong>
        </p>
      }
    </div>
  );
}
