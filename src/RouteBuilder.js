/**
 * Route Builder Tool
 */
 import {useState} from 'react';
 import Loads from './Loads';
 import Button from './Button';
 
 const RouteBuilder = (p) => {
	
	return (
		<div className="well">
				<h2>Your Route</h2>
				<table id="current-route">
					<thead>
					<tr><th>Route</th><th>Pickup</th><th>Dropoff</th></tr>
					</thead>
					<tbody id="your-route"><Loads loads={p.loads} /></tbody>
					<tfoot></tfoot>
				</table>
				<div class="bottom-buttons">
					<Button colorStyle='red' onClick={p.reset} text='Reset' />
					<Button colorStyle='green' onClick={p.save} text='Save Route' />
				</div>
			</div>
	);
	
}

export default RouteBuilder;