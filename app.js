const express = require("express");
const app = express ();
const i18n=require("i18n-express");

app.use(express.static( "public"));
app.set("view engine", "ejs");

app.use( i18n( {
  translationsPath : __dirname + "/public/i18n",
  siteLangs: ["ht","en"],
  textsVarName: 'translation',
  defaultLang: 'ht',
  browserEnable: 'true'
}));

app.get("/", (req, res)=> {
    res.render("index");
})

if(process.env.NODE_ENV === "production") {
  app.listen(process.env.PORT, process.env.IP, ()=> console.log("prod app started"))
} else {
  app.listen(4009, ()=> console.log("local app started!"))
}
