const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    'title': String,
    'is_completed': {type:Boolean, default: false}
})

const taskModel = mongoose.model('task', taskSchema);
module.export = taskModel;