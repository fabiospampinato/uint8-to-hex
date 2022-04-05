
/* MAIN */

const Fixtures = [
  '',
  '\0',
  '\ufeff',
  '👪',
  'Hello, world!',
  new Array ( 55296 ).fill ( 0 ).map ( ( _, index ) => String.fromCharCode ( index ) ).join ( '' ),
  'huge'.repeat ( 1000000 )
];

/* EXPORT */

export default Fixtures;
