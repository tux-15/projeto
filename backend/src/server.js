const express = require('express');
const cors = require('cors');
const db = require("./models");
const Role = db.role;

const app = express();
var corsOptions = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({extended: true}));

db.sequelize.sync({force: true}).then(()=>{
    console.log("Drop and resync database");
    initial();
});

function initial() {
    Role.create({
      id: 1,
      name: "user"
    });
   
    Role.create({
      id: 2,
      name: "admin"
    });
  }

app.get("/", (req, res) => {
    res.json({ message: "start again" });
});

require('./routes/auth.routes.js')(app);
require('./routes/user.routes.js')(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, ()=>{
    console.log(`Backend started on port ${PORT}`);
})