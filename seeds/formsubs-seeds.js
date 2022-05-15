const sequelize = require("../config/connection");
const { FormSubs } = require("../models");

const formsubsdata = [
    {
        name: "alesmonde0",
        email: "alesmonde0@email.com",
        note: "hello",
    },
    {
        name: "alesmonde1",
        email: "alesmonde1@email.com",
        note: "it's me",
    },
    {
        name: "alesmonde2",
        email: "alesmonde2@email.com",
        note: "I've been wondering",
    },
    {
        name: "alesmonde3",
        email: "alesmonde3@email.com",
        note: "if after all these years",
    },
    {
        name: "alesmonde4",
        email: "alesmonde4@email.com",
        note: "you still eat meat",
    },
];

const seedFormSubs = () => FormSubs.bulkCreate(formsubsdata);

module.exports = seedFormSubs;
