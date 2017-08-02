var url = 'https://www.reddit.com/r/aww/.json';

$.get(url).done(function(responseBody){
	responseBody.data.children.slice(1, 11).forEach(function(child){
		
			$("#content").append("<div class='page'>" + child.data.title);
			

			var $thumbnail = $("<img>");
			$thumbnail.attr("src", child.data.thumbnail);
			$content = $("#content").append($thumbnail);
			
			$("#post").append($content);
			
			console.log(child.data.title);
	});

});

