const express = require("express")
const dotEnv = require('dotenv');
const app = express();
const mongoose = require("mongoose");

const cors = require('cors');

// configure cors
app.use(cors());

dotEnv.config({path : './config/config.env'});

app.use(express.json());
app.use(express.urlencoded({extended : false}));


const hostname = process.env.HOST_NAME;
const port = process.env.PORT;


app.get('/', (request , response) => {
    response.send(`<h2>Welcome to Users</h2>`);
});

mongoose.connect(process.env.MONGO_DB_LOCAL_URL, {
    useUnifiedTopology : true,
    useNewUrlParser : true,
}).then((response) => {
    console.log(`Connected to Mongo DB Successfully...........`);
}).catch((err) => {
    console.error(err);
    process.exit(1); // stop the node js process if unable to connect to mongodb
});


app.use("/api",require("./routes/users"));

app.listen(port, hostname, () => {
    console.log(`Express Server is Started at http://${hostname}:${port}`);
});
