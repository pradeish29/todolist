$('ul').on('click','li', function(){
    $(this).toggleClass('done')
})
$('ul').on('click','span', function(e){
    $(this).parent().fadeOut(1000, function(){
        $(this).remove()
    })
    e.stopPropagation()
})
$('input').on('keypress', function(e){
    if(e.which === 13){
     letnew = $(this).val()
    $(this).val('')
    $('ul').append(`<li><span><i class="fa-regular fa-circle-check"></i> </span>${letnew}</li>`)
   }
})
