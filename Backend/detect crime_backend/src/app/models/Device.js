const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const Schema = mongoose.Schema;

mongoose.plugin(slug);

const device = new Schema({
    device_name: {type: 'String', required: true},
    admin_id: {type: 'String', maxLength: 255, default: '12'},
    slug: {type: 'String' , slug: 'device_name', unique: true},
},{
    timestamps: true,
});
// unique: true : ở slug thì unique có tác dụng thêm chữ phía sau slug nếu slug đã bị trùng lặp

module.exports = mongoose.model('device', device);


