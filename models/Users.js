const fs = require('fs');

module.exports = {
    fileName: '../database/users',

    idGenerator: () => {
        let allUsers = this.findAll();
        let last = allUsers.pop() ? last.id + 1 : 1;
        return last
    },

    findAll: () => {
        return JSON.parse(fs.readFileSync(this.fileName, 'utf8'))
    },

    findByPk: (id) => {
        let allUsers = this.findAll();
        let toFind = allUsers.find(u => u.id === id);
        return toFind;
    },

    findByEmail: (e) => {
        let allUsers = this.findAll();
        let toFind = allUsers.find(u => u.email === e);
        return toFind;
    },

    create: (data) => {
        let allUsers = this.findAll();
        let newUser = {
            id: this.idGenerator(),
            ...data
        }
        allUsers.push(newUser);
        fs.writeFileSync(this.fileName, JSON.stringify(allUsers, null, ' '));
    },

    delete: (id) => {
        let allUsers = this.findAll();
        let users = allUsers.filter(u => u.id !== id)
        fs.writeFileSync(this.fileName, JSON.stringify(users, null, ' '));
    }
}
