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

fetch('https://reqres.in/api/users?page=1')
.then (response=> response.json())
.then (data =>{
  console.log(id1.first_name)
  document.querySelector('#deneme').innerText = data.first_name
})