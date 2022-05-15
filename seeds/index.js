const seedFormSubs = require("./formsubs-seeds");

const sequelize = require("../config/connection");

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log("--------------");
    await seedFormSubs();
    console.log("--------------");

    process.exit(0);
};

seedAll();
