const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");
const sequelizeInstance = dbConnect.Sequelize;

class Comment extends Model {}

Comment.init(
  {
    id: {
      type: DataTypes.INTEGER, //what to do if there is a Foreign keys
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    commentText: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
    },
  },
  {
    sequelize: sequelizeInstance,
    modelName: "comments", // use lowercase plural format
    timestamps: true,
    freezeTableName: true,
  }
);
module.exports = Comment;
