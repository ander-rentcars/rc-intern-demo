module.exports = (sequelize, Sequelize) => {
  const Vehicle = sequelize.define('vehicle', {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4, // Or DataTypes.UUIDV1
      primaryKey: true
    },
    locadora: {
      type: Sequelize.STRING,
    },
    modelo: {
      type: Sequelize.STRING,
    },
    marca: {
      type: Sequelize.STRING,
    },
    ano: {
      type: Sequelize.INTEGER,
    },
    motor: {
      type: Sequelize.STRING,
    },
    portas: {
      type: Sequelize.STRING,
    },
    cambio: {
      type: Sequelize.STRING,
    },
    ar_condicionado: {
      type: Sequelize.BOOLEAN,
    }
  })
  return Vehicle
}