function myFunction() {
  // use jQuery ($ is shorthand) to find the div on the page and then change the html
  // jQuery can do a lot of crazy stuff so make sure to google around to find out more

  $("#demo").html("NEWWW PARAGRAPH #javascript #fire");

  // 'img-circle' is a bootstrap thing! Check out more here: http://getbootstrap.com/css/
  $("#doge-image").append(
    `<img class="img-circle" src="images/wowdoge.jpeg" />`
  );
  if (Math.floor(Math.random() * Math.floor(3)) === 2) {
    $("#doge-image").append("<p>Cool</p>");
  }
}
