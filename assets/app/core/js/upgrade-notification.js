$(function(){
	/*** Add query string values ***/
	$.each(location.search.slice(1).split('&'), function(index, item){
		var kv = item.split('=');
		if (kv.length === 2) {
			var key = kv[0];
			var value = decodeURIComponent(kv[1]);
			$('*[data-dynamic-text="'+key+'"]').text(value);
		}
	});
});