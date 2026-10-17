const path = require('node:path');
const express = require('express');
const ejs = require('ejs');
const mainRouter = require('./router/main');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', ejs.renderFile);

app.use(express.static(path.join(__dirname, 'public')));
app.use('/', mainRouter);

// 404 처리
app.use((req, res) => {
	res.status(404).send('404 Not Found');
});

// 기본 에러 핸들러 (인자가 4개여야 Express가 에러 핸들러로 인식)
app.use((err, req, res, next) => {
	console.error(err);
	if (res.headersSent) {
		return next(err);
	}
	res.status(err.status || 500).send('500 Internal Server Error');
});

module.exports = app;
