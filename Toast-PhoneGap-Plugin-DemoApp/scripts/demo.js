(function (global) {
    var DemoViewModel,
        app = global.app = global.app || {};

    DemoViewModel = kendo.data.ObservableObject.extend({

        // short lasting messages
        showToast_shortTop: function () {
            window.plugins.toast.showShortTop('Your changes have been saved', this.onSuccess, this.onError);
        },
        
        showToast_shortCenter: function () {
            window.plugins.toast.showShortCenter('There were validation errors', this.onSuccess, this.onError);
        },

        showToast_shortBottom: function () {
            window.plugins.toast.showShortBottom('Account created successfully :)', this.onSuccess, this.onError);
        },

        // longer lasting messages
        showToast_longTop: function () {
            window.plugins.toast.showLongTop('The battery is almost out of juice!', this.onSuccess, this.onError);
        },
        
        showToast_longCenter: function () {
            window.plugins.toast.showLongCenter('Connection failure, please try again later', this.onSuccess, this.onError);
        },

        showToast_longBottom: function () {
            window.plugins.toast.showLongBottom('Please turn on WiFi so we can do a better job determining your location', this.onSuccess, this.onError);
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