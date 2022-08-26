const db = require('../models');
const Line = db.line;

getAllLines = (req, res, next) => {
    
    Line.findAll().then(lines => {
        var activeLines = []
        lines.forEach(line => {
            console.log(line.name)
            activeLines.push({"id": line.id , "line": line.name});
        });
        res.send(activeLines);
        return;
    })
}

const getLines = {
    getAllLines: getAllLines,
};
module.exports = getLines;