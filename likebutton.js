$(document).on('ready', start);

function start(e){
	console.log ("hello");

	var $button = $ ("#mybutton");
	console.log ($button);

	var numLikes = 0

	$button.on('click', addLikes);

	function addLikes(e){
		$button.html("0 like");
		console.log ($button);
		numLikes = numLikes + 1; 
		console.log (numLikes);
		$button.html(numLikes + " " + "likes");
	}


}

