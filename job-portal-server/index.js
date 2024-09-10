const express = require("express");
const cors = require("cors");
const app = express();
require('dotenv').config();

app.use(express.json());
app.use(cors());

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://${process.env.VITE_DB_USER}:${process.env.VITE_DB_PASSWORD}@job-portal.qdc40.mongodb.net/?retryWrites=true&w=majority&appName=job-portal`;


const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server
    await client.connect();

    const db = client.db("job-port");
    const jobcollections = db.collection("DemoJobs");

    // Post a job
    app.post("/post-job", async (req, res) => {
      const body = req.body;
      body.createAt = new Date();
      console.log(body);
      const result = await jobcollections.insertOne(body);
      if (result.insertedId) {
        return res.status(200).send(result);
      } else {
        return res.status(404).send({
          message: "Cannot insert, try again later",
          status: false
        });
      }
    });

    // Get all jobs
    app.get("/all-jobs", async (req, res) => {
      const jobs = await jobcollections.find({}).toArray();
      res.send(jobs);
    });

    // Ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } catch (err) {
    console.error("Error connecting to MongoDB", err);
  }
}

// Run the MongoDB connection
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
