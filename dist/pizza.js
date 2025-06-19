let manu = [
    { name: 'Margherita', price: 8 },
    { name: 'Pepperoni', price: 10 },
    { name: 'Hawaiian', price: 12 },
    { name: 'Veggie', price: 9 },
];
let nextOrderId = 1;
let cashInRegister = 100;
let orderQueue = [];
function addNewPizza(pizzaObj) {
    manu.push(pizzaObj);
}
function placeOrder(pizzaName) {
    const selectedPizza = manu.find((pizzaObj) => pizzaObj.name == pizzaName);
    if (!selectedPizza) {
        throw new Error('Pizza not found in the menu');
    }
    cashInRegister += selectedPizza.price;
    const newOrder = {
        name: selectedPizza.name,
        id: nextOrderId++,
        status: 'ordered',
    };
    orderQueue.push(newOrder);
    return newOrder;
}
function completeOrder(orderId) {
    const selectedOrder = orderQueue.find((order) => order.id == orderId);
    if (!selectedOrder) {
        throw new Error('Order not found in the queue');
    }
    selectedOrder.status = 'completed';
    return selectedOrder;
}
addNewPizza({ name: 'Chicken Bacon Ranch', price: 12 });
addNewPizza({ name: 'BBQ Chicken', price: 12 });
addNewPizza({ name: 'Spicy Sausage', price: 11 });
placeOrder('Chicken Bacon Ranch');
completeOrder(1);
console.log('Manu: ', manu);
console.log('Order Queue: ', orderQueue);
console.log('Cash in Register: ', cashInRegister);
export {};
