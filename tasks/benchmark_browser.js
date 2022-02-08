
/* IMPORT */

const {default: toHex} = require ( '../dist/browser' );
const benchmark = require ( 'benchloop' );

/* HELPERS */

const encoder = new TextEncoder ();
const short = encoder.encode ( 'Hello, world!' );
const long = encoder.encode ( 'Hello, world!'.repeat ( 1000 ) );
const huge = encoder.encode ( 'Hello, world!'.repeat ( 1000000 ) );

/* MAIN */

benchmark.defaultOptions = Object.assign ( benchmark.defaultOptions, {
  iterations: 10,
  log: 'compact'
});

benchmark ({
  name: 'short',
  fn: () => {
    toHex ( short );
  }
});

benchmark ({
  name: 'long',
  fn: () => {
    toHex ( long );
  }
});

benchmark ({
  name: 'huge',
  fn: () => {
    toHex ( huge );
  }
});

benchmark.summary ();
