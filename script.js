var prices = [];
$(".add").click(function() {
    
    var itemName = $(".item-name").val();
    var itemPrice = $(".item-price").val();
    var itemCount = $(".item-number").val();
    
    $(".items").append("<li>" + itemName + " $" + itemPrice + "</li>");
    prices.push(parseInt(itemPrice));
    
    console.log(prices);
});

$(".check-out").click(function() {
    var totalPrice = 0;
    
    prices.forEach(function(price) {
        totalPrice = totalPrice + price;
    });
    alert("Total price: " + totalPrice);
});