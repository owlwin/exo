/**
 * List of all available loads.
 */
import Load from './Load'

const Loads = (p) => {
	
	return (
		<>
			{p.loads.map((load) => (<Load key={load.id} 
										id={load.id}
										from={load.from}
										to={load.to}
										pickup={load.pickup_date}
										dropoff={load.dropoff_date}
										onClick={p.onClick} />))}
		</>
	);
	
}

export default Loads;