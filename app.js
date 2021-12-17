const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

const userRouter = require('./routes/user.route')
const categoryRouter = require('./routes/category.route')
const propertyRouter = require('./routes/property.route')

app.use(express.json())

app.use('/users', userRouter);
app.use('/categories', categoryRouter)
app.use('/properties', propertyRouter)



app.listen(3000, () => {
    console.log('Server running')
})

module.exports = app;