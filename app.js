let apiKey = config.API_KEY;
let news = $('.article')

$.ajax('https://api.nytimes.com/svc/topstories/v2/home.json?api-key=' + apiKey)
.done(function(data){
	let arr = data.results
	arr.forEach(function(item){
	let title = item.title
	let sub = item.abstract
	let by = item.byline
	let url = item.url

	let article = ""
	article += "<div class=\"block jumbotron\">"

	article += "<h3>"
	article += title
	article +="</h3>"

	article +="<p>"
	article += sub
	article +="</p>"

	article += "<span>"
	article += by
	article += "</span>"
	article += "<br>"

	article += "<a target=\"_blank\" href=\""
	article += url
	article += "\"><button class=\"btn btn-primary\">view article</button></a>"

	article += "</div>"

	news.append(article)
	})
})




$('#dark').click(function (){
   $('#custom').attr('href','dark.css')
});
$('#light').click(function (){
   $('#custom').attr('href','style.css');
});


