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
    return users.find(user => user.id === id);
};

function createUser(obj){
    const payload = {
        id: String(users.length + 1),
        ...data,
    };
};

function updateUser(id, data){
    const index = users.findIndex(el => el.id === id);

    users[index] = {
        ...users[index],
        ...data,
    };

    return users[index];
};

function deleteUser(id){
    users = users.filter(el => el.id != id);
};

module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
};