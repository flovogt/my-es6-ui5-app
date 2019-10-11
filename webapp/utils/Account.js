sap.ui.define(["./Base"], function(Base) {

	return class Bar extends Base {
		#amount = 0;
		getAmount(){
			return this.#amount;
		}
		getTransformedAmount(){
			return this.#getModulo(2);
		}
		deposit(iAmount){
			this.#amount+=iAmount;
		}
		pay(iAmount){
			this.#amount-=iAmount;
		}
		#getModulo = (iBase) => {
			return this.#amount % iBase; 
		};
	};

});