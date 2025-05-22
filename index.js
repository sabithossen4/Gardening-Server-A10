const express = require('express');
const cors = require('cors');
require('dotenv').config()
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.o1uqrsp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;




// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    const gardensCollection = client.db('gardenDB').collection('gardens');
   
    const featuredGardeners = client.db('gardenDB').collection('featured-gardeners');
    const trendingCollection = client.db('gardenDB').collection('trending');

        app.get('/featured-gardeners', async(req,res)=>{
        const result = await featuredGardeners.find({status:"active"}).limit(6).toArray();
        res.send(result);
      });

        app.get('/explore-gardeners', async(req,res)=>{
        const result = await featuredGardeners.find().toArray();
        res.send(result);
      });

        app.get('/trending', async(req,res)=>{
        const result = await trendingCollection.find({status:"trending"}).limit(6).toArray();
        res.send(result);
      });

          app.get('/gardens', async(req,res)=>{        
        const result = await gardensCollection.find({availability: "Public"}).toArray();
        res.send(result);
      });

        app.get('/gardens/:id', async(req,res)=>{
        const id = req.params.id;           
        const query = {_id: new ObjectId(id)}
        const result = await gardensCollection.findOne(query);
        res.send(result);
      });
     
       app.get('/mygardens/:email', async(req,res)=>{
        const email = req.params.email;           
        const query = {email}
        const result = await gardensCollection.find(query).toArray();
        res.send(result);
      });

      app.post('/gardens', async(req,res) =>{
        const newGardenTip = req.body;
        console.log(newGardenTip);
        const result = await gardensCollection.insertOne(newGardenTip);
        res.send(result);
      })

      app.delete('/gardens/:id' ,async(req,res) =>{
        const id = req.params.id;
        const query ={_id: new ObjectId(id)}
        const result = await gardensCollection.deleteOne(query);
        res.send(result)
      })

      app.put('/gardens/:id', async (req, res) => {
            const id = req.params.id;
            const filter = { _id: new ObjectId(id) }
            const options = { upsert: true };
            const updatedTips = req.body;
            const updatedDoc = {
                $set: updatedTips
            }
             const result = await gardensCollection.updateOne(filter, updatedDoc, options);

            res.send(result);
        })


    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get('/', (req, res) => {
  res.send('Wellcome Assignment-10')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
