/**
 * @file data-service.js
 * 
 * @@source_header
 * 
 */
'use strict';

(function() {

	/**
	 * data service singleton definition
	 */
	function DataService() {
		
		var _self = this;
		
		_self.sphere = {
				image: 'testing/panorama_nr96_10percent.jpg'
		};

		// FIXME acquire RDF/JSON data from the URI fragment
		// http://www.example.org/path/to#http://www.example2.org/path/to/sphere-definitions/forest-123.ttl
		
		/* Sphere definition = RDF
		 * 
		 * sphere.name
		 * sphere.description 
		 * sphere.image // URI? or base64-encoded image?
		 * sphere.longitude // on the planet, or sphere.location = URI (dbpedia?)
		 * sphere.latitude
		 * 
		 * sphere.markers[0..n]
		 * 	coord.x
		 * 	coord.y
		 * 	target = URI to RDF (sphere, tree, zeigenpflanz, didactic)
		 * 
		 * sphere.shapes[0..n]
		 * 	coords[0..m] = {x: , y: }
		 * 	target = URI to RDF (sphere, tree, zeigenpflanz, didactic)
		 * 
		 * -> here we have everything to draw the sphere and interactive elements
		 * -> when we click an element, panels will be fed with what could be found in the target URIs
		 * -> we also use external resources such as the Zeigenpflanzen library
		 * 
		 * 
		 * TREE definition
		 * -> link to Zeigenpflanzen
		 * 
		 * Zeigenpflanz definition
		 * -> link to Trees
		 * 
		 * Didactic content definition
		 * 
		 */
	
	
	}

	angular.module('ontosForestUseCase.dataService', [])
		
		/**
		 * Register data service
		 */
		.service('DataService',[ DataService ]);

}());
