$(document).ready(function() {
    $('header button').click(function(){
        $('form').slideDown()
    })

    $('#botao-cancelar').click(function(){
        $('form').slideUp()
    })

    $('form').submit(function(e) {
        e.preventDefault()

        const enderecoNovaImagem = $('#input-url').val()
        const novoItem = $('<li style="display: none"></li>')
        $(`<img src="${enderecoNovaImagem}" />`).appendTo(novoItem)
        $(`<a href=${enderecoNovaImagem} title="Ver imagem em tamanho real" target="_blank">Ver imagem em tamanho real</a>`).appendTo(novoItem)
        $(novoItem).appendTo('ul')
        $(novoItem).fadeIn(1000)
        $('#input-url').val('')
    })
})