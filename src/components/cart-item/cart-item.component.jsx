import { CartItemContainer, ImgContainer, ItemDetails, ItemName } from "./cart-item.styles"

const CartItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem

  return (
    <CartItemContainer>
      <ImgContainer src={imageUrl} alt={`${name}`} />
      <ItemDetails>
        <ItemName as='span'>{name}
          <span className='price'>
            {quantity} x ${price}
          </span>
        </ItemName>
      </ItemDetails>
      <span>{quantity}</span>
    </CartItemContainer>
  )
}

export default CartItem
