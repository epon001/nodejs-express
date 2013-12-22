exports.info = function(req, res){
	var obj = {
			"server name": "Satumn",
    		"time": new Date().toISOString(),
    		"Counter": "22"
		};
    res.send(obj);
};

