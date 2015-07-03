var mongoose = require('mongoose');

var RaiderSchema = new mongoose.Schema({
	name: String
});

mongoose.model("Raider", RaiderSchema);