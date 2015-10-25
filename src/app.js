var app = angular.module('app', ['ui.router']);

app.run(function ($rootScope) {
    $rootScope.$on("$stateChangeStart",
        function (event, toState, toParams, fromState, fromParams) {
            if($rootScope.audio) $rootScope.audio.pause();
        });
})