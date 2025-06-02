const hong = { id: 1, name: 'Hong' };
const kim = { id: 2, name: 'kim' };
const lee = { id: 3, name: 'Lee' };
const park = { id: 4, name: 'Park' };
const choi = { id: 5, name: 'Choi' };

const users = {
  users: [kim, lee, park], // 오염되면 안됨!!

  addUser: function (user) {
    return [...this.users, user];
  },
  removeUser: function (user) {
    const filteredUsers = this.users.filter((u) => u.id !== user.id);
    return [...filteredUsers];
  },
  changeUser: function (originUser, updateUser) {
    const findIndex = this.users.findIndex((u) => u.id === originUser.id);
    if (findIndex === -1) return this.users;

    const updatedUsers = [...this.users];
    updatedUsers[findIndex] = updateUser;
    return updatedUsers;
  },
};

users.addUser(hong); // [kim, lee, park, hong]
users.removeUser(lee); // [kim, park]
users.changeUser(kim, choi); // [choi, lee, park]
