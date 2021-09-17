const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const Schema = mongoose.Schema;

mongoose.plugin(slug);

const ultrasonic = new Schema({
    sensor_id: {type: 'String', required: true, default: '12'},
    value: {type: 'Number', maxLength: 255},
    slug: {type: 'String', slug: 'sensor_id', unique: true},
},{
    timestamps: true,
});

module.exports = mongoose.model('ultrasonic',ultrasonic);
