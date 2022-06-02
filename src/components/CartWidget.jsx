import React from 'react';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

function CartWidget({ items }) {
	return (
		<>
			<ShoppingBasketIcon />
			{items}
		</>
	);
}

export default CartWidget;