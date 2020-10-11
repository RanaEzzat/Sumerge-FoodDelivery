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
            pizzapricesize = pizzacosts[pizzasizeradios[i].value];
            break;
        }
    }
   
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
    var card = document.getElementById("hiddendiv"); 
    card.style.display="block";
    var card2 = document.getElementById("hiddendiv2"); 
    card2.style.display="block";
    alert("Total Price For the Pizza: "+totalPrice+ " EGP! Scroll down for details!");
    document.getElementById('hiddendiv2').innerHTML = "Your total is "+totalPrice + " EGP";
}


