function onComments(data) {
	if (data.length) {
		console.log(data);
		var notification = document.createElement('div');
		notification.id ="hncommentsNotify";
		var commentsLink = document.createElement('a');
		commentsLink.id = 'commentsLink';
		commentsLink.appendChild(document.createTextNode('Click here to view the hacker news comments about this page'));
		commentsLink.href="http://news.ycombinator.com/item?id=" + data[0];
		notification.appendChild(commentsLink);
		document.body.appendChild(notification);
		document.getElementById("hncommentsNotify").addEventListener("click", function(){notification.className = '';})
		
		
		setTimeout(function () {
			notification.className = 'show';
		  }, 350);
	}
};

setTimeout(function(){chrome.extension.sendRequest({'URL' : top.location.href}, onComments)}, 5000);