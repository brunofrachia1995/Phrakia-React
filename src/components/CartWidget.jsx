import React from 'react';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

function CartWidget({ items }) {
	return (
		<>
			<ShoppingBasketIcon />
			<span>{items}</span>
		</>
	);
}

export default CartWidget;