const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MemberSchema = new Schema({
    firstname: String,
    lastname: String,
    join_date: String,
    address1: String,
    address2: String,
    image: String,
    membership: { type: Schema.Types.ObjectId, ref: 'MemberShip' },
    room: { type: Schema.Types.ObjectId, ref: 'Room' }
});

module.exports = mongoose.model('Member', MemberSchema);

