$(".mobile .btn").click(function(){
    $(".mobile").toggleClass("active")
})

$(document).click(function(e){
    let btn = $(".mobile .btn");
    if(!btn.is(e.target) && btn.has(e.target).length === 0){
        $(".mobile").removeClass("active")
    }
})