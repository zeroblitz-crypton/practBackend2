require('./conection')
const express=require('express')
const app=express()
const Product=require('./models/Product')
app.use(express.json())

/*
const product=new Product({
    name:'mesa de vidrio',
    description:'escritorio',
    price:400
})
*/
app.post('/user',(req,res)=>{
   
   const product=new Product({
        name:req.body.name,
        description:req.body.description,
        price:req.body.price
    })

    product.save()
   
   console.log(req.body);
})
app.get('/user', async (req,res)=>{
    const products= await Product.find()
    res.json(products)
    console.log(products);
})

app.get('/user/:id', async(req,res)=>{
    const product= await Product.findById(req.params.id)
    res.json(product)
    console.log(product);
})

app.put('/user/:id',async(req,res)=>{
    const product= await Product.findOne({_id:req.params.id})
    
        product.name=req.body.name
        product.description=req.body.description
        product.price=req.body.price

        product.save()
    res.json(product)
    console.log(product);
})

app.delete('/user/:id',async (req,res)=>{
    const product= await Product.findByIdAndDelete({_id:req.params.id})
    
    res.json(product)
    console.log(product);
})




app.listen(4000,()=>{
    console.log("servidor web online");
})
