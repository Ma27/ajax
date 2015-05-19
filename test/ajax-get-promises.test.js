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

  describe( '#AJAX - Test `get` promises interface', function() {
    var getRequest = ajax.get();

    it( 'Should `get` method return `done` method', function() {
      getRequest.should.have.property( 'done' );
    });

    it( 'Should `get` method return `error` method', function() {
      getRequest.should.have.property( 'error' );
    });

    it( 'Should `get` method return `always` method', function() {
      getRequest.should.have.property( 'always' );
    });
  });
});