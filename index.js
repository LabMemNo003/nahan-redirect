'use strict';

module.exports = Redirect;

function Redirect(path, status = 302) {

    if (![301, 302].includes(status))
        throw new Error('Invalid response status code.');

    return async (ctx, next) => {
        ctx.res.statusCode = status;
        ctx.res.setHeader('Location', path);
        ctx.res.end();
    };
}
