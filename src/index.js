import React from "react";
import ReactDOM from "react-dom";
import App2 from "./components/App";

ReactDOM.render(<App2 />, document.getElementById("root"));

// const path=require('path');
// const fs=require('fs');
// const os=require('os');
// const url=require('url');
// const { serialize } = require('v8');

// const Logger=require('./logger');

// const logger=new Logger();

// logger.on('message', data=> console.log('Called Listener', data));
// logger.log('Hello world');


// const base=path.basename((__filename));
// console.log(base);

// create folder
// fs.mkdir(path.join(__dirname, '/test'), {}, err=>{ 
//     if(err) throw err; 
//     console.log('Folder created');
// });

// create and write to file
// fs.writeFile(
//     path.join(__dirname, '/test', 'hello.jsx'), 'Hello world', 
//     err=>{ 
//     if(err) throw err; 
//     console.log('File created');
// });

// append file
// fs.appendFile(
//     path.join(__dirname, '/test', 'hello.jsx'), 'I lov Nodejs', 
//     err=>{ 
//     if(err) throw err; 
//     console.log('File created');
// });

// read file
// fs.readFile(
//     path.join(__dirname, '/components', 'App.jsx'), {}, 
//     (err, data)=>{ 
//     if(err) throw err; 
//     console.log(data);
// });

// rename file
// fs.rename(
//     path.join(__dirname, '/test', 'hello.jsx'), path.join(__dirname, '/test', 'helloworld.txt'),
//     err=>{ 
//     if(err) throw err; 
//     console.log('file renamed');
// });

// const myUrl=new URL('https://mysite.com:3000/hello.html?id=100&staus=active');

// console.log(myUrl);

// // serialized query

// console.log(myUrl.search);
// myUrl.searchParams.forEach((value,name) => {
// console.log(`${name}:${value}`);
// });






//CHALLENGE:
//1. Implement the add note functionality.
//- Create a constant that keeps track of the title and content.
//- Pass the new note back to the App.
//- Add new note to an array.
//- Take array and render seperate Note components for each item.

//2. Implement the delete note functionality.
//- Callback from the Note component to trigger a delete function.
//- Use the filter function to filter out the item that needs deletion.
//- Pass a id over to the Note component, pass it back to the App when deleting.

//This is the end result you're aiming for:
//https://pogqj.csb.app/
 