const fs = require('fs');
const path = require('path');
const { monitorEventLoopDelay } = require('perf_hooks');
const usersDB = path.join(__dirname, "../src/database/users.json")

const findAll = () => {
    return JSON.parse(fs.readFileSync(usersDB, 'utf8'));
};

const idGenerator = () => {
    let allUsers = findAll();
    let last = allUsers.pop()
    if(last){
       var newId = last.id + 1;
    } else {
        id = 1;
    }
    return newId
};

module.exports = {

    findByPk: (id) => {
        let allUsers = findAll();
        let toFind = allUsers.find(u => u.id === id);
        return toFind;
    },

    findByEmail: (e) => {
        let allUsers = findAll();
        let toFind = allUsers.find(u => u.email === e);
        return toFind;
    },

    create: (data) => {
        let allUsers = findAll();
        let newUser = {
            id: idGenerator(),
            ...data
        }
        allUsers.push(newUser);
        fs.writeFileSync(usersDB, JSON.stringify(allUsers, null, ' '));
        return newUser;
    },

    delete: (id) => {
        let allUsers = findAll();
        let users = allUsers.filter(u => u.id !== id)
        fs.writeFileSync(usersDB, JSON.stringify(users, null, ' '));
    }
}