const express = require('express')
const app = express()
const port = 3000
const { v4: uuidv4 } = require('uuid');


// app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


let product =[{ 
    id: uuidv4(), 
    name: "iPhone Charger",
    manufacturer:"iPhone",
    category: "Charger",
    description:" Compatible iPhone 12Pro Max/12Pro/12/11/Pro/Xs Max/X/8 and More-Silver&White",
    price: 12.99
    
}];

// let productIdAccumulator= product.length;


app.get('/', (req, res) => {
    res.json(product);
  })

  app.get('/product/:id', (req, res) => {
    res.json(product);
  })


  app.post('/product', (req,res)=>{
    res.send ('creating new product')
      console.log(req.body);
      
    //   productIdAccumulator++;
      product.push({
          id:uuidv4(),
          name: req.body.name,
          manufacturer: req.body.manufacturer,
          category: req.body.category,
          description: req.body.description,
          price: req.body.price,
      })
      console.log('product created!');
     
  })

  app.delete('/product/:id', (req,res)=>{

    const result = product.findIndex(d=>d.id===req.params.id);
    if (result !== -1){
    product.splice(result, 1);
      res.send('product deleted');}
      else{
          res.send('no such product found');
      }
  })

  app.delete('/product', (req,res)=>{
      res.send('Delete products');
  })

  app.put('/product/:id', (req,res)=>{

    res.send("modify product!");
  })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

