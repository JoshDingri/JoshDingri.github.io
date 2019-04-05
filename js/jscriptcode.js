$(document).ready(function(){
      function scrollToAnchor(aid){
        var aTag = $("a[name='"+ aid +"']");
        $('html,body').animate({scrollTop: aTag.offset().top},'slow');
      }
        $("#aboutlink").click(function() { scrollToAnchor('about-section1');});

        $(function(){
          $("#aboutme").load("aboutme.html");
          $("#education").load("education.html");
        });
});
