import User from "../models/User.js"


//Adding to Cart
export const addToCart = async (req,res) => {
    try {
       const {itemId} = req.body
       const userId = req.userId
       const userdata = await User.findById(userId)
       const cartData = userData.cartData || {}

       if(cartData[itemId]){
        cartData[itemId] +=1
       }else{
        cartData[itemId] = 1
       }
       await User.findByIdAndUpdate(userId,{cartData})
        res.json({message:"Item added to cart successfully"})
    } catch (error) {
        console.log(error.message);
        res.json({ success: false, message: error.message });
    }
}

//Update the Cart
export const updateCart = async (req,res) => {
    try {
        const {itemId,quantity} = req.body
        const userId = req.userId
        const userdata = await User.findById(userId)
        const cartData = userData.cartData 

        cartData[itemId] = quantity

        await User.findByIdAndUpdate(userId,{cartData})
        res.json({message:"Cart Update"})

       } catch (error) {
        console.log(error.message);
    res.json({ success: false, message: error.message });
    }
}
