angular.module('ui.switch', ['ng']).directive('switch', function () {
  return {
    restrict: 'EA',
    replace: true,
    scope: {
      model: '=',
      disabled: '@',
      onLabel: '@',
      offLabel: '@'
    },
    template: '<div class="switch" ng-click="toggle()" ng-class="{ \'disabled\': disabled, \'on\': model}"><span class="onLabel" ng-bind="onLabel"></span><span class="knob"></span><span class="offLabel" ng-bind="offLabel"></span></div>',
    controller: function($scope) {
      $scope.toggle = function toggle() {
        if(!$scope.disabled) {
          $scope.model = !$scope.model;
        }
      };
    },
    compile: function(element, attrs) {
      if (!attrs.onLabel) { attrs.onLabel = 'On'; }
      if (!attrs.offLabel) { attrs.offLabel = 'Off'; }
      if (!attrs.disabled) { attrs.disabled = false; }
    }
  };
});
