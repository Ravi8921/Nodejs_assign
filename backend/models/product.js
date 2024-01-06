const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const Appointment = sequelize.define('appointment', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  fullName: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  phone: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  appointmentDate: {
    type: Sequelize.DATE,
    allowNull: true,
  }
});

module.exports = Appointment;
