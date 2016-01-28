(function (global) {
    var DemoViewModel,
        app = global.app = global.app || {};

    DemoViewModel = kendo.data.ObservableObject.extend({

        // short lasting messages
        showToast_shortTop: function () {
            if (!this.checkSimulator()) {
	            window.plugins.toast.showShortTop('This talk is boring', this.onSuccess, this.onError);
            }
        },
        
        showToast_shortCenter: function () {
            if (!this.checkSimulator()) {
	            window.plugins.toast.showShortCenter('Yeah is there another room?', this.onSuccess, this.onError);
            }
        },

        showToast_shortBottom: function () {
            if (!this.checkSimulator()) {
	            window.plugins.toast.showShortBottom('I\'m staying, this guy is awesome!', this.onSuccess, this.onError);
            }
        },

        // longer lasting messages
        showToast_longTop: function () {
            if (!this.checkSimulator()) {
	            window.plugins.toast.showLongTop('Booooooooooring! Boring boring boring', this.onSuccess, this.onError);
            }
        },
        
        showToast_longCenter: function () {
            if (!this.checkSimulator()) {
	            window.plugins.toast.showLongCenter('Yeah - let\'s grab some coffee', this.onSuccess, this.onError);
            }
        },

        showToast_longBottom: function () {
            if (!this.checkSimulator()) {
                window.plugins.toast.showLongBottom('I apologize for my fellow Toasts', this.onSuccess, this.onError);
            }
        },

        showToast_smallGreen: function () {
            if (!this.checkSimulator()) {
              	window.plugins.toast.showWithOptions(
                  {
                    message: 'Small green opaque',
                    duration: 'long',
                    position: 'bottom',
                    styling: {
                      backgroundColor: '#4B946A',
                      cornerRadius: 10,
                      opacity: 1.0,
                      horizontalPadding: 12,
                      verticalPadding: 6
                    }
                  },
                  this.onSuccess,
                  this.onError
            )}
        },

        showToast_largeRed: function () {
            if (!this.checkSimulator()) {
              	window.plugins.toast.showWithOptions(
                  {
                    message: 'Red with lots of padding',
                    duration: 'long',
                    position: 'bottom',
                    styling: {
                      backgroundColor: '#FF0000',
                      cornerRadius: 6,
                      opacity: 0.75,
                      horizontalPadding: 40,
                      verticalPadding: 40
                    }
                  },
                  this.onSuccess,
                  this.onError
            )}
        },

        showToast_longBottomMin40px: function () {
            if (!this.checkSimulator()) {
              	window.plugins.toast.showWithOptions(
                  {
                    message: "I'm positioned a bit higher",
                    duration: "long",
                    position: "bottom",
                    addPixelsY: -40
                  },
                  this.onSuccess,
                  this.onError
            )}
        },

        showToast_longBottomPlus30px: function () {
            if (!this.checkSimulator()) {
              	window.plugins.toast.showWithOptions(
                  {
                    message: "I'm positioned a bit lower",
                    duration: "long",
                    position: "bottom",
                    addPixelsY: 30
                  },
                  this.onSuccess,
                  this.onError
            )}
        },

        hideToast: function () {
            if (!this.checkSimulator()) {
                window.plugins.toast.hide(this.onSuccess, this.onError);
            }
        },

        checkSimulator: function() {
            if (window.navigator.simulator === true) {
                alert('This plugin is not available in the simulator.');
                return true;
            } else if (window.plugins.toast === undefined) {
                alert('Plugin not found. Maybe you are running in AppBuilder Companion app which currently does not support this plugin.');
                return true;
            } else {
                return false;
            }
        },

        // callbacks
        onSuccess: function(msg) {
            console.log('Toast shown: ' + msg);
        },

        onError: function(msg) {
            alert('Toast error: ' + msg);
        }
    });

    app.demoService = {
        viewModel: new DemoViewModel()
    };
})(window);