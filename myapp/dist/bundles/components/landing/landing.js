/*components/landing/landing*/
define("components/landing/landing",[],function(){can.getObject("SOA.CM.Landing",window,!0),SOA.CM.Landing=can.Control.extend({init:function(n,t){n.html(can.view("components/landing/landing.ejs",{}))},"ul li click":function(n,t){switch(n.data().target){case"signup":System["import"]("components/signup/").then(function(){new SOA.CM.SignUp(".content")});break;case"login":System["import"]("components/login/").then(function(){new SOA.CM.Login(".content")});break;case"testclient":System["import"]("components/testclient/").then(function(){new SOA.CM.TestClient(".content")})}}}),console.log("Landing Page with Toggle as a dependency")});
//# sourceMappingURL=landing.js.map