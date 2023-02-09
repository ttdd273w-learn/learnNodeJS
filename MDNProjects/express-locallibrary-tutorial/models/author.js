const { DateTime } = require("luxon");
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
  first_name: { type: String, required: true, maxLenght: 100 },
  family_name: { type: String, required: true, maxLength: 100 },
  date_of_birth: { type: Date },
  date_of_death: { type: Date },
});

// Virtual for author's full name
AuthorSchema.virtual("name").get(function () {
  // To avoid errors in cases where an author does not havae either a family name or first name
  // We want to make sure we handle the exception by returning an empty string for that case
  let fullname = "";
  if (this.first_name && this.family_name) {
    fullname = `${this.family_name},${this.first_name}`;
  }

  if (!this.first_name || !this.family_name) {
    fullname = "";
  }

  return fullname;
});

// Virtual for author's URL
AuthorSchema.virtual("url").get(function () {
  // We don't use an arrow function as we'll need the this object
  return `/catalog/author/${this.id}`;
});

// Virtual for author's lifespan
AuthorSchema.virtual("lifespan").get(function () {
  console.log(this.date_of_birth);
  console.log(this.date_of_death);

  if (!this.date_of_birth) {
    return "Life Span Unavailable";
  }

  date_of_birth_formatted = DateTime.fromJSDate(
    this.date_of_birth
  ).toLocaleString(DateTime.DATE_MED);

  date_of_death_formatted = this.date_of_death
    ? DateTime.fromJSDate(this.date_of_death).toLocaleString(DateTime.DATE_MED)
    : "Today";

  return `${date_of_birth_formatted} - ${date_of_death_formatted}`;
});

AuthorSchema.virtual("date_of_birth_yyyy_mm_dd").get(function () {
  return DateTime.fromJSDate(this.date_of_birth).toISODate(); // format 'YYYY-MM-DD'
});

AuthorSchema.virtual("date_of_death_yyyy_mm_dd").get(function () {
  return DateTime.fromJSDate(this.date_of_death).toISODate(); // format 'YYYY-MM-DD'
});

// Export model
module.exports = mongoose.model("Author", AuthorSchema);
