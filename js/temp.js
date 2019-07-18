var mong = require('mongoose');
var model = mong.model;
model = new model('Service', {
    Title: {
        type: String,
        required: true
    },
    Url: {
        type: String,
        required: true
    },
    Details: {
        type: String,
        required: true
    }

});
module.exports = { model };