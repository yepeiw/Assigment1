

//const btnac=document.querySelector("#applec")

//btnac.addEventListener("click",function(){
 
//  appnum.textContent=0
//})


const API = (() => {
  const URL = "http://localhost:3000";
  const getCart =
    ()=>fetch(URL+'/cart').then((data)=>data.json())
    // define your method to get cart data
;

  const getInventory =
    ()=>fetch(URL+'/inventory').then((data)=>data.json())
    // define your method to get inventory data
  ;

  const addToCart = (inventoryItem) => {
    // define your method to add an item to cart
  };

  const updateCart = (id, newAmount) => {
    // define your method to update an item in cart
  };

  const deleteFromCart = (id) => {
    // define your method to delete an item in cart
  };

  const checkout = () => {
    // you don't need to add anything here
    return getCart().then((data) =>
      Promise.all(data.map((item) => deleteFromCart(item.id)))
    );
  };

  return {
    getCart,
    updateCart,
    getInventory,
    addToCart,
    deleteFromCart,
    checkout,
  };
})();

const Model = (() => {
  // implement your logic for Model
  class State {
    #onChange;
    #inventory;
    #cart;
    #onIChange;
    constructor() {
      this.#inventory = [];
      this.#cart = [];
    }
    get cart() {
      return this.#cart;
    }

    get inventory() {
      return this.#inventory;
    }

    set cart(newCart) {
      this.#cart=newCart;
      this.#onChange()
    }
    set inventory(newInventory) {
      this.#inventory=newInventory;
      this.#onIChange()
    }

    subscribe(cb) {
      this.#onChange=cb
    }
    subscribe1(cb){
      this.#onIChange=cb
    }
  }
  const {
    getCart,
    updateCart,
    getInventory,
    addToCart,
    deleteFromCart,
    checkout,
  } = API;
  return {
    State,
    getCart,
    updateCart,
    getInventory,
    addToCart,
    deleteFromCart,
    checkout,
  };
})();
const state=new Model.State()
const View = ((state) => {
  // implement your logic for View
  
  const itemlistEl = document.querySelector(".cart-wrapper ul");
  const inventoryEl=document.querySelector('.inventory-container ul')
  
  const renderItems=(items)=>{
    let itemtemp="";
    items.forEach((item)=>{
      const name=item.name;
      const number=item.number;
      const litemp=`<li item-id="${item.id}"><span>${name}  x ${number}</span><button class="delete-btn"> delete</button></li>`
      itemtemp+=litemp;
    })
       itemlistEl.innerHTML=itemtemp
  }
  const renderInventory=(items)=>{
    let itemtemp="";
    items.forEach((item)=>{
      const name=item.content;
      const litemp=`<li class='title'> <span class="name">${name}</span> <button class="min">-</button>  <span class="num"> 0 </span> <button class="plus">+</button> <button class="atc">add to cart</button></li>`
      itemtemp+=litemp;
    })
    inventoryEl.innerHTML=itemtemp
    inventoryEl.querySelectorAll('.title').forEach( (element)=>{
      btn=element.querySelector('.atc')
      console.log(btn)
      btn.addEventListener("click",function(){
        var num=element.querySelector('.num')
        
        var flag=0
        state.cart.forEach(function(item){
          if (item['name']==element.querySelector('.name').textContent){
            flag=1
            item['number']=item['number']+parseInt(num.textContent)
            num.textContent=0
            state.cart=[...state.cart]
          }
        if (flag==0 ){
          state.cart.append({name:element.querySelector('.name').textContent,number:parseInt(element.querySelector('.num').textContent)})
          state.cart=[...state.cart]
        }
        })
 
        })
      btn=element.querySelector('.min')
      console.log(btn)
        btn.addEventListener("click",function(){
          var num=element.querySelector('.num')
          if (num.textContent=='0'){
            console.log('0')
          }
          else{
          num.textContent=parseInt(num.textContent)-1}
          })
          btn=element.querySelector('.plus')
          btn.addEventListener("click",function(){
            var num=element.querySelector('.num')
            num.textContent=parseInt(num.textContent)+1
            })
      })
  }
  return {
    renderItems,
    renderInventory,
    itemlistEl,
    inventoryEl,
  };
})(state);

const Controller = ((model, view,state) => {
  // implement your logic for Controller

  const init = () => {
    model.getCart().then((data)=>{
      state.cart=data
    })
    model.getInventory().then((data)=>{
      state.inventory=data
    })
  };
  const handleUpdateAmount = () => {
    
  };



  const handleDelete = () => {};

  const handleCheckout = () => {
   
  };
  const bootstrap = () => {
    init();
    state.subscribe(()=>{
      view.renderItems(state.cart)
    
    })

    state.subscribe1(
      ()=>{
        view.renderInventory(state.inventory)
      }
    )
    handleUpdateAmount()
  };
  return {
    bootstrap,
  };
})(Model, View,state);

Controller.bootstrap();
