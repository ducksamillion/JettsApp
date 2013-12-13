/// <reference path="../js/jquery-1.10.2.min.js"; />
/// <reference path="../js/knockout-3.0.0.js"; />

(function() {

    var products = ["Valley View", "St Morris", "St Marys", "Kidman Park", "Newton"];
	
    var productsCustom = [
        { Name: products[0], Location: "901 Grand Junction Rd, Valley View SA 5093", Image: "content/images/0.png" },
        { Name: products[1], Location: "Ground Floor, 427 Magill Rd, St Morris SA 5068", Image: "content/images/0.png" },
        { Name: products[2], Location: "Tenancy 3/1223-1231 S Rd, St Marys SA 5042", Image: "content/images/0.png" },
        { Name: products[3], Location: "308-320 Grange Rd, Kidman Park SA 5025", Image: "content/images/0.png" },
        { Name: products[4], Location: "299 Montacute Rd, Newton SA 5074", Image: "content/images/0.png" },
    ];
    var gallery = [
		{ src: "content/images/gallery/0.jpg" },
		{ src: "content/images/gallery/1.jpg" },
		{ src: "content/images/gallery/2.jpg" },
    ];
    JettsApp.db = {
        products: new DevExpress.data.ArrayStore(products),
        productsCustom: new DevExpress.data.ArrayStore(productsCustom),
        gallery: new DevExpress.data.ArrayStore(gallery),
    };
})();