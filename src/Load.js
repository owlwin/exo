/**
 * Component representing a single load.
 * TODO add onclick to tr
 */
 
 const Load = (p) => {
	
	return (
		<>
			<tr onClick={() => p.onClick(p.id)}>
			<td>{p.from} to {p.to}</td>
			<td>{p.pickup}</td>
			<td>{p.dropoff}</td>
			</tr>
		</>
	);
	
}

export default Load;