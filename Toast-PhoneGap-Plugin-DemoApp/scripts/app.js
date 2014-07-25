(function (global) {
    var app = global.app = global.app || {};

    document.addEventListener('deviceready', function () {
        navigator.splashscreen.hide();

        app.changeSkin = function (e) {
            var mobileSkin = "";

            if (e.sender.element.text() === "Flat") {
                e.sender.element.text("Native");
                mobileSkin = "flat";
            } else {
                e.sender.element.text("Flat");
                mobileSkin = "";
            }

            app.application.skin(mobileSkin);
        };

		app.loadCDVTests = function (e) {
            if (window.navigator.simulator === true) {
                alert('Tests are not available in the simulator.');
            } else {
                // let's see if the test plugin is included            
                $.get("cdvtests/index.html")
                    .success(function(result) {
                        navigator.notification.alert(
                            "This plugin defines Cordova tests which run in a fullscreen window.\n\nPress the back button to navigate back to the demo app.",
                            // page doesn't load on WP if it contains a '?' or '&'
                            function () {
		                        localStorage.setItem('cdvtests-mode', 'auto');
                                document.location = "cdvtests/index.html" + (device.platform == "Win32NT" ? "" : "?showBack=1")
                            },
                            "Cordova Tests",
                            "Got it!");
                    })
                    .error(function(result){
                        alert('Tests could not be loaded. Maybe you are running in AppBuilder Companion app which currently does not support running tests.');
                    });
            }
        };

        app.application = new kendo.mobile.Application(document.body, { layout: "tabstrip-layout" });
    }, false);
})(window);