const generateOrder = (name, email, phone, cart, total) => {
    return {
        buyer: {
            name: name,
            email: email,
            phone: phone
        },
        items: cart,
        total: total,
        createdAt: new Date().toLocaleString()
    }
}

export default generateOrder;