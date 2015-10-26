angular.module('SSFAlerts', [])
.service('SSFAlertsService', ['$ionicPopup', '$q', function ($ionicPopup, $q) {
    var service = this;
    service.showAlert = function(title, body)
    {
        if(navigator.notification == undefined)
        {
                //Ionic style approach
        } else {
                //Native style
        }
         navigator.notification.alert(body, null, title);
    };
    service.showConfirm = function(title, body)
    {
        var defer = $q.defer();
        var confirmCallback = function(buttonIndex)
        {
             if(buttonIndex===1) {
                 defer.resolve(true);
             }else {
                 defer.resolve(false);
             }
        };
        if(navigator.notification == undefined)
        {
                //Ionic style approach
        } else {
                //Native style
        }
        navigator.notification.confirm(body, confirmCallback, title);
        return defer.promise;
    };
}]);
