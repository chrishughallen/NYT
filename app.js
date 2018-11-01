 // d7287e5bd5b047f389384ae12f9ad76f
let news = $('.article')

$.ajax('https://api.nytimes.com/svc/topstories/v2/home.json?api-key=d7287e5bd5b047f389384ae12f9ad76f')
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
	article += "\">read more</a>"

	article += "</div>"

	news.append(article)
	})
})


