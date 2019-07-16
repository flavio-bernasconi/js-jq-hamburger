$( document ).ready(function() {

  $(".open").click(
    function(){
        $(".hamburger-menu").addClass("active");
    }
  )

  $(".close").click(
    function(){
        $(".hamburger-menu").removeClass("active");
    }
  )

});

console.log("ciao");
