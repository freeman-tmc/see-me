var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var usersSchema = new Schema({
    picture: {
        type: String,
        default: 'https://vignette.wikia.nocookie.net/bungostraydogs/images/1/1e/Profile-icon-9.png/revision/latest?cb=20171030104015'
    },
    age: Number,
    name: String,
    gender: String,
    company: String,
    email: String,
    phone: String,
    address: String
});

module.exports = mongoose.model('User', usersSchema);


