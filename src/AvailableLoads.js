/**
 * Available Loads Picker
 */
 import {useState} from 'react';
 import Loads from './Loads';
 
 const AvailableLoads = (p) => {

	//const buildRow = (load) => {
		//return "<tr onclick='clickOnLoad(" + load["id"] + ")'><td>" + load['from'] + " to " + load['to'] + '</td><td>' + load['pickup_date'] + '</td><td>' + load['dropoff_date'] + '</td></tr>'
	//}

	//const renderAvailableloads = (loads) => {
		// Takes in an object of load dicts and renders them in the 'Available loads' section
		// on the left side of the page.
		//$("#available-loads").empty()
		//for (const i in loads) {
			//let load = loads[i]
			//let loadHTML = buildRow(load)
			//$("#available-loads").append(loadHTML)
		//}
	//}
	
	return (
		<div className="well">
			<h2>Available Loads</h2>
			<table>
			<thead>
			<tr><th>Route</th><th>Pickup</th><th>Dropoff</th></tr>
			</thead>
			<tbody id="available-loads"><Loads loads={p.loads} onClick={p.clickOnLoad} /></tbody>
			<tfoot></tfoot>
			</table>
		</div>
	);
	
}

export default AvailableLoads;