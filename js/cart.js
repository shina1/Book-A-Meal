// show cart
// const meals = document.getElementsByClassName
// document.getElementById
// innerHTML

//  This is  an imediatly invoked function expression.
(function(){
  const cartInfo = document.getElementById("cart-info");
  // remember when we are targeting something, we get an object back as a return value
  const  cart = document.getElementById('cart');
  cartInfo.addEventListener('click', function(){
      cart.classList.toggle('show-cart');
  })
  
  })();
  
  // add items to the cart
  
  (function(){
   let itemArr = [];
      const cartIcon = document.querySelectorAll('.meal-item-icon'); 
      cartIcon.forEach(function(icon){
          icon.addEventListener('click', function(event){
              // console.log(event.target);
             if(event.target.parentElement.classList.contains("meal-item-icon")){
                 let imageSource = event.target.parentElement.previousElementSibling.src;
                 let imgPos = imageSource.indexOf('image') + 5;
                 let pathImageSource = imageSource.slice(imgPos);
                 let name = event.target.parentElement.parentElement.nextElementSibling.children[0].children[0].textContent;
                 let price = event.target.parentElement.parentElement.nextElementSibling.children[1].children[1].textContent;
  
                //  console.log(price);
                 const cartItems = {};
                 cartItems.img = `image${pathImageSource}`;
                 cartItems.name = name;
                 cartItems.price = price;
              
              //    console.log(name);
                  const cartItem = document.createElement('div');
                  cartItem.classList.add('cart-item');
                  cartItem.innerHTML = 
  
                  `
                  <img src="${cartItems.img}" class="img-fluid" id="item-img" alt="">
                  <div class="item-text">
                    <p id="cart-item-title" class="font-weight-bold mb-0">${cartItems.name}</p>
                    <span id="dollar">$</span>
                    <span id="cart-item-price" class="cart-item-price" class="mb-0">${cartItems.price}</span>
                  </div>
                  <a href="#" id='cart-item-remove' class="cart-item-remove">
                    <i class="fa fa-trash"></i>
                  </a>
                </div> 
                  `;
                  // select cart
                  const cart = document.getElementById('cart');
                  const total = document.querySelector('.cart-total-container');
                  cart.insertBefore(cartItem,total);
              //  console.log(total.textContent);
              // alert("item added to cart");
              cartMessage();
              
              showTotal();
              // console.log(cartTotal);
             }
              
          });
      });
      // show tottal
      const showTotal = () => {
        // let price;
       const priceList = [];
       const itemsInCart = document.querySelectorAll('.cart-item-price');
       itemsInCart.forEach(function(item){
         priceList.push(Math.floor(item.textContent));
        //  console.log(priceList);
       })
      let cartTotal = priceList.reduce(((a,b) => a + b),0);
      // console.log(cartTotal);
      // return cartTotal
      document.getElementById('cart-total').textContent = cartTotal;
      document.querySelector('.item-total').textContent = cartTotal;
      document.getElementById('item-count').textContent = priceList.length;
      }
  
      const cartMessage = () =>{
        let messageText = "<p>Item added to cart</p>";
        const cardBottom = document.querySelector('.card-bottom');
        const bottomText = document.querySelector('.bottom-text');
        const messageDiv = document.createElement('div');
        messageDiv.innerHTML = messageText;
        // console.log(messageDiv);
        cardBottom.insertBefore(messageDiv,bottomText);

        // bottomText.before(messageDiv);

        // cardBottom.forEach(things=>{
        //   things.appendChild(messageDiv);
        // })
        
        // for(let i = 0; i< cardBottom.length; i++){
        //   let cardFirstBorn = cardBottom[i].firstElementChild;
        //   cardFirstBorn.before(messageDiv);
        // }

      //   cardBottom.forEach(things =>{
      //   console.log(things);
      //  })

        
        // 
        // console.log(messageDiv);

       
  
        // console.log(cardBottom);
      }
  })();
  // (function cartMessage()
  // {
  // const 
  
  
  // })();
  