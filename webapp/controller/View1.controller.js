sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap.ushell.Container.DirtyState",
	
	"sap/ushell/services/Container"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller,DirtyState,Container) {
		"use strict";

		return Controller.extend("dirtyflag.controller.View1", {
			onInit: function () {

			},

			onCheck:function(){
				debugger;
				var bFlag = true;
				sap.ushell.Container.setDirtyFlag(bFlag);
			}
		});
	});
