const dns = require("node:dns/promises");

async function testDNS() {
  try {
    const result = await dns.resolveSrv(
      "_mongodb._tcp.portfolio.h6tdir6.mongodb.net"
    );
    console.log(result);
  } catch (err) {
    console.error(err);
  }
}

testDNS();