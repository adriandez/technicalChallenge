module.exports = (sequelize, DataTypes) => {
  const item = sequelize.define("item", {
    item_ID: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    relevance: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    price: DataTypes.DOUBLE(10, 2),
    cif: {
      type: DataTypes.STRING,
      required: true,
      allowNull: false,
    },
  });
  item.associate = (models) => {
    item.belongsTo(models.manufact, {
      foreignKey: "cif",
      as: "manufact"
    });
  };
  return item;
};
