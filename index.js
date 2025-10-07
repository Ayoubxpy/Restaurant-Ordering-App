import {menuArray} from './data.js'
const menuItems = document.getElementById('menu-items')
const orderItems = document.getElementById('order-section')
const paymentModal = document.getElementById('payment-modal')
const paymentForm = document.getElementById('payment-form')
const nameInput = document.getElementById('name')
const orders = []


function renderMenu(){
    let menuHtml = ''
    menuArray.forEach(item => {
        menuHtml += `
        <div class="item" >
                <img class= "menu-img" src="Images/${item.name}.png" alt="${item.name} Image">
                <h3 >${item.name}</h3>
                <p>${item.ingredients.join(', ')}</p>
                <p>${item.price}$</p>
                <button class="btn" data-add="${item.id}"> + </button>
        </div>
        <hr> 
        `
    })
    menuItems.innerHTML = menuHtml
}
renderMenu()

document.addEventListener('click',e =>{
    if (e.target.dataset.add) {
        const addedItem = menuArray.find(item => item.id === Number(e.target.dataset.add))
        const existingOrderItem = orders.find(orderItem => orderItem.id === addedItem.id)
        if (existingOrderItem){
            existingOrderItem.quantity++
        } else {
             const newItem = { ...addedItem, quantity: 1 }
            orders.push(newItem)
        }
        renderOrder()
    }else if (e.target.id === "order-btn" ){
        paymentModal.classList.remove('hidden')
    } 
    else if (e.target.dataset.remove){
        const targetIndex = orders.findIndex(order => order.id === Number(e.target.dataset.remove))
        if (targetIndex > -1) {
            orders.splice(targetIndex, 1)
        }
        renderOrder()
    } 
})

paymentForm.addEventListener('submit', e => {
    e.preventDefault()
    const userName = nameInput.value
    paymentModal.classList.add('hidden')
    const Message = `<div class="thanks-message">Thanks, ${userName}! Your order is on its way.</div>`
    document.getElementById('order-section').innerHTML = Message
})

function renderOrder(){
    let totalPrice = 0
    let orderHtml = ''

    if (orders.length === 0) {
        orderItems.innerHTML = ''
        return
    }

    orders.forEach(order => {
        orderHtml+= `
    <div id="order-items" class="order-items">
        <p>${order.quantity > 1 ? `${order.name} (${order.quantity})` : order.name}</p>
        <button data-remove="${order.id}">remove</button>
        <p>${order.price * order.quantity}$</p>
    </div>
`
            totalPrice+= order.price * order.quantity
    })
    const finalOrder = `<main  class="order-section">
            <h1 >Your Order</h1>
            ${orderHtml}
            <hr>
            <div id = "total-price" class="total-price">Total Price : ${totalPrice} $</div>
            <button id = "order-btn" class="order-btn" >Complete Order</button>
        </main>`
    orderItems.innerHTML = finalOrder
}
