const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");
const sequelizeInstance = dbConnect.Sequelize;

class Like extends Model {}

User.init(
  {
    id: {
      type: DataTypes.INTEGER, //what to do if there is a Foreign keys
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
  },
  {
    sequelize: sequelizeInstance,
    modelName: "likes", // use lowercase plural format
    timestamps: true,
    freezeTableName: true,
  }
);
module.exports = Like;
