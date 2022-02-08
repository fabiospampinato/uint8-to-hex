
/* MAIN */

const toHex = (() => {

  const alphabet = '0123456789abcdef';
  const lookup = new Array ( 256 );

  for  ( let i = 0; i < 256; i++ ) {

    lookup[i] = `${alphabet[(i >>> 4) & 0xF]}${alphabet[i & 0xF]}`;

  }

  return ( buffer: Uint8Array ): string => {

    let hex = '';

    for ( let i = 0, l = buffer.length; i < l; i++ ) {

      hex += lookup[buffer[i]];

    }

    return hex;

  };

})();

/* EXPORT */

export default toHex;
