var canvas = document.getElementById("circlecanvas"); var context =
canvas.getContext("2d"); context.arc(90, 90, 190, 0, Math.PI * 2, false);
context.fillStyle = "#E2D6B0"; context.fill();


var div = document.getElementById("about-text");

div.innerHTML = div.innerHTML + '<p>Hi! I\'m Jingyi, a computer science Ph.D. student at <a href="http://hci.stanford.edu/">Stanford</a> advised by <a href="http://shape.stanford.edu">Sean Follmer</a> and <a href="http://graphics.stanford.edu/~maneesh/">Maneesh Agrawala</a>. I really like making things, and enabling others to do the same. Most of my work focuses on creativity tools or computational fabrication. I did my undergrad at UC Berkeley, where I was advised by Bjoern Hartmann. My pronouns are they/them.</p> '

+
	'<p>The circle in the corner represents my current hair color. Try dragging the drawing of me towards it!</p>';

var footer = document.getElementById("footer-text");

footer.innerHTML = footer.innerHTML +
'<a href="mailto:&#110;&#111;&#111;&#110;&#064;&#098;&#101;&#114;&#107;&#101;&#108;&#101;&#121;&#046;&#101;&#100;&#117;">&#110;&#111;&#111;&#110;&#064;&#098;&#101;&#114;&#107;&#101;&#108;&#101;&#121;&#046;&#101;&#100;&#117;</a> &nbsp; <a href="https://www.linkedin.com/pub/jingyi-li/92/b43/757"><i class="fa fa-linkedin"></i></a> &nbsp;    <a href="https://github.com/radiolarian/"><i class="fa fa-github"></i></a> &nbsp;    <a href="https://twitter.com/jingyeezy"><i class="fa fa-twitter"></i></a> '