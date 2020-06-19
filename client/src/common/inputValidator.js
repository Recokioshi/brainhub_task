"use strict";
exports.__esModule = true;
exports.emailAdressIsValidIfExists = function (email) {
    // eslint-disable-next-line no-useless-escape
    var emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return !email || emailRegex.test(String(email).toLowerCase());
};
exports.allMandatoryFieldsAreFilled = function (req) {
    return !!req && !!req.name && !!req.surname && !!req.email && !!req.eventDate;
};
exports.isValidDateIfExists = function (date) { return !date || (date.getTime && !!date.getTime()); };
exports.getValidationErrors = function (req) {
    var errors = [];
    if (!exports.allMandatoryFieldsAreFilled(req)) {
        errors.push('Some mandatory fields are missing');
    }
    if (!exports.emailAdressIsValidIfExists(req.email)) {
        errors.push('Format of the email address is invalid');
    }
    if (!exports.isValidDateIfExists(req.eventDate)) {
        errors.push('Event Date is invalid');
    }
    return errors;
};
