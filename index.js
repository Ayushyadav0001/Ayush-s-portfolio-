// for phone view

function myFunction(x) {
  if (x.matches) {
    function changeContent() {
      var xx = document.getElementById("btn1");
      var aa = document.getElementById("btn2");
      var yy = document.getElementById("btn3");
      var taps = document.getElementById("tap");

      if (xx.innerHTML === "About") {
        xx.innerHTML = "Hello,";
        aa.innerHTML = "I am ";
        yy.innerHTML = "Ayush";
      } else {
        xx.innerHTML = "About";
        aa.innerHTML = "work.";
        yy.innerHTML = "contact.";
      }

      // xx.addEventListener("click", function() {

      // });
    }

    document.addEventListener("click", changeContent);
  } else {
    //  hello
    let button = document.getElementById("btn1");
    button.addEventListener("mouseover", function () {
      button.innerHTML = "About.";
    });
    let but = document.getElementById("btn1");
    but.addEventListener("mouseout", function () {
      but.innerHTML = "Hello,";
    });

    // i am
    let iam = document.getElementById("btn2");
    iam.addEventListener("mouseover", function () {
      iam.innerHTML = "Work.";
    });
    let iam2 = document.getElementById("btn2");
    iam2.addEventListener("mouseout", function () {
      iam2.innerHTML = "I am";
    });

    // Ayush
    let Ayush = document.getElementById("btn3");
    Ayush.addEventListener("mouseover", function () {
      Ayush.innerHTML = "Contact.";
    });
    let Ayush2 = document.getElementById("btn3");
    Ayush2.addEventListener("mouseout", function () {
      Ayush2.innerHTML = "Ayush";
    });
  }
}

var x = window.matchMedia("(max-width: 1000px)");
myFunction(x);

// for spotify music javascript

$(document).ready(function () {
  $("#cod").click(function () {
    var $music = $('<i class="fa-solid fa-music fa-bounce fa-xl"></i>');
    var $end = $(
      '<i class="fa-solid fa-xmark fa-bounce fa-xl" style="color: #ffffff;"></i>'
    );
    var playlistCode = $("#playlist-code");
    if (playlistCode.css("display") === "none") {
      playlistCode.css("display", "block");
      $("#cod").text(" ");
      $("#cod").append($end);
      $("#cod").addClass("marleft");
    } else {
      playlistCode.css("display", "none");
      $("#cod").text(" "); // Optionally change the button text back
      $("#cod").append($music);
      $("#cod").removeClass("marleft");
    }
  });
});

// about page js

const butt1 = document.getElementById("btn1");
const aboutPage = document.getElementById("aboutPage");
const closeButton = document.getElementById("closeButton");

butt1.addEventListener("click", () => {
  if (aboutPage.style.left === "-100%") {
    aboutPage.style.left = "0";
    btn1.style.display = "none";
    btn2.style.display = "none";
    btn3.style.display = "none";
    cod.style.display = "none";
   tap.style.display="none";
   
    
  } else {
    aboutPage.style.left = "-100%";
   
   
  }
});
closeButton.addEventListener("click", () => {
  aboutPage.style.left = "-100%";
  con.style.left="-100%";
  btn1.style.display = "inline-block";
  btn2.style.display = "inline-block";
  btn3.style.display = "inline-block";
  cod.style.display = "inline-block";
  tap.style.display="inline-block";


});


// contact page

const con= document.getElementById("contactpage");
btn3.addEventListener("click", () => {
  if (con.style.left === "-100%") {
    con.style.left = "0";
    btn1.style.display = "none";
    btn2.style.display = "none";
    btn3.style.display = "none";
    cod.style.display = "none";
    tap.style.display="none";
   
    
  } else {
    con.style.left = "-100%";
   
  }
});

const closee = document.getElementById("closebutton");
closee.addEventListener("click", () => {
   con.style.left="-100%";
  btn1.style.display = "inline-block";
  btn2.style.display = "inline-block";
  btn3.style.display = "inline-block";
  cod.style.display = "inline-block";
  tap.style.display="inline-block";


});