var Kran = require("../kran.js");

console.log(Kran);

var kran = new Kran();

var c1 = kran.component("c1");
var c2 = kran.component("c2");
var c3 = kran.component("c3");

var s1 = kran.system({
    components:[c1,c2],
    arrival:function(c1,c2){
        console.log("Arrived",c1,c2);
    },
    removal:function(c1,c2){
        console.log("Removed",c1,c2);
    }
});

var e = kran.entity().add(c1,"Hello").add(c2,"World");
e.remove(c2);




