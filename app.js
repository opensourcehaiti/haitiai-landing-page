const express = require("express");
const app = express ();
const i18n=require("i18n-express");

app.use(express.static( "public"));
app.set("view engine", "ejs");

app.use( i18n( {
  translationsPath : __dirname + "/public/i18n",
  siteLangs: ["en","ht"],
  textsVarName: 'translation'
}));

app.get("/", (req, res)=> {
    res.render("index");
})

app.listen(4009, ()=> console.log("app started!"))
