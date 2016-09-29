var canvas = document.getElementById("circlecanvas");
var context = canvas.getContext("2d");
context.arc(90, 90, 190, 0, Math.PI * 2, false);
context.fillStyle = "#2E55B6";
context.fill();


var div = document.getElementById("about-text");

div.innerHTML = div.innerHTML + '<p>Hi! I\'m Jingyi, a fourth year <a href="http://eecs.berkeley.edu">EECS</a> undergraduate at UC Berkeley. I really like making things, and enabling others to do the same.</p>'
+
	'<p>I currently do research under <a href="http://cs.berkeley.edu/~bjoern/">Bjoern Hartmann</a> in the <a href="http://bid.berkeley.edu">Berkeley Institute of Design</a>, and am teaching <a href="inst.eecs.berkeley.edu/~cs184/fa16">CS 184: Computer Graphics</a>. For the past year, I was also a GSI for <a href="http://teaching.paulos.net/cs160_FL2015/">CS160:</a> <a href="http://teaching.paulos.net/cs160_SP2016/">UI Design & Development</a>. Broadly, my research interests include the intersection of digital fabrication and computer graphics, computer vision and computational photography, and the digital humanities.</p>'
+
	'<p>The circle in the corner represents my current hair color. Try dragging the drawing of me towards it!</p>';


