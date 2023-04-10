// use local storage to manage cart data
const addToDb = id => {
    let jobCart = getJobCart();
    // add status
    const status = jobCart[id];
    if (!status) {
        jobCart[id] = true;
    }
    else {
        const newQuantity = true;
        jobCart[id] = newQuantity;
    }
    localStorage.setItem('job-cart', JSON.stringify(jobCart));
}

const removeFromDb = id => {
    const jobCart = getJobCart();
    if (id in jobCart) {
        delete jobCart[id];
        localStorage.setItem('job-cart', JSON.stringify(jobCart));
    }
}

const getJobCart = () => {
    let jobCart = {};

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('job-cart');
    if (storedCart) {
        jobCart = JSON.parse(storedCart);
    }
    return jobCart;
}

const deleteJobCart = () => {
    localStorage.removeItem('job-cart');
}

export {
    addToDb,
    removeFromDb,
    getJobCart,
    deleteJobCart
}
