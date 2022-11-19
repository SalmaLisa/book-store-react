const addToLocalDb = id => {
  const storedCart = getStoredData();
  
  const quantity = storedCart[id];
  if (quantity) {
    const newQuantity = quantity + 1;
    storedCart[id] = newQuantity;
  }
  else {
    storedCart[id] = 1;
  }

  localStorage.setItem('cart',JSON.stringify(storedCart))
  
};

const getStoredData = () => {
  let cart;
  const storedData = localStorage.getItem("cart");
  if (storedData) {
    cart = JSON.parse(storedData);
  } else {
    cart = {};
  }
  return cart;
};

export { addToLocalDb, getStoredData };
