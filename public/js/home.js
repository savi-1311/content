window.onscroll = function() {myFunction()};



function myFunction() {
	var navbar = document.getElementById("navbar");
	var sticky = navbar.offsetTop;
  if (window.pageYOffset >sticky) {
    navbar.classList.add("sticky");
  } else {
	  console.log("remove");
    navbar.classList.remove("sticky");
  }
}


const btns = document.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

var slideIndex = 0;

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  setTimeout(carousel, 5000); // Change image every 5 seconds
}



// Get the button that opens the modal


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
function openForm() {
	var modal = document.getElementById("modal-login");
	console.log("*");
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
function closeForm() {
	var modal = document.getElementById("modal-login");
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
// When the user clicks the button, open the modal 
function openFormC() {
	var modal = document.getElementById("modal-contact");
	console.log("*");
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
function closeFormC() {
	var modal = document.getElementById("modal-contact");
  modal.style.display = "none";
}

function openblog() {
	var aes = document.getElementById("blog-form");
  if (aes.style.display === "none") {
    aes.style.display = "block";
  } else {
    aes.style.display = "none";
  }
}

function openbook() {
	var aes = document.getElementById("book-form");
  if (aes.style.display === "none") {
    aes.style.display = "block";
  } else {
    aes.style.display = "none";
  }
}
function opencreative() {
	var aes = document.getElementById("creative-form");
  if (aes.style.display === "none") {
    aes.style.display = "block";
  } else {
    aes.style.display = "none";
  }
}

