import { DataTypes, Sequelize } from "sequelize";

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize("docker-pg", "postgres", "postgres", {
  host: "db",
  dialect:
    "postgres" /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */,
});

const User = sequelize.define("user", {
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true,
  },

  fullName: {
    type: DataTypes.STRING,
  },

  age: {
    type: DataTypes.INTEGER,
  },

  employed: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});

User.sync().then(() => {
  console.log("User Model synced");
});

const Topic = sequelize.define("topic", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: { notEmpty: true },
  },
  subTopics: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: false,
    validate: { notEmpty: true },
  },
  expiresAt: {
    type: DataTypes.DATE,
    allowNull: true,
  },
});

const Subtopic = sequelize.define("subtopic", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: { notEmpty: true },
  },
  questions: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: false,
    validate: { notEmpty: true },
  },
  expiresAt: {
    type: DataTypes.DATE,
    allowNull: false,
    validate: { notEmpty: true },
  },
});

const Question = sequelize.define("question", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: { notEmpty: true },
  },
  expiresAt: {
    type: DataTypes.DATE,
    allowNull: false,
    validate: { notEmpty: true },
  },
});

export default async function storeInDB() {
  try {
    await sequelize.authenticate();

    const users = await User.findAll();
    console.log(users);
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}
