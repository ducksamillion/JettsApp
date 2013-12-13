(function() {
    var JettsApp = window.JettsApp = { };
    
    // Uncomment the line below to disable platform-specific look and feel and to use the Generic theme for all devices
    // DevExpress.devices.current({ platform: "generic" });

    $(function() {
        JettsApp.app = new DevExpress.framework.html.HtmlApplication({
            namespace: JettsApp,
            
            navigationType: "navbar",
            navigation: [
              {
                title: "Home",
                action: "#home",
                icon: "home"
              },
              {
                title: "Traffic",
                action: "#traffic",
                icon: "info"
              },
              {
                title: "Observe",
                action: "#observe",
                icon: "info"
              }
            ]
        });
        
        JettsApp.app.router.register(":view", { view: "home" });
        JettsApp.app.navigate();
    });
	
	JettsApp.observe = function(params) {
	    return {
			data: JettsApp.db.gallery
		};
	};
	
	JettsApp.home = function (params) {
		function handleItemClick(e) {
			JettsApp.app.navigate("traffic");
		};

		return {
            dataSource: new DevExpress.data.DataSource({ store: JettsApp.db.productsCustom }),
			handleItemClick: handleItemClick,

			viewShown: function() {
				$(".dx-active-view .dx-scrollable").data("dxScrollView").scrollTo(0);
			}
		};
	};
})();