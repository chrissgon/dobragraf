$(".mobile .btn").click(function () {
  $(".mobile").toggleClass("active");
});

$(document).click(function (e) {
  let btn = $(".mobile .btn");
  if (!btn.is(e.target) && btn.has(e.target).length === 0) {
    $(".mobile").removeClass("active");
  }
});

$(".carousel").slick({
  infinite: false,
  slidesToShow: 6,
  slidesToScroll: 6,
  dots: true,
  responsive: [
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

$("select[name=servico]").change(function () {
  const servico = $(this).val();

  if (servico === "lombada") {
    $(".tipo-lombada").removeClass("visually-hidden");
  } else {
    $(".tipo-lombada").addClass("visually-hidden");
  }
});

$("input[name=offset]").change(function(){
  const isChecked = $(this).prop("checked")

  if(isChecked){
    $(".offset").removeClass("visually-hidden")
  } else{
    $(".offset").addClass("visually-hidden")
  }
})

$("#form-impressao").change(function(){
  const isDigital = $(this).val() == "D"

  if(isDigital){
    $(".tipo-folha").removeClass("visually-hidden")
  } else{
    $(".tipo-folha").addClass("visually-hidden")
  }
})

$("#form-orcamento").submit(function (e) {
  e.preventDefault();

  console.log($(this).serialize());
});
