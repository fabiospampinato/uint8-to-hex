
/* IMPORT */

import fc from 'fast-check';
import {describe} from 'fava';
import toHex from '../dist/index.js';
import Fixtures from './fixtures.js';

/* MAIN */

describe ( 'Uint8 To Hex', it => {

  const encoder = new TextEncoder ();

  it ( 'works with Uint8Arrays', t => {

    for ( const fixture of Fixtures ) {

      const encoded = toHex ( encoder.encode ( fixture ) );
      const decoded = Buffer.from ( encoded, 'hex' ).toString ();

      t.true ( /^[a-f0-9]*$/.test ( encoded ) );
      t.is ( decoded, fixture );

    }

  });

  it ( 'works with fc-generated strings', t => {

    const assert = str => t.true ( Buffer.from ( toHex ( encoder.encode ( str ) ), 'hex' ).toString () === str );
    const property = fc.property ( fc.fullUnicodeString (), assert );

    fc.assert ( property, { numRuns: 1000000 } );

  });

});
