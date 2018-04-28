var connection = require('./connection.js')

function printQuestionMarks(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push("?");
    }
    return arr.toString();
}

function objToSql(ob) {
    var arr = [];
    for (var key in ob) {
        var value = ob[key];
        arr.push(key + " : " + value);
    }
    return arr.toString();
}

var orm = {
    // Shows all the items in the database
    selectAll: function (tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        // database query
        connection.query(queryString, function (e, r) {
            if (e) throw e;
            cb(r)
        });
    },

    // Inserts and sets value for single table entry
    insertOne: function (table, cols, vals, cb) {
        var queryString = "INSERT INTO " + table + "( " + cols.toString() + ") VALUES (" + printQuestionMarks(vals.length) + ") "
        // console.log(queryString)

        // database query
        connection.query(queryString, vals, function (e, r) {
            if (e) throw e;
            cb(r)
        });
    },

    // Updates item that is clicked, to devoured
    updateOne: function (table, objColVals, id, cb) {

        var q = 'UPDATE ' + table + ' SET ? WHERE id=?'
        // console.log(queryString)
        connection.query(q, [objColVals, id], function (e, r) {
            if (e) throw e;
            cb(r)
        });
    }
};

module.exports = orm