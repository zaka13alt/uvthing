(function () {
    var _href = self.location.href;
    // If running inside a proxied worker, self.location is the proxied URL
    var _svc = _href.indexOf('/u22/service/');
    var _base = _svc !== -1 ? _href.slice(0, _svc) + '/' : new URL('./', _href).href;
    self.__u22$config = {
        prefix: new URL('u22/service/', _base).pathname,
        encodeUrl: Ultraviolet.codec.xor.encode,
        decodeUrl: Ultraviolet.codec.xor.decode,
        handler: new URL('uv.handler.js', _base).href,
        client:  new URL('uv.client.js',  _base).href,
        bundle:  new URL('uv.bundle.js',  _base).href,
        config:  new URL('uv.config.js',  _base).href,
        sw:      new URL('uv.sw.js',         _base).href,
        theBadKeywords: ["pornhub","xvideos","xnxx","xhamster","redtube","youporn","tube8","spankbang","eporner","tnaflix","txxx","pornone","beeg","4tube","drtuber","brazzers","naughtyamerica","realitykings","bangbros","mofos","babes.com","onlyfans","fansly","chaturbate","livejasmin","myfreecams","cam4","stripchat","bongacams","streamate","jerkmate","camsoda","sexier","imlive","porn","xxx","hentai","nsfw","nude","nudes","naked","erotic","fetish","milf","camgirl","sexcam","liveshow","escort","callgirl"],
    };
})();
