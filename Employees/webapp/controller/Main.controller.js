sap.ui.define([
		"sap/ui/core/mvc/Controller"
	],
	/**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
	function (Controller) {
		"use strict";

        //Función ciclo de vida de las aplicaciones SAPUI5
        function onInit(){};
        
        //Función de navegación para ir de la vista Main a la vista CreateEmployee
        function toCreateEmployee(){
            var oRoute = sap.ui.core.UIComponent.getRouterFor(this);
            oRoute.navTo("RouteCreateEmployee");
        };
        
        
        var Main = Controller.extend("abrahamgroup.Employees.controller.Main", {});

        Main.prototype.onInit = onInit;
        Main.prototype.toCreateEmployee = toCreateEmployee;

        return Main

	});