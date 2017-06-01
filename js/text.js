var canvas = document.getElementById("circlecanvas"); var context =
canvas.getContext("2d"); context.arc(90, 90, 190, 0, Math.PI * 2, false);
context.fillStyle = "#76E0F5"; context.fill();


var div = document.getElementById("about-text");

div.innerHTML = div.innerHTML + '<p>Hi! I\'m Jingyi, a recent <a href="http://eecs.berkeley.edu">EECS</a> graduate from UC Berkeley. I will be starting my Ph.D. at <a href="http://hci.stanford.edu/">Stanford</a> in the fall. I really like making things, and enabling others to do the same.</p>'
+
	'<p>At Berkeley, I did research under <a href="http://cs.berkeley.edu/~bjoern/">Bjoern Hartmann</a> in the <a href="http://bid.berkeley.edu">Berkeley Institute of Design</a>. I was also a teaching assistant for <a href="inst.eecs.berkeley.edu/~cs184/fa16">CS 184: Computer Graphics</a> and <a href="http://teaching.paulos.net/cs160_FL2015/">CS160:</a> <a href="http://teaching.paulos.net/cs160_SP2016/">UI Design</a>. Broadly, my research interests include using computation to make things (digital fabrication) and advance media (computational photography), and understanding how humans participate in creation (fandom). I use they/them pronouns.</p>'
+
	'<p>The circle in the corner represents my current hair color. Try dragging the drawing of me towards it!</p>';

var footer = document.getElementById("footer-text");

footer.innerHTML = footer.innerHTML +
'<a href="mailto:&#110;&#111;&#111;&#110;&#064;&#098;&#101;&#114;&#107;&#101;&#108;&#101;&#121;&#046;&#101;&#100;&#117;">&#110;&#111;&#111;&#110;&#064;&#098;&#101;&#114;&#107;&#101;&#108;&#101;&#121;&#046;&#101;&#100;&#117;</a> &nbsp; <a href="https://www.linkedin.com/pub/jingyi-li/92/b43/757"><i class="fa fa-linkedin"></i></a> &nbsp;    <a href="https://github.com/radiolarian/"><i class="fa fa-github"></i></a> &nbsp;    <a href="https://twitter.com/jingyeezy"><i class="fa fa-twitter"></i></a> '