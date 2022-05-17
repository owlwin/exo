import './App.css';
import {useState} from 'react';
import AvailableLoads from './AvailableLoads';
import RouteBuilder from './RouteBuilder';

function App() {
	
	const [loads, setLoads] = useState(
		[
			{
				id: 1,
				from: 'Fresno',
				to: 'Sacramento',
				pickup_date: '06/03/2023',
				dropoff_date: '06/03/2023',
			},
			{
				id: 2,
				from: 'Sacramento',
				to: 'Oakland',
				pickup_date: '06/04/2023',
				dropoff_date: '06/05/2023',
			},
			{
				id: 3,
				from: 'Tahoe',
				to: 'Sunnyvale',
				pickup_date: '06/04/2023',
				dropoff_date: '06/05/2023',
			},
			{
				id: 4,
				from: 'Tahoe',
				to: 'Fresno',
				pickup_date: '06/04/2023',
				dropoff_date: '06/05/2023',
			},
			{
				id: 5,
				from: 'Sunnyvale',
				to: 'Santa Barbara',
				pickup_date: '06/06/2023',
				dropoff_date: '06/08/2023',
			},
			{
				id: 6,
				from: 'Santa Barbara',
				to: 'San Diego',
				pickup_date: '06/09/2023',
				dropoff_date: '06/10/2023',
			},
			{
				id: 7,
				from: 'San Diego',
				to: 'Portland',
				pickup_date: '06/11/2023',
				dropoff_date: '06/13/2023',
			},
			{
				id: 8,
				from: 'Sacramento',
				to: 'Palo Alto',
				pickup_date: '06/07/2023',
				dropoff_date: '06/07/2023',
			},
			{
				id: 9,
				from: 'Sacramento',
				to: 'Sunnyvale',
				pickup_date: '06/08/2023',
				dropoff_date: '06/09/2023',
			},
			{
				id: 10,
				from: 'Sunnyvale',
				to: 'San Diego',
				pickup_date: '06/11/2023',
				dropoff_date: '06/12/2023',
			}
		]
	);
	
	const [routeLoads, setRouteLoads] = useState([]);
	
	const reset = () => {
		console.log('Resetting route and available loads...');
		window.location.reload();
	}
	
	//
	// TODO: Package the final route into a JSON object and send it to this server endpoint via POST request.
	// https://take-home-backend.exofreight.com/save-route
	//
	const saveRoute = async (routeLoads) => {
		console.log('Saving route...' + JSON.stringify(routeLoads));
		const res = await fetch('https://take-home-backend.exofreight.com/save-route',{
			method: 'POST',
			headers: {'Content-type': 'application/json'},
			body: JSON.stringify(routeLoads)
		})
		
	}
	
	//
	// Clicking on a load should add that load to the route and update the list of
	// available loads.
	// 
	const clickOnLoad = (load_id) => {
		console.log("Received a click on load with ID " + load_id)
		let currentLoad = loads.filter((load) => load.id === load_id);
		let loadTo = currentLoad[0].to;
		setLoads(loads.filter((load) => load.id !== load_id));
		setLoads(loads.filter((load) => load.from === loadTo))
		setRouteLoads([...routeLoads, currentLoad[0]]);
	}
	
	
  return (
    <div>
	    <AvailableLoads loads={loads} clickOnLoad={clickOnLoad} />
	    <RouteBuilder loads={routeLoads} reset={reset} save={saveRoute} />
    </div>
  );
}

export default App;
