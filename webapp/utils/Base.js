sap.ui.define([], function() {

	return class Base {
		constructor(prop) {
			this.prop = prop;
		}
		static staticMethod() {
			return 'static';
		}
		prototypeMethod() {
			return 'prototype:' + this.prop;
		}
	};

});