var adminApp = angular.module('adminApp', ['oc.lazyLoad', 'ui.router']);
angular.element(document).ready(function () {
    angular.bootstrap(document, ['adminApp']);
});

adminApp.run(function ($rootScope, $state, $stateParams) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
});
adminApp.config(function ($stateProvider, $urlRouterProvider, $controllerProvider) {
    adminApp.controllerProvider = $controllerProvider;
    $urlRouterProvider.when("", "dashboard/accountManagement");
    $urlRouterProvider.otherwise("dashboard/accountManagement");
    $stateProvider
        .state('dashboard', {
            url: '/dashboard',
            templateUrl: 'dashboard/dashboard.html',
            controller: 'dashboardController',
            resolve: {
                deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load(['dashboard/dashboard.js']);
                }]
            }
        })
        .state('dashboard.accountManagement', {
            url: '/accountManagement',
            templateUrl: 'accountManagement/accountManagement.html',
            controller: 'accountManagementController',
            resolve: {
                deps: ['$ocLazyLoad',
                    function ($ocLazyLoad) {
                        return $ocLazyLoad.load(['accountManagement/accountManagement.js', 'accountManagement/accountManagement.css']);
                    }]
            }
        })
        .state('dashboard.academicYear', {
            url: '/academicYear',
            templateUrl: 'academicYear/academicYear.html',
            controller: 'academicYearController',
            resolve: {
                deps: ['$ocLazyLoad',
                    function ($ocLazyLoad) {
                        return $ocLazyLoad.load(['academicYear/academicYear.js', 'academicYear/academicYear.css']);
                    }]
            }
        })
        .state('dashboard.feedbackManagement', {
            url: '/feedbackManagement',
            templateUrl: 'feedbackManagement/feedbackManagement.html',
            controller: 'feedbackManagementController',
            resolve: {
                deps: ['$ocLazyLoad',
                    function ($ocLazyLoad) {
                        return $ocLazyLoad.load(['feedbackManagement/feedbackManagement.js', 'feedbackManagement/feedbackManagement.css']);
                    }]
            }
        });
});