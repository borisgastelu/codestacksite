import express from 'express';
import stylus from 'stylus';

module.exports = (app, config) => {

    const ROOT_PATH = config.rootPath;
    let compile = (str, path) => stylus(str).set('filename', path);

    app.set('views', ROOT_PATH + '/server/views');
    app.set('view engine', 'jade');

    app.use(stylus.middleware(
        {
            src: ROOT_PATH + '/public',
            compile: compile
        }
    ));
    app.use(express.static(ROOT_PATH + '/public'))

}
