(function (global) {
    var DemoViewModel,
        app = global.app = global.app || {};

    DemoViewModel = kendo.data.ObservableObject.extend({

        // short lasting messages
        showToast_shortTop: function () {
            if (!this.checkSimulator()) {
	            window.plugins.toast.showShortTop('Your changes have been saved', this.onSuccess, this.onError);
            }
        },
        
        showToast_shortCenter: function () {
            if (!this.checkSimulator()) {
	            window.plugins.toast.showShortCenter('There were validation errors', this.onSuccess, this.onError);
            }
        },

        showToast_shortBottom: function () {
            if (!this.checkSimulator()) {
	            window.plugins.toast.showShortBottom('Account created successfully :)', this.onSuccess, this.onError);
            }
        },

        // longer lasting messages
        showToast_longTop: function () {
            if (!this.checkSimulator()) {
	            window.plugins.toast.showLongTop('The battery is almost out of juice!', this.onSuccess, this.onError);
            }
        },
        
        showToast_longCenter: function () {
            if (!this.checkSimulator()) {
	            window.plugins.toast.showLongCenter('Connection failure, please try again later', this.onSuccess, this.onError);
            }
        },

        showToast_longBottom: function () {
            if (!this.checkSimulator()) {
                window.plugins.toast.showLongBottom('Please turn on WiFi so we can do a better job determining your location', this.onSuccess, this.onError);
            }
        },

        checkSimulator: function() {
            if (window.plugins === undefined) {
                alert('Plugin not available. Are you running in the simulator?');
                return true;
            }
            return false;
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