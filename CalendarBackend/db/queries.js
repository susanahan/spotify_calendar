let db = require("./index");

const getAllEvents = (req, res, next) => {
    db.any('SELECT * FROM events').then( data => {
        res.json(data).status(200);
    })
    .catch( err => {
        console.log(err);
    });
}

const createEvent = (req, res, next) => {
    let startTime = req.body.startTime;
    let endTime = req.body.endTime;
    let descriptionInput = req.body.descriptionInput;

    db.any('INSERT INTO events (date, start_time, end_time, description) VALUES (${date}, ${startTime}, ${endTime}, ${descriptionInput})', {date: date, start_time: startTime, end_time: endTime, description: descriptionInput})
    .then( data => {
        res.json(data).status(200);
    })
    .catch( err => {
        console.log(err);
    });
}


module.exports = {
    getAllEvents,
    createEvent
}