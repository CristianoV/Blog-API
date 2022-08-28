const { Users } = require('../database/models');

const usersService = {
        getUsers: async () => {
        const result = await Users.findAll();
        console.log(result);
        return result;
      },
    };

module.exports = usersService;