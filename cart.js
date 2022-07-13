var removeButton = document.getElementsByClassName("cart-remove");

for(let i=0;i<removeButton.length;i++)
{

	removeButton[i].addEventListener('click',function(event){
	    
	    event.target.parentElement.parentElement.remove(); 
        updatetotal();
	    
	});

}


var productQuantity=document.getElementsByClassName("cart-product-quantity");

for (let i=0;i<productQuantity.length;++i)
{
	productQuantity[i].addEventListener('change',function(){
		updatetotal();
	})
}



function updatetotal()
{
	var total=0;
	var productPrice=document.getElementsByClassName("cart-product-price");
	var productQuantity=document.getElementsByClassName("cart-product-quantity");

	for (let i=0;i<productPrice.length;++i)
	{
		let x=Number(productPrice[i].innerText),y=productQuantity[i].value;
	    total+=x*y;

	   //total+=(productPrice[i].value)*(productQuantity[i].value);
	}

  document.querySelector(".total-amount").innerText=total;

}

updatetotal();


console.log(total);