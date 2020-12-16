//this code comes straight from the documents -- first example
//use OBS for the video portion
//in the docs there are lots of formats to access the live stream
//idea ones are HLS and DASH, but they require a lot of setup
//for ease, we will use http-flv (flash player)
//must install flv.js as a dependency, this is the actual video player

const NodeMediaServer = require("node-media-server");

const config = {
  rtmp: {
    port: 1935,
    chunk_size: 60000,
    gop_cache: true,
    ping: 30,
    ping_timeout: 60,
  },
  http: {
    port: 8000,
    allow_origin: "*",
  },
};

var nms = new NodeMediaServer(config);
nms.run();
