const express=require('express')
const mongoose=require('mongoose')
const path=require('path')
const port=3019
const app=express()
app.use(express.static(__dirname))
app.use(express.urlencoded({extended:true}))
mongoose.connect('mongodb://127.0.0.1:27017/flexservice')
const db=mongoose.connection
db.once('open',()=>{
    console.log("Connection successful!")
})
const userSchema = new mongoose.Schema({
    name:String,
    contact:Number
})
const User=mongoose.model('data',userSchema)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'index.html'));
});
// app.post('/post',async(req,res)=>{
//     const{name,contact}=req.body
//  const user=new User({
//     name,
//     contact
//  })
//  await user.save()
//  console.log(user)
//  res.send("Form submission successful!")
// })



// app.post('/post', async (req, res) => {
//     console.log(req.body); // Log incoming data
//     const { name, contact } = req.body;
//     try {
//         const user = new User({ name, contact });
//         await user.save();
//         console.log("User saved:", user);
//         res.send("Form submission successful!");
//     } catch (err) {
//         console.error("Error saving user:", err);
//         res.status(500).send("Error saving user!");
//     }
// });





// Route to handle the form submission and show the success page
app.post('/post', async (req, res) => {
    console.log(req.body); // Log incoming data
    const { name, contact } = req.body;
    try {
        const user = new User({ name, contact });
        await user.save();
        console.log("User saved:", user);
        
        // Instead of just sending a success message, redirect to the /post success page
        res.sendFile(path.join(__dirname, 'post.html'));

    } catch (err) {
        console.error("Error saving user:", err);
        res.status(500).send("Error saving user!");
    }
});





app.listen(port,()=>{
    console.log('server  is started')
})
