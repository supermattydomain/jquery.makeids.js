/**
 * makeIDs plugin for jQuery.
 * matthew 2011-12-11
 * 
 * Ensures that each of the elements in the set has a unique ID.
 */
(function($) {
	$.fn.makeIDs = function() {
		this.each(function(index, elt) {
			var i = 0;
			if (elt.id) {
				// Already has an ID
			} else if (document.uniqueID) {
				// Built-in magic window property
				elt.id = document.uniqueID;
			} else {
				// Use time in milliseconds and running index to handle same-milliscond calls
				elt.id = 'uniqueIdPrefix_' + (new Date().getTime()) + '_' + (i++);
			}
		});
		return this;
	};
})(jQuery);
