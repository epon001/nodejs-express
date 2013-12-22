var vcard = [];
var calledTime = 0;

exports.info = function(req, res){
	var obj = {
			"server name": "Satumn",
    		"time": new Date().toISOString(),
    		"counter": ""
		};
		calledTime++;
		obj.counter = calledTime;
    res.send(obj);
};



exports.create = function(req, res){
	var person = {
		nickname: "",
		name: "",
		tel: ""
	};
	console.log(">> Create");
	person.nickname = req.params.nickname;
	person.name = req.query.name;
	person.tel = req.query.tel;
	vcard.push(person);
    res.end();
};

exports.read = function(req, res){
	console.log(">> Read");
    res.send(vcard);
};

exports.update = function(req, res){
	var nickname = req.params.nickname;

	console.log(">> Update");

	vcard.forEach( function (entry) {
		if (entry.nickname == nickname) {
			console.log("Found");
			entry.name = req.query.name;
			entry.tel = req.query.tel;
		};
	});
    res.end();
};

exports.delete = function(req, res){
	console.log(">> Delete");
	vcard = [];
    res.end();
};

