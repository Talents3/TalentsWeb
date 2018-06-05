var express     = require("express"),
    app         = express(),
    bodyParser  = require("body-parser"),
    passport    = require("passport"),
    LocalStrategy = require("passport-local"),
    User        = require("./models/user"),
    mongoose    = require("mongoose"),
    Post  = require("./models/Post"),
    Comment     = require("./models/comment"),
    seedDB      = require("./seeds")

mongoose.connect("mongodb://localhost/Talents3",{ useMongoClient: true });  // need to change the address
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
seedDB();

// passport configuration
app.use(require("express-session")({
     secret: "We are Talents3 team!",
     resave: false,
     saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req, res, next){
   res.locals.currentUser = req.user;
   next();
});

app.get("/", function(req, res){
    res.render("Talents3Home");
});