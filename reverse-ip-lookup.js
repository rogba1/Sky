var dns = require('dns');

function reverseLookup(ip) {
	dns.reverse(ip,function(err,domains){
		if(err!=null)	callback(err);

		domains.forEach(function(domain){
			dns.lookup(domain,function(err, address, family){
				console.log(domain,'[',address,']');
				console.log('reverse:',ip==address);
			});
		});
	});
}

reverseLookup('213.46.228.196');