// we put all the js code into an anonymous function
// this is good practice to isolate the namespace
; (function() {


// with this we make js less forgiving so that we catch
// more hidden errors during development
'use strict';


// we register the angular app
var app = angular.module('app', []);


// we do this to avoid conflict with jekyll interpolation
// markers which also happen to be {{ and }}
// with this change jekyll interpolation markers are {{ and }}
// and angular ones become {[ and ]}
app.config(function($interpolateProvider) {
    $interpolateProvider.startSymbol('{[');
    $interpolateProvider.endSymbol(']}');
});


// allow angular together with anchors
// http://stackoverflow.com/a/14717011
app.run(function($rootScope, $location, $anchorScroll) {
    //when the route is changed scroll to the proper element.
    $rootScope.$on('$routeChangeSuccess', function(newRoute, oldRoute) {
        if($location.hash()) $anchorScroll();
    });
});


// all scope variables and functions live in this namespace
// they are visible in the django view when inside the corresponding angular div
// all the angular business logic is inside this controller
app.controller('controller', ['$scope', '$http', '$location', function($scope, $http, $location) {

    var hash = $location.hash();

    $scope.url = 'http://' + location.host;

    var hash_is_set = (hash != '');

    $scope.get_class = function(type, id)
    {
        if (hash_is_set)
        {
            if (hash == id)
            {
                $('#highlight-' + id).addClass('backgroundAnimated');
                return type;
            }
            else
            {
                return 'inactive';
            }
        }
        else
        {
            return type;
        }
    }

}]);  // close controller

})();  // close the anonymous function
