const express = require('express');
const cors = require('cors');
const db = require("./models");
const Role = db.role;
const Line = db.line;

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended: true}));

// db.sequelize.sync({force: false}).then(()=>{
// //     console.log("Drop and resync database");
//     initial();
// });

db.sequelize.sync();

function initial() {
    Line.create({
      id: 3,
      name: "GM"
    });
   
    Line.create({
      id: 4,
      name: "Hyundai"
    });
  }

app.get("/", (req, res) => {
    res.json({ message: "start again" });
});

require('./routes/auth.routes.js')(app);
require('./routes/user.routes.js')(app);
require('./routes/table.route.js')(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, ()=>{
    console.log(`Backend started on port ${PORT}`);
})