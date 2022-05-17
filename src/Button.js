/**
 * Button Component for RouteBuilder buttons.
 */
 
 const Button = (p) => {
	
	return (
		<button 
	    	className={p.colorStyle}
	    	onClick={p.onClick}>
	    	{p.text}
		</button>
	);
	
}

export default Button;