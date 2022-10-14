const T = require("tesseract.js");

T.recognize(
  "http://res.cloudinary.com/djkf82kzz/image/upload/v1665606472/main/uploads/Write_Every_day.png",
  "eng",
  {}
).then((out) => console.log(out.data.text));
