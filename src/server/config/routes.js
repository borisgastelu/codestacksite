module.exports = (app) => {

    app.get('/partials/*',
        (req, res) => res.render('../../public/app/' + req.params[0])
    );

    app.get('*', (req, res) => res.render('index') );
    
}
