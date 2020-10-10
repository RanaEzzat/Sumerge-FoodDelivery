var cartinfo= document.forms["cart"];

var pizzacosts = new Array();
pizzacosts["Small"]=50;
pizzacosts["Medium"]=80;
pizzacosts["Large"]=100;
pizzacosts["ExtraLarge"]=150;


function pizzaPriceCalculate()
{
    var pizzasizeradios = document.getElementsByName('pizzasize');
    var pizzapricesize=0;
    for(var i = 0; i < pizzasizeradios.length; i++)
    {
        
        if(pizzasizeradios[i].checked)
        {
            console.log("Okay");
            pizzapricesize = pizzacosts[pizzasizeradios[i].value];
            break;
        }
    }
   
    console.log("Size");
    return pizzapricesize;
}

var saucesprices= new Array();
saucesprices["None"]=0;
saucesprices["Ranch"]=15;
saucesprices["Buffalo"]=10;
saucesprices["Garlic"]=15;
saucesprices["Pesto"]=10;

function saucePriceCalculate()
{
    var saucePrice=0;    
    var cartinfo = document.forms["cart"];
    var chosenSauce = cartinfo.elements["sauces"];
    saucePrice = saucesprices[chosenSauce.value];
    return saucePrice;
}

function getTotal()
{
    var totalPrice = pizzaPriceCalculate() + saucePriceCalculate();
    alert("Total Price For the Pizza: $"+totalPrice);
    document.getElementById('totalPrice').value = "Total Price = " + totalPrice;
}


