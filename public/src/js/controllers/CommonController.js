/**
 * Created by Antony on 14/11/21.
 */

var jsEasyControllers = angular.module('jsEasy.controllers', ['jsEasy.services','jsEasy.tools',"mobile-angular-ui"]);




//
// `$drag` example: drag to dismiss
//
jsEasyControllers.directive('dragToDismiss', function ($drag, $parse, $timeout) {
  return {
    restrict: 'A',
    compile: function (elem, attrs) {
      var dismissFn = $parse(attrs.dragToDismiss);
      return function (scope, elem, attrs) {
        var dismiss = false;

        $drag.bind(elem, {
          constraint: {
            minX: 0,
            minY: 0,
            maxY: 0
          },
          move: function (c) {
            if (c.left >= c.width / 4) {
              dismiss = true;
              elem.addClass('dismiss');
            } else {
              dismiss = false;
              elem.removeClass('dismiss');
            }
          },
          cancel: function () {
            elem.removeClass('dismiss');
          },
          end: function (c, undo, reset) {
            if (dismiss) {
              elem.addClass('dismitted');
              $timeout(function () {
                scope.$apply(function () {
                  dismissFn(scope);
                });
              }, 400);
            } else {
              reset();
            }
          }
        });
      };
    }
  };
});

//
// Another `$drag` usage example: this is how you could create
// a touch enabled "deck of cards" carousel. See `carousel.html` for markup.
//
jsEasyControllers.directive('carousel', function () {
  return {
    restrict: 'C',
    scope: {},
    controller: function ($scope) {
      this.itemCount = 0;
      this.activeItem = null;

      this.addItem = function () {
        var newId = this.itemCount++;
        this.activeItem = this.itemCount == 1 ? newId : this.activeItem;
        return newId;
      };

      this.next = function () {
        this.activeItem = this.activeItem || 0;
        this.activeItem = this.activeItem == this.itemCount - 1 ? 0 : this.activeItem + 1;
      };

      this.prev = function () {
        this.activeItem = this.activeItem || 0;
        this.activeItem = this.activeItem === 0 ? this.itemCount - 1 : this.activeItem - 1;
      };
    }
  };
});