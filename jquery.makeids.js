/**
 * makeIDs plugin for jQuery.
 * matthew 2011-12-11
 * 
 * Ensures that each of the elements in the set has a unique ID.
 */
(function($) {
	var idCounter = new Date().getTime();
	$.fn.makeIDs = function() {
		this.each(function(index, elt) {
			if (elt.id) {
				// Already has an ID
			} else if (document.uniqueID) {
				elt.id = document.uniqueID;
			}
		    elt.id = 'uniqueIdPrefix_' + idCounter++;
		});
		return this;
	};
})(jQuery);
