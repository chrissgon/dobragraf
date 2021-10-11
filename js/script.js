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

$("#servicos .button").click(function () {
  const item = $(this).closest(".item");

  const servico = $(item).attr("class").split(" ")[1];

  const title = $("h4", item).text();
  const text = servicos[servico];

  $("#modalServicos .title").html(title);
  $("#modalServicos .text").html(text);
});
