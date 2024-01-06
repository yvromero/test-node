"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUsers = void 0;
const users = [
    {
        id: 1,
        name: 'John Doe',
    },
    {
        id: 2,
        name: 'Jane Doe',
    }
];
const getUsers = (id, callback) => {
    const user = users.find((user) => {
        return user.id === id;
    });
    if (!user) {
        return callback(`User not found with id, ${id}`);
    }
    return callback(undefined, user);
};
exports.getUsers = getUsers;
