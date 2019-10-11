sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"../utils/Account"
], function (Controller, Account) {
	"use strict";

	return Controller.extend("my.ui5app.controller.Main", {

		onInit: function(){
			this.oAccount = new Account();
		},

		onPressDeposit: function(){
			let iDepositValue = parseInt(this.byId("depositInput").getValue()); 
			this.oAccount.deposit(iDepositValue);
			this.refreshAmount();
		},

		onPressPay: function(){
			let iPayValue = parseInt(this.byId("payInput").getValue()); 
			this.oAccount.pay(iPayValue);
			this.refreshAmount();
		},

		refreshAmount(){
			this.byId("amountTitle").setText(this.oAccount.getAmount());
		}
	});
});