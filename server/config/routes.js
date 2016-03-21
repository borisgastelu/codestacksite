'use strict';

module.exports = function (app) {

    app.get('/partials/*', function (req, res) {
        return res.render('../../public/app/' + req.params[0]);
    });

    app.get('*', function (req, res) {
        return res.render('index');
    });
};