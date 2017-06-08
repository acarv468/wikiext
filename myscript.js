console.log(document.domain);

var links = document.getElementsByTagName("a");

for (var a = 0; a < links.length; a++){
	if (links[a].hasAttribute("title")){
		if (links[a].title.length < 100) {
			links[a].addEventListener("mouseover", function(){
				var linkHref = this.href.substring(30);
				ajax("GET", "https://en.wikipedia.org/w/api.php?origin=*&format=json&action=query&prop=extracts&exchars=200&exintro=&explaintext=&titles=" + linkHref, changeTitle);
			});
		}
	}
}

function ajax(methodType, url, callback) {
	var xhr = new XMLHttpRequest();
	xhr.open(methodType, url, true);
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4 && xhr.status === 200){
			console.log("xhr done successfully");
			var parsedData = JSON.parse(xhr.responseText);
			callback(parsedData);
		}
	}
	xhr.send();
	console.log("request sent to the server");
}

function changeTitle(data){
	var pageNumber = Object.keys(data["query"]["pages"]);
	var pageExcerpt = data["query"]["pages"][pageNumber]["extract"];
	var pageTitle = data["query"]["pages"][pageNumber]["title"];
	for (i = 0; i < links.length; i++){
		if (links[i].hasAttribute("title")){
			if (links[i].title == pageTitle){
				links[i].title = pageExcerpt;
			}
		}
	}
}

//https://stackoverflow.com/questions/14220321/how-do-i-return-the-response-from-an-asynchronous-call