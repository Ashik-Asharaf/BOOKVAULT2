import mangoose from  'mangoose'

const userSchema = new mangoose.Schema({
    name:{type:String, required:true},
    email:{type:String, required:true,unique:true},
    password:{type:String, required:true},
    cartData:{type:Object, default:{}},
},{minimize:false})

const User = mangoose.models.user || mangoose.model('user',userSchema)

export default User