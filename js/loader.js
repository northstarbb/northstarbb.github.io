window.onscroll = function() {
    scrollFunction();
};

// NAV START
let mainNav = document.getElementById('js-menu');
let navBarToggle = document.getElementById('js-navbar-toggle');

navBarToggle.addEventListener('click', function () {
    mainNav.classList.toggle('active');
});

mainNav.addEventListener('click', function(){
    mainNav.classList.toggle('active');
});
// NAV END

// SLIDER BEGIN
var slideIndex = 0;

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");

  if (n > slides.length){
    slideIndex = 1;
  }    

  if (n < 1) {
    slideIndex = slides.length;
  }
  
  for (i = 0; i < slides.length; i++){
    slides[i].style.display = "none";  
  }

  slides[slideIndex-1].style.display = "block";  
}

carousel();
function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  setTimeout(carousel, 3500); 
}
//SLIDER END

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("to-top").style.display = "block";
    } else {
        document.getElementById("to-top").style.display = "none";
    }
}

function toTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

var modalOpen = !1;
var o, n, t, d;

function openModal(e) {
    o = document.getElementById(e.id + "-modal"), n = document.getElementById(e.id + "-close"), t = document.getElementById(e.id + "-close-btn"), d = document.getElementsByTagName("body")[0];
    modalOpen = !0, o.style.display = "block", d.style.overflow = "hidden", o.scrollTop = 0;
    n.onclick = function() {
        modalOpen = !1, o.style.display = "none", d.style.overflow = "visible"
    }, t.onclick = function() {
        modalOpen = !1, o.style.display = "none", d.style.overflow = "visible"
    }
}

$(function() {
    var i = -1;
    slideCount = 5;
    function timeout() {
        setTimeout(function() {
            $("#quote" + i).animate({
                right: "120%"
            }, 2000);
            i++;
            if(i > (slideCount - 1)) {
                i = 0;
            }
            $("#quote" + i).css("right", "-60%");
            $("#quote" + i).animate({
                right: "20%"
            }, 2000);
            timeout();
        }, 7000);
    };
    timeout();
});