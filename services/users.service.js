
let service = {};
service.authenticate = function(username, password) {
  
  let user = {
    username: 'kenken',
    password: 'kenken'
  }
  return new Promise((resolve, reject) => {

    // should check database
    if (username === user.username && password === user.password) {
      resolve(true);      
    } else {
      resolve(false);    
    }
  })
}

module.exports = service;