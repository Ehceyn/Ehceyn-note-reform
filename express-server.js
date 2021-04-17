const express=require('express');
const path=require('path');
const logger=require('./src/test/middleware/xprs-logger');



const app=express();

//create logger example
const Logger=logger

//init middleware
app.use(Logger);

//set static folder
app.use(express.static(path.join(__dirname, 'src', 'test')));

// app.get('/', (req,res)=>{
//     res.sendFile(path.join(__dirname, 'src' ,'test', 'Home.html'))
// })

const PORT=process.env.PORT || 5000;

app.listen(PORT, ()=>console.log(`Server running on port ${PORT}`));
