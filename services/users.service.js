
let service = {};
service.authenticate = function(username, password) {
  
  let user = {
    username: 'ken',
    password: 'ken'
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