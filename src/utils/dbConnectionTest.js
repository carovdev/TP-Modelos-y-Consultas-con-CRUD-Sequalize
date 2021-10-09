const {sequelize} = require('../database/models')
const dbConnectionTest =  async () => {
try {
    await sequelize.authenticate();
    console.log('Connection has been established sucessfully.');
}catch(error) {
    console.error('Unable to connect to the database:',error)
}
};

module.exports = dbConnectionTest;