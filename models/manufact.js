module.exports = (sequelize, DataTypes) => {
  const manufact = sequelize.define("manufact", {
    manufact_ID: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cif: {
      type: DataTypes.STRING,
      required: true,
      unique: true,
      allowNull: false,
    },
    address: DataTypes.STRING,
  });
  manufact.associate = (models) => {
    manufact.hasMany(models.item, {
      onDelete: "cascade",
    });
  };
  return manufact;
};
