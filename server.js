const a0_0x4507b4 = a0_0x10c6;
(function(_0x2f6e32, _0x5e7e4d) {
    const _0x4e9e9d = a0_0x10c6,
        _0x224144 = _0x2f6e32();
    while (!![]) {
        try {
            const _0x46b34a = parseInt(_0x4e9e9d(0x16b)) / 0x1 + -parseInt(_0x4e9e9d(0x166)) / 0x2 + -parseInt(_0x4e9e9d(0x172)) / 0x3 + -parseInt(_0x4e9e9d(0x173)) / 0x4 + -parseInt(_0x4e9e9d(0x175)) / 0x5 * (-parseInt(_0x4e9e9d(0x17e)) / 0x6) + parseInt(_0x4e9e9d(0x18d)) / 0x7 + parseInt(_0x4e9e9d(0x15d)) / 0x8;
            if (_0x46b34a === _0x5e7e4d) break;
            else _0x224144['push'](_0x224144['shift']());
        } catch (_0x475fa8) {
            _0x224144['push'](_0x224144['shift']());
        }
    }
}(a0_0x1540, 0x19075));
const express = require(a0_0x4507b4(0x16d)),
    bodyParser = require('body-parser'),
    bunyan = require(a0_0x4507b4(0x18f)),
    {
        join: joinPaths
    } = require(a0_0x4507b4(0x178)),
    
    passport = require('passport'),
    {
        BasicStrategy
    } = require(a0_0x4507b4(0x16c)),
    log = bunyan[a0_0x4507b4(0x18b)]({
        'name': a0_0x4507b4(0x15f),
        'serializers': bunyan[a0_0x4507b4(0x177)]
    });
class Database extends Map {
    ['set'](_0x27fc28, _0x2d6296) {
        const _0x356117 = a0_0x4507b4;
        return typeof _0x2d6296 === _0x356117(0x168) && (_0x2d6296 = _0x2d6296[_0x356117(0x169)](0x0, 0x10)), super[_0x356117(0x17a)](_0x27fc28, _0x2d6296);
    }
}
const db = new Database();

function populate() {
    const _0x10da35 = a0_0x4507b4,
        _0x46fc2f = [{
            'id': _0x10da35(0x17f),
            'firstName': 'Francis',
            'lastName': 'Berrocal',
            'vacancyTitle': _0x10da35(0x152),
            'matchingScore': 0x36
        }, {
            'id': _0x10da35(0x189),
            'firstName': 'Olga',
            'lastName': _0x10da35(0x188),
            'vacancyTitle': _0x10da35(0x192),
            'matchingScore': 0x43
        }, {
            'id': _0x10da35(0x186),
            'firstName': _0x10da35(0x14c),
            'lastName': _0x10da35(0x183),
            'vacancyTitle': _0x10da35(0x15c),
            'matchingScore': 0x3d
        }, {
            'id': _0x10da35(0x164),
            'firstName': _0x10da35(0x185),
            'lastName': _0x10da35(0x180),
            'vacancyTitle': _0x10da35(0x14e),
            'matchingScore': 0x62
        }, {
            'id': _0x10da35(0x16f),
            'firstName': _0x10da35(0x156),
            'lastName': _0x10da35(0x159),
            'vacancyTitle': 'MC',
            'matchingScore': 0x62
        }];
    for (const _0x263fd3 of _0x46fc2f) {
        db[_0x10da35(0x17a)](_0x263fd3['id'], _0x263fd3);
    }
}
populate();

function a0_0x1540() {
    const _0x24b78a = ['candidates-api', 'put', 'values', 'install', 'status', '444444', 'params', '173586ihcnfv', 'password', 'string', 'substr', 'delete', '95824iyIMml', 'passport-http', 'express', 'listen', '555555', 'use', 'express-openapi-validator', '533784ZVeZpu', '576860LIpDJY', 'body', '2835AMYgmY', 'Cannot\x20set\x20an\x20ID\x20when\x20creating\x20a\x20candidate', 'stdSerializers', 'path', 'iloveqa', 'set', 'get', '/candidates/:id', 'authenticate', '1638DGPlQg', '111111', 'De\x20Lange', '/candidates/', 'error', 'Szabo', 'random', 'Sarah', '333333', 'assign', 'Grytsenko', '222222', 'tester', 'createLogger', 'json', '1298626DdJgYv', 'basic', 'bunyan-sfdx-no-dtrace', '\x22\x20not\x20found', 'Cannot\x20start\x20server.\x20:(', 'QA\x20Engineer', 'sendStatus', 'Robert', 'toString', 'Release\x20Worker', 'Cannot\x20start\x20server.\x20Something\x20is\x20already\x20running\x20on\x20port\x20http://localhost:', 'Candidate\x20with\x20ID:\x20\x22', 'length', 'Software\x20Engineer', 'api.yml', 'message', 'EADDRINUSE', 'Carlos', 'code', 'Harver\x20Candidate\x20API\x20now\x20running\x20on\x20', 'Benitez', 'info', 'from', 'Product\x20Owner', '602560nKaHJz', '/candidates'];
    a0_0x1540 = function() {
        return _0x24b78a;
    };
    return a0_0x1540();
}

function a0_0x10c6(_0x3b3ceb, _0x156ac7) {
    const _0x15406e = a0_0x1540();
    return a0_0x10c6 = function(_0x10c68a, _0xe4521b) {
        _0x10c68a = _0x10c68a - 0x14b;
        let _0x14ed7d = _0x15406e[_0x10c68a];
        return _0x14ed7d;
    }, a0_0x10c6(_0x3b3ceb, _0x156ac7);
}
const users = new Map();
users[a0_0x4507b4(0x17a)](a0_0x4507b4(0x18a), {
    'password': a0_0x4507b4(0x179),
    'role': 'user'
});
const generateId = () => Math[a0_0x4507b4(0x184)]()[a0_0x4507b4(0x14d)](0x24)['substr'](0x2, 0x9),
    makeError = (_0x17566f, _0x270694) => {
        const _0x35d00b = a0_0x4507b4,
            _0xaccbe7 = new Error(_0x270694);
        return _0xaccbe7[_0x35d00b(0x163)] = _0x17566f, _0xaccbe7;
    },
    app = express();
app[a0_0x4507b4(0x170)](bodyParser[a0_0x4507b4(0x18c)]()), app[a0_0x4507b4(0x170)](bodyParser['urlencoded']({
    'extended': ![]
})), app['use']((_0x73eb9a, _0x13736a, _0x37f755) => {
    const _0x135825 = a0_0x4507b4;
    log[_0x135825(0x15a)]({
        'req': _0x73eb9a
    }), _0x37f755();
}),  passport[a0_0x4507b4(0x170)](new BasicStrategy((_0x4110d6, _0x357590, _0x514bbc) => {
    const _0x1276da = a0_0x4507b4,
        _0x20ebb2 = users[_0x1276da(0x17b)](_0x4110d6),
        _0x3031db = _0x20ebb2 && _0x20ebb2[_0x1276da(0x167)] === _0x357590 ? _0x20ebb2 : ![];
    return _0x514bbc(null, _0x3031db);
})), app[a0_0x4507b4(0x17b)](a0_0x4507b4(0x15e), (_0x736c8a, _0x384cd3) => {
    const _0x2e2a51 = a0_0x4507b4,
        _0x1b8336 = Array[_0x2e2a51(0x15b)](db[_0x2e2a51(0x161)]());
    _0x384cd3[_0x2e2a51(0x163)](0xc8)[_0x2e2a51(0x18c)](_0x1b8336['slice'](0x1, _0x1b8336[_0x2e2a51(0x151)]));
}), app[a0_0x4507b4(0x17b)](a0_0x4507b4(0x17c), (_0x177693, _0x520e86, _0x34a364) => {
    const _0x42aa91 = a0_0x4507b4,
        {
            id: _0x5ceb91
        } = _0x177693[_0x42aa91(0x165)],
        _0x4b5092 = db[_0x42aa91(0x17b)](_0x5ceb91);
    if (!_0x4b5092) return _0x34a364(makeError(0x1f8, _0x42aa91(0x150) + _0x5ceb91 + _0x42aa91(0x190)));
    _0x520e86['status'](0xc8)[_0x42aa91(0x18c)](_0x4b5092);
}), app['post']('/candidates', passport[a0_0x4507b4(0x17d)](a0_0x4507b4(0x18e), {
    'session': ![]
}), (_0x20da30, _0x5c9667, _0x3edaa0) => {
    const _0x1e4b86 = a0_0x4507b4,
        _0x5dfcb7 = _0x20da30['body'];
    if (_0x5dfcb7['id']) return _0x3edaa0(makeError(0x190, _0x1e4b86(0x176)));
    Object[_0x1e4b86(0x187)](_0x5dfcb7, {
        'id': generateId()
    }), db[_0x1e4b86(0x17a)](_0x5dfcb7['id'], _0x5dfcb7), _0x5c9667[_0x1e4b86(0x17a)]('Location', _0x1e4b86(0x181) + _0x5dfcb7['id']), _0x5c9667['status'](0xc9)[_0x1e4b86(0x18c)](_0x5dfcb7);
}), app[a0_0x4507b4(0x160)](a0_0x4507b4(0x17c), passport[a0_0x4507b4(0x17d)](a0_0x4507b4(0x18e), {
    'session': ![]
}), (_0x986af0, _0x53fd46, _0x310993) => {
    const _0x4a6a48 = a0_0x4507b4,
        {
            id: _0x586c38
        } = _0x986af0[_0x4a6a48(0x165)],
        _0x29dcf9 = db['get'](_0x586c38);
    if (!_0x29dcf9) return _0x310993(makeError(0x194, 'Candidate\x20with\x20ID:\x20\x22' + _0x586c38 + _0x4a6a48(0x190)));
    const _0x3d885f = _0x986af0[_0x4a6a48(0x174)];
    db[_0x4a6a48(0x16a)](_0x586c38), db[_0x4a6a48(0x17a)](_0x3d885f['id'] || _0x586c38, _0x3d885f), _0x53fd46[_0x4a6a48(0x163)](0xc8)[_0x4a6a48(0x18c)](_0x3d885f);
}), app['patch'](a0_0x4507b4(0x17c), passport[a0_0x4507b4(0x17d)](a0_0x4507b4(0x18e), {
    'session': ![]
}), (_0x1f78f8, _0x2a3e74, _0x120550) => {
    const _0x26f2b7 = a0_0x4507b4,
        {
            id: _0x5a68b9
        } = _0x1f78f8[_0x26f2b7(0x165)],
        _0x22e6f6 = db[_0x26f2b7(0x17b)](_0x1f78f8[_0x26f2b7(0x165)]['id']);
    if (!_0x22e6f6) return _0x120550(makeError(0x194, 'Candidate\x20with\x20ID:\x20\x22' + _0x5a68b9 + _0x26f2b7(0x190)));
    const _0x1b1a09 = Object[_0x26f2b7(0x187)]({}, _0x22e6f6, _0x1f78f8['body']);
    _0x2a3e74[_0x26f2b7(0x163)](0xc8)['json'](_0x1b1a09);
}), app[a0_0x4507b4(0x16a)]('/candidates/:id', (_0x10a38, _0x78ba08, _0x210add) => {
    const _0x1a677f = a0_0x4507b4,
        {
            id: _0x40b020
        } = _0x10a38[_0x1a677f(0x165)];
    db['delete'](_0x40b020), _0x78ba08[_0x1a677f(0x14b)](0xcc);
}), app[a0_0x4507b4(0x170)]((_0x3f0c52, _0x31e46e, _0x3983af, _0x19b71b) => {
    const _0x567dd6 = a0_0x4507b4;
    log['warn']({
        'err': _0x3f0c52
    }), _0x3983af['status'](_0x3f0c52['status'] || 0x1f4)[_0x567dd6(0x18c)]({
        'status': _0x3f0c52['status'],
        'massage': _0x3f0c52[_0x567dd6(0x154)]
    });
});
const port = 0xbb8;
app[a0_0x4507b4(0x16e)](port, () => {
    const _0x2a2a9c = a0_0x4507b4;
    log[_0x2a2a9c(0x15a)](_0x2a2a9c(0x158) + port);
})['on'](a0_0x4507b4(0x182), _0x182693 => {
    const _0x2ef3d1 = a0_0x4507b4;
    _0x182693[_0x2ef3d1(0x157)] === _0x2ef3d1(0x155) ? (log[_0x2ef3d1(0x182)](_0x2ef3d1(0x14f) + port), process['exit'](0x1)) : log[_0x2ef3d1(0x182)]({
        'err': _0x182693
    }, _0x2ef3d1(0x191));
});
