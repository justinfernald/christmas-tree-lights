const ws281x = require('rpi-ws281x-native');

const NUM_LEDS = 500;

const channel = ws281x(NUM_LEDS, {
  stripType: ws281x.stripType.WS2811_RGB,
  brightness: 255 * 0.1,
});

// ---- trap the SIGINT and reset before exit
process.on('SIGINT', function () {
  ws281x.reset();
  ws281x.finalize();

  process.nextTick(function () {
    process.exit(0);
  });
});

// ---- animation-loop
let offset = 0;
setInterval(function () {
  for (let i = 0; i < NUM_LEDS; i++) {
    channel.array[i] = colorwheel((offset + i) % 256);
  }

  offset = (offset + 3) % 256;
  ws281x.render();
}, 1000 / 30);

console.log('Press <ctrl>+C to exit.');

// rainbow-colors, taken from http://goo.gl/Cs3H0v
function colorwheel(pos: number) {
  pos = 255 - pos;

  if (pos < 85) {
    return rgb2Int(255 - pos * 3, 0, pos * 3);
  } else if (pos < 170) {
    pos -= 85;
    return rgb2Int(0, pos * 3, 255 - pos * 3);
  } else {
    pos -= 170;
    return rgb2Int(pos * 3, 255 - pos * 3, 0);
  }
}

function rgb2Int(r: number, g: number, b: number) {
  return ((r & 0xff) << 16) | ((g & 0xff) << 8) | (b & 0xff);
}
