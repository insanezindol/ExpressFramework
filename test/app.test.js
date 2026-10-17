const { test } = require('node:test');
const assert = require('node:assert/strict');
const request = require('supertest');
const app = require('../app');

test('GET / 는 메인 페이지를 렌더링한다', async () => {
	const res = await request(app).get('/');
	assert.equal(res.status, 200);
	assert.match(res.text, /this is index page/);
});

test('GET /about 은 소개 페이지를 렌더링한다', async () => {
	const res = await request(app).get('/about');
	assert.equal(res.status, 200);
	assert.match(res.text, /About/);
});

test('GET /css/style.css 는 정적 파일을 반환한다', async () => {
	const res = await request(app).get('/css/style.css');
	assert.equal(res.status, 200);
	assert.match(res.headers['content-type'], /text\/css/);
});

test('존재하지 않는 경로는 404를 반환한다', async () => {
	const res = await request(app).get('/does-not-exist');
	assert.equal(res.status, 404);
});
