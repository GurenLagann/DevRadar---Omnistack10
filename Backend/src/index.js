const express = require ('express');
const mongoose = require ('mongoose');

mongoose.connect( 'mongodb://localhost:27017/RadarDev', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    return res.json({message: 'Hello World'})
});

app.listen(3333);