
/* IMPORT */

import Hex from 'hex-encoding';

/* MAIN */

const toHex = ( uint8: Uint8Array ): string => {

  return Hex.encode ( uint8 );

};

/* EXPORT */

export default toHex;
