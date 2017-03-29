/**
 * Created by RomanBrix on 3/29/17.
 */
//Write a JavaScript function to parse an URL.

function parse_URL(url) {
    var parse = document.createElement('a');
    parse.href = url;
    return {
        source: url,
        protocol: parse.protocol.replace(':', ''),
        host: parse.hostname,
        port: parse.port,
        query: parse.search,
        params: (function () {
            var ret = {},
                seg = parse.search.replace(/^\?/, '').split('&'),
                len = seg.length,
                i = 0,
                s;
            for (; i < len; i++) {
                if (!seg[i]) {
                    continue;
                }
                s = seg[i].split('=');
                ret[s[0]] = s[1];
            }
            return ret;
        })(),
        file: (parse.pathname.match(/\/([^\/?#]+)$/i) || [, ''])[1],
        hash: parse.hash.replace('#', ''),
        path: parse.pathname.replace(/^([^\/])/, '/$1'),
        relative: (parse.href.match(/tps?:\/\/[^\/]+(.+)/) || [, ''])[1],
        segments: parse.pathname.replace(/^\//, '').split('/')
    };
}

console.log(parse_URL('https://github.com/pubnub/python/search?utf8=%E2%9C%93&q=python'));  