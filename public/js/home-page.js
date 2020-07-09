$( document ).ready(function() {
  $("section.mission").fadeIn(400);

  $("a.curriculum").on("click", function(e){
    e.preventDefault()

    var section = $(this).prop("classList")[3]
    swapSection(section);
  });

  function swapSection(section) {
    console.log(section)
    $("section.curriculum:visible").fadeOut(400, function() {
      fadeInNewSection(section)
    });
  }

  function fadeInNewSection(section) {
    $("section." + section).fadeIn(400);
  }
});
