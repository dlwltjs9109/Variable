'use strict';

//Callback Hell example
class UserStorage {
    loginUser(id, password) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if(
                    (id === 'ellie' && password === 'dream') ||
                    (id === 'coder' && password === 'academy')
                ) {
                    resolve(id);
                } else {
                    reject(new Error('not found'));
                }
            }, 2000);
        });  
    }

    getRoles(user) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if(user === 'ellie') {
                    resolve({name: 'ellie', role: 'admin'});
                } else {
                    reject(new Error('no access'));
                }
            }, 1000);
        });
    }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('emter your password');
userStorage
.loginUser(id, password)
.then(userStorage.getRoles)
.then(user => alert(`Hello ${user.name}, you have a ${user.role} role`))
.catch(console.log)

//userStorage.loginUser( 바로 위 코드랑 똑같음 얘는 콜백 지옥 
    //id,
    //password,
    //user => {
        //userStorage.getRoles(
            //user,
            //userWithRole => {
                //alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`);
            //},
            //error => {
                //console.log(error);
            //}
        //);
    //},
    //error => {
        //console.log(error);
    //}
//);