$(function () {

    $("#product li").draggable({    
        revert:true,
    });

    $(".cart").droppable({    
        drop:function (event, ui) {    
            var cart = $(this),
                move = ui.draggable,
                itemId = cart.find("ul li[data-id='" + move.attr("data-id") + "']");
            if (itemId.html() != null) {
                itemId.find("input").val(parseInt(itemId.find("input").val()) + 1);
            }
            else {
                addCart(cart, move);    
            }
        }
    });

    function addCart(cart, move) {
        cart.find("ul").append('<li data-id="' + move.attr("data-id") + '">'
            + '<span class="name">' + move.find("h3").html() + '</span>'
            + '<input class="count" class="form-control" type="number" value="1" min="1" max="100"/>'
            + '<button class="delete">&#10005;</button>');
    }

    $(".cart ul li button.delete").live("click", function () {
        $(this).closest("li").remove();
    });

});