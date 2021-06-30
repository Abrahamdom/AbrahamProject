// @ts-nocheck
sap.ui.define([
        "sap/ui/core/mvc/Controller",
        "sap/ui/core/routing/History",
        "sap/m/MessageBox"
        
	],
	/**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
	function (Controller, History, MessageBox) {
		"use strict";

        function onInit(){};

        function onBack(oEvent){
                        
            MessageBox.confirm(this.getView().getModel("i18n").getResourceBundle().getText("cancelMessageBox"),{
                onClose: function(oAction){
                    if(oAction === "OK"){
                        var oHistory = History.getInstance();
                        var sPreviousHash = oHistory.getPreviousHash();
                        if(sPreviousHash !== undefined){
                            window.history.go(-1);
                        }else{
                            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                            oRouter.navTo("RouteMain",{},true);
                        };
                    }

                }.bind(this)
            });           
        };

        var CreateEmployee = Controller.extend("abrahamgroup.Employees.controller.App", {});

        CreateEmployee.prototype.onInit = onInit;
        CreateEmployee.prototype.onBack = onBack;

        return CreateEmployee;        
	});