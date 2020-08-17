function shorten(e){

	e.preventDefault();
	console.log("Shortening")
	var url = document.querySelector("#url").value;
	var key = document.querySelector("#key").value;

	if(key == ""){
		key = Math.random().toString(36).substr(2, 5);
	}

	fetch(`/shorten?url=${url}&key=${key}`);
	
	document.querySelector("h4").innerHTML = `Shortened at ?? <a href="https://jbzy2tech.blogspot.com/${key}">https://sourcecode111.blogspot.com/${key}</a>`;
}
