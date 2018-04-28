var orm = require('../config/orm.js');

// export code that will call ORM functions using burger specific input for ORM
var burger =  {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(r) {
            // console.log(res)
            cb(r)
        });
    },
    insertOne: function(cols, vals, cb) {
        orm.insertOne("burgers", cols, vals, function(r) {
            // console.log(res)
            cb(r)
        });
    },
    updateOne: function(objColVals, id, cb) {
        orm.updateOne("burgers", objColVals, id, function(r) {
            console.log(id)
            // console.log(r)
            cb(r)
        });
    }
};

module.exports = burger;