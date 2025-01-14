"use strict";
var tslib_1 = require("tslib");
var axios_1 = (0, tslib_1.__importDefault)(require("axios"));
/** Class representing a BestListWrapper. */
var BestListWrapper = /** @class */ (function () {
    function BestListWrapper() {
    }
    BestListWrapper.prototype.setToken = function (token) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            return (0, tslib_1.__generator)(this, function (_a) {
                this.token = token;
                axios_1.default.get('https://bestlist.online/api/bots/', {
                    headers: { Authorization: this.token }
                }).then(function (res) {
                    if (res.status != 200) {
                        throw new Error('Invalid token, set a token with: <client>.setToken(\"bestlist token here\")');
                    }
                    else {
                        return true;
                    }
                }).catch(function (e) {
                    throw new Error('Invalid token, set a token with: <client>.setToken(\"bestlist token here\")');
                });
                return [2 /*return*/];
            });
        });
    };
    /**
    * Get a botlist bot.
    * @exports client/getBot
    * @async
    * @method
    * @param {String} id - Bot id
    * @returns {Bot} The bot object
    */
    BestListWrapper.prototype.getBot = function (botId) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            return (0, tslib_1.__generator)(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.token) {
                            throw new Error("No token set, set a token with: <client>.setToken(\"bestlist token here\")");
                        }
                        return [4 /*yield*/, axios_1.default.get("https://bestlist.online/api/bots/".concat(botId), {
                                headers: { Authorization: this.token }
                            }).then(function (res) { return res.data; })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
    * Get a botlist user.
    * @exports client/getUser
    * @async
    * @method
    * @param {String} id - User id
    * @returns {User} The user object
    */
    BestListWrapper.prototype.getUser = function (userId) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            return (0, tslib_1.__generator)(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.token) {
                            throw new Error("No token set, set a token with: <client>.setToken(\"bestlist token here\")");
                        }
                        return [4 /*yield*/, axios_1.default.get("https://bestlist.online/api/users/".concat(userId), {
                                headers: { Authorization: this.token }
                            }).then(function (res) { return res.data; })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
    * Get if the user has already voted for a bot today.
    * @exports client/getUserVoted
    * @async
    * @method
    * @param {String} id - User id
    * @returns {User} The user object
    */
    BestListWrapper.prototype.getUserVoted = function (userId) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            return (0, tslib_1.__generator)(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.token) {
                            throw new Error("No token set, set a token with: <client>.setToken(\"bestlist token here\")");
                        }
                        return [4 /*yield*/, axios_1.default.get("https://bestlist.online/api/users/voted/".concat(userId), {
                                headers: { Authorization: this.token }
                            }).then(function (res) { return res.data; })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
    * Get if the user has already reviewed for a bot today.
    * @exports client/getUserReviewed
    * @async
    * @method
    * @param {String} id - User id
    * @returns {User} The user object
    */
    BestListWrapper.prototype.getUserReviewed = function (userId) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            return (0, tslib_1.__generator)(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.token) {
                            throw new Error("No token set, set a token with: <client>.setToken(\"bestlist token here\")");
                        }
                        return [4 /*yield*/, axios_1.default.get("https://bestlist.online/api/users/reviewed/".concat(userId), {
                                headers: { Authorization: this.token }
                            }).then(function (res) { return res.data; })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return BestListWrapper;
}());
module.exports = BestListWrapper;
