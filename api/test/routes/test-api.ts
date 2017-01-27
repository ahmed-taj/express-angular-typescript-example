import test from 'ava';
import * as request from 'supertest';
import { app } from '../../app';

test.cb('GET /api ', t => {
    request(app)
        .get('/api')
        .expect(200)
        .end(function (err, res) {
            t.falsy(err);
            t.end();
        });
});
