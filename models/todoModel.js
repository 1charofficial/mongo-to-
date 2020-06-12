
const {Schema, model} = require('mongoose');


let todoList = new Schema({
	Name: {type: String, required: true, unique: false},
	ID: {type: String, required: true, unique: false},
    Task: {type: String, required: false, unique: false},
    DateCreated: {type: Date, required: true, unique: false, default: Date.now },

	//could I make another schema with a check list of some kind and insert into here as a child schema? 
	//hmm? lets do the first part before we get OTT  : )
}, {

	toObject: { virtuals: true }

});

//todoList.statics.dateFormatter();





    //Name of the DB in mongo + the name of the schema.
module.exports = model(`todo's`, todoList);


