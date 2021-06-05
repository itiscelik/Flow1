//START GET MRTHOD 
// fetch('https://reqres.in/api/users/1')
// .then(response => response.json())
// .then(data => console.log(data))

// fetch('https://reqres.in/api/users', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     name: 'morpheus',
//     job: 'leader'  //zion resident 
//   })
// })
//   .then(response => {
//     return response.json()
//   })
//   .then(data => console.log(data))
//   .catch(error => console.log('ERROR'))

// fetch('https://reqres.in/api/users?page=1')
// .then ( obj = function (response){ response.json()})
// // var obj = response.json()
// .then (obj =>{
//   console.log(obj)
//   let text = "";
// for (let i in obj) {
//   text += obj[i] + ", ";
// }
//   document.getElementById('deneme').innerHTML= obj ;
// })
//ENDS GET METHOD








//STARTS  POST METHOD
  
document.getElementById('addPost').addEventListener('submit' , addPost);

function addPost (e){
  e.preventDefault();
  let name = document.getElementById('name').value;
  let job = document.getElementById('job').value;

fetch('https://reqres.in/api/users' , {
  method:'POST', 
  headers : {
    'Content-type' : 'application/json'
  },
  body: JSON.stringify( {name:name , job:job})
})
.then(response => {
  return response.json()
})
.then(data => console.log(data))
.catch(error => console.log('ERROR'))}

// ENDS POST METHOD 

