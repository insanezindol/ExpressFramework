const app = require('./app');

const port = process.env.PORT || 3000;

app.listen(port, (err) => {
	if (err) {
		console.error(err);
		process.exit(1);
	}
	console.log(`Express server has started on port ${port}`);
});
