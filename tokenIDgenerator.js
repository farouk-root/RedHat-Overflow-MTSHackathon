'use strict';
exports.TokenID = function() {
    let rand = function () {
        return Math.random().toString(36).substr(2); // remove `0.`
    };

    let token = function () {
        return rand() + rand(); // to make it longer
    };

    console.log(token());
};
