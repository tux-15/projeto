module.exports = (Sequelize, sequelize) => {
    const Line = sequelize.define("lines", {
      name: { 
        type: Sequelize.STRING
      },
    });
    return Line;
  };