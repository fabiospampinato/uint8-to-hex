
/* MAIN */

const toHex = ( buffer: Uint8Array ): string => {

  return Buffer.from ( buffer ).toString ( 'hex' );

};

/* EXPORT */

export default toHex;
