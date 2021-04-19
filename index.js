// function express(){
//   function get(route, fn){
//     console.log(fn(),route)
//   }
//   return {get}
// }


const express = require('express');
const app = express();
app.get('/',(req,res) => {
  res.send('Hello! This is my first express page')
})
app.get('/info',(req,res) => {
  res.send('I am Tiffany')
})
app.get('/welcome',(req,res) => {
  res.send('<div style="color:red">Hello Welcome! </div>')
})

app.listen(port = 3000,() => {
  console.log(`Example app listening at http://localhost:${port}`)
})
