const User = require("./User");
const Exercisebook = require("./Exercisebook");
const Class = require("./Class");
const Subject = require("./Subject");
const Page = require("./Page");

User.hasMany(Exercisebook, {
  foreignKey: "student_email",
  onDelete: "CASCADE",
});

Exercisebook.belongsTo(User, {
  foreignKey: "student_email",
});

Exercisebook.hasMany(Page, {
  foreignKey: "exercisebook_id",
  onDelete: "CASCADE",
});

Page.belongsTo(Exercisebook, {
  foreignKey: "exercisebook_id",
});

Subject.hasMany(Exercisebook, {
  foreignKey: "subject_id",
  onDelete: "CASCADE",
});

Exercisebook.belongsTo(Subject, {
  foreignKey: "subject_id",
});

Subject.hasMany(Class, {
  foreignKey: "subject_id",
  onDelete: "CASCADE",
});

Class.belongsTo(Subject, {
  foreignKey: "subject_id",
});

User.hasMany(Class, {
  foreignKey: "student_email",
  onDelete: "CASCADE",
});

Class.belongsTo(User, {
  foreignKey: "student_email",
});

User.hasMany(Class, {
  foreignKey: "teacher_email",
  onDelete: "CASCADE",
});

Class.belongsTo(User, {
  foreignKey: "teacher_email",
});

module.exports = { User, Exercisebook, Class, Subject, Page };
