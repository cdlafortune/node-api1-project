let users = [
    {
        id: 1,
        name: 'John Doe',
        bio: 'Just a regular guy.',
    }, 
    {
        id: 2,
        name: 'Joe Doe',
        bio: 'Not your average Joe.',
    },
    {
        id: 3,
        name: 'Jane Doe',
        bio: 'Loves programming.',
    },
];

function getUsers(){
    return users;
};

function getUserById(id){
    return users.find(user => user.id.toString() === id.toString());
};

function createUser(obj){
    const payload = {
        id: String(users.length + 1),
        ...obj,
    };
    
    users.push(payload);

    return payload;
};

function updateUser(id, data){
    const index = users.findIndex(el => el.id.toString() === id.toString());

    users[index] = {
        ...users[index],
        ...data,
    };

    return users[index];
};

function deleteUser(id){
    users = users.filter(el => el.id.toString() !== id.toString());
};

module.exports = {
    users,
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
};