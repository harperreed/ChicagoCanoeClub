var upcomingUrl = 'http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20html%20where%20url%3D%22http%3A%2F%2Fdopeman.org%2Fcanoe%2F%22%20and%0A%20%20%20%20%20%20xpath%3D%22%2F%2Fbody%2F*%22';
$.get(upcomingUrl, function(data) {
	doc = $(data).find("results").children();
	$('#upcoming-meetings').removeClass('unloaded');
	//be sneaky
	rawInfo = $('<div>').append((doc).clone()).remove().html();
	$('#upcoming-meetings').append($(rawInfo));
});

    
function JSONToHtml(jsonObj){
	retHtml = '';
	$.each(jsonObj, function(name, value) {
		retHtml += '<' + name + '>';
		if($.isPlainObject(value)) {
			retHtml += JSONToHtml(value);
		} else {
			retHtml += value;
		}
		retHtml += '</' + name + '>';
	});
	alert (jsonObj);
	alert (retHtml);
	return retHtml;
}

