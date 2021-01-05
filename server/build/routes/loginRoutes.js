"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = require("express");
function requireAuth(req, res, next) {
    if (req.session && req.session.loggedIn) {
        next();
        return;
    }
    res.status(403);
    res.send('Not Permitted');
}
var router = express_1.Router();
exports.router = router;
router.get('/', function (req, res) {
    console.log('you are here!');
    if (req.session && req.session.loggedIn) {
        res.send("\n    <div>You are logged in</div>\n    <a href=\"/logout\">Logout</a>\n    ");
    }
    else {
        res.send("\n    <div>You are not logged in</div>\n    <a href=\"/login\">Login</a>\n    ");
    }
});
router.get('/logout', function (req, res) {
    req.session = undefined;
    res.redirect('/');
});
router.get('/protected', requireAuth, function (req, res) {
    res.send('Welcome to protected route, login user');
});
