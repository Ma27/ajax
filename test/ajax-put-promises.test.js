;(function ( root, factory ) {
  'use strict';
  /* istanbul ignore next */
  if ( typeof define === 'function' && define.amd ) {
    define([ 'chai.should', 'chai.expect', 'ajax' ], factory );
  }
  else if ( typeof exports === 'object' ) {
    exports = module.exports = factory(
      require( 'chai' ).should(),
      require( 'chai' ).expect,
      require( '../src/ajax' )
    );
  }
  else {
    root.testAjax = factory( root.chai.should(), root.chai.expect, root.ajax );
  }
})(this, function( should, expect, ajax ) {
  'use strict';

  describe( '#AJAX - Test `put` promises interface', function() {
    var putRequest = ajax.put();

    it( 'Should `put` method return `done` method', function() {
      putRequest.should.have.property( 'done' );
    });

    it( 'Should `put` method return `error` method', function() {
      putRequest.should.have.property( 'error' );
    });

    it( 'Should `put` method return `always` method', function() {
      putRequest.should.have.property( 'always' );
    });
  });
});