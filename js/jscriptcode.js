window.onload = function(){
  str2 = "SALUT<span class='punc'>!</span>";
  str = "I AM JOSH DINGRI<span class='punc'>.</span></br> <span id='tagline'> Web Developer <span class='punc'>-</span> Software Engineer </span>";
  str3 = "This website is under construction<span class='punc'>!</span>";
  str4 = "HELLO VISITOR<span class='punc'>!</span> ";
  str5 = " <span id='welcome'>WELCOME TO MY INTERACTIVE CV<span class='punc'>...</span></span>";
  count = 0;
  i = 0;
  j = 0;
  isTag = false;
  text = "";
  setTimeout(function() {type(i,isTag,text,str3);}, 1000);

}
  function type(i,isTag,text,str2){
    text = str2.slice(0, ++i);
    if (text === str2) {
      if(count < 2){
        if(count == 1)
          setTimeout(function() { removeType(i,isTag,text,str2);}, 2000);
        else
          setTimeout(function() { removeType(i,isTag,text,str2);}, 2000);
      }
      return;
    }
    document.getElementById('bio').innerHTML = text;

    var char = text.slice(-1);
    if( char === '<' ) isTag = true;
    if( char === '>' ) isTag = false;

    if (isTag) return type(i,isTag,text,str2);
    setTimeout(function() { type(i,isTag,text,str2);}, 50);
}

function removeType(i,isTag,text,str2) {
  text = str2.slice(0, i--);

  if(text === ''){
    i = 0;
    count++;
    if(count == 1)
      setTimeout(function() { type(i,false,"",str5);}, 100);
    else if(count == 2)
      setTimeout(function() { type(i,false,"",str);}, 100);
    return;
  }
  document.getElementById('bio').innerHTML = text;

  var char = text.slice(-1);
  if( char === '>' ) isTag = true;
  if( char === '<' ) isTag = false;
  if (isTag || char === '<') return removeType(i,isTag,text,str2);
  if(count == 1)
    setTimeout(function() { removeType(i,isTag,text,str2);}, 10);
  else
    setTimeout(function() { removeType(i,isTag,text,str2);}, 30);
}


$(function(){
function scrollToAnchor(aid){
  var aTag = $("a[name='"+ aid +"']");
  $('html,body').animate({scrollTop: aTag.offset().top -100},'slow');
}

$("#aboutlink").click(function(e) {
  e.preventDefault();
  scrollToAnchor('about-anchor');
});

$("#educationlink").click(function(e) {
  e.preventDefault();
  scrollToAnchor('education-anchor');
});

$("#projectslink").click(function(e) {
  e.preventDefault();
  scrollToAnchor('projects-anchor');
});

$("#experiencelink").click(function(e) {
  e.preventDefault();
  scrollToAnchor('experience-anchor');
});

$("#abilitieslink").click(function(e) {
  e.preventDefault();
  scrollToAnchor('abilities-anchor');
});

$("#contactlink").click(function(e) {
  e.preventDefault();
  scrollToAnchor('contact-anchor');
});

});



$(function(){
$("#aboutme").load("aboutme.html");
$("#education").load("education.html");
$("#projects").load("projects.html");
$("#experience").load("experience.html");
$("#abilities").load("abilities.html");
$("#contact").load("contact.html");
});

$(function () {
$(document).scroll(function () {
var $nav = $(".fixedNav");
var $navtext = $(".nav-text");
var $nametext = $(".name-text");
$nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
$navtext.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
$nametext.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
});
});

