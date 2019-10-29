 
var product;


function store(){
    sessionStorage.setItem("shopCart", JSON.stringify(product));
}

getStore = () => {
    product = JSON.parse(sessionStorage.getItem("shopCart") || "[]");  
}

    getStore();

function fun(self) {
  var x={};
  x.price=parseFloat($(self).parent().find('.price b').text().slice(1));
  x.title=$(self).parent().find('.title').text();
  product.push(x);
  store();
}

$(".btn").click(function(){
    getStore();
    alert("added to cart");
    fun(this);
})

function pop() {
    var total = 0
        var element = document.getElementById("cartInfo");
    for(var x of product) {
        var para = document.createElement("div");
        para.innerHTML = '<div class="name">Title: ' + x.title +'</div><div>Price: '+ x.price * 1.15+'</div>';
        total += x.price *1.15
        element.appendChild(para);
    }

    element.innerHTML += total
}

var UserEnterCoupon = false
$(".EnterCoupon").click(function(){
    var couponCode = $(this).prev().val()
    if(couponCode == "0" && !UserEnterCoupon){
        UserEnterCoupon = true
        total -= 20
        $("#total").text(total)
    }
})

$("#checkOut").click(function(){
    var reference = Math.random().toString(36).substring(7);
    alert(reference)
})

//      DELIVERY JS
$("input.type").change(function() {
    if($(this).is(":checked") && $(this).attr("id") == "delivery"){
        $(".notDelivery").show()
    } else {
        $(".notDelivery").hide()
    }
})
