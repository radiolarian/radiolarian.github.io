var canvas = document.getElementById("circlecanvas");
var context = canvas.getContext("2d");
context.arc(90, 90, 190, 0, Math.PI * 2, false);
context.fillStyle = "#FD948A";
context.fill();


var div = document.getElementById("about-text");

div.innerHTML = div.innerHTML + '<p>Hi! I\'m Jingyi, a third year <a href="http://eecs.berkeley.edu">EECS</a> major at UC Berkeley. I really like making things, and helping others do the same.</p>'
+
	'<p>You may recognize me from teaching <a href="http://teaching.paulos.net/cs160_FL2015/">CS160:</a> <a href="http://teaching.paulos.net/cs160_SP2016/">UI Design & Development</a>, or from hanging around <a href="http://bid.berkeley.edu">BiD</a>, where I do research under <a href="http://cs.berkeley.edu/~bjoern/">Bjoern Hartmann</a>. Broadly, my research interests are Human-Computer Interaction, Computer Graphics, New Media, and fandom.</p>'
+
	'<p>The circle in the corner represents my current hair color. Try dragging the drawing of me towards it!</p>';


