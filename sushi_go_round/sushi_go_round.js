if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'sushi_go_round'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'sushi_go_round'.");
}
var sushi_go_round = function (_, Kotlin) {
  'use strict';
  var Unit = Kotlin.kotlin.Unit;
  var EventListener = Kotlin.org.w3c.dom.events.EventListener_gbr1zf$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  function SushiGoRound() {
    this.onAction_0 = EventListener(SushiGoRound$onAction$lambda);
    window.addEventListener('load', this.onAction_0, false);
    window.addEventListener('resize', this.onAction_0, false);
  }
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var wrapFunction = Kotlin.wrapFunction;
  var mapNotNullTo$lambda = wrapFunction(function () {
    return function (closure$transform, closure$destination) {
      return function (element) {
        var tmp$;
        if ((tmp$ = closure$transform(element)) != null) {
          closure$destination.add_11rb$(tmp$);
        }
        return Unit;
      };
    };
  });
  var mapNotNullTo$lambda_0 = wrapFunction(function () {
    return function (closure$transform, closure$destination) {
      return function (element) {
        var tmp$;
        if ((tmp$ = closure$transform(element)) != null) {
          closure$destination.add_11rb$(tmp$);
        }
        return Unit;
      };
    };
  });
  function SushiGoRound$onAction$lambda(it) {
    var $receiver = toArray(document.getElementsByClassName('sushi'));
    var destination = ArrayList_init();
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var tmp$_0;
      var tmp$_1;
      if ((tmp$_0 = Kotlin.isType(tmp$_1 = element, HTMLUListElement) ? tmp$_1 : null) != null) {
        destination.add_11rb$(tmp$_0);
      }
    }
    var ulArray = destination;
    var tmp$_2;
    tmp$_2 = ulArray.iterator();
    while (tmp$_2.hasNext()) {
      var element_0 = tmp$_2.next();
      var tmp$_3;
      tmp$_3 = toArray(element_0.children).iterator();
      while (tmp$_3.hasNext()) {
        var element_1 = tmp$_3.next();
        var $receiver_0 = toArray(element_1.getElementsByTagName('img'));
        var destination_0 = ArrayList_init();
        var tmp$_4;
        tmp$_4 = $receiver_0.iterator();
        while (tmp$_4.hasNext()) {
          var element_2 = tmp$_4.next();
          var tmp$_0_0;
          var tmp$_5;
          if ((tmp$_0_0 = Kotlin.isType(tmp$_5 = element_2, HTMLImageElement) ? tmp$_5 : null) != null) {
            destination_0.add_11rb$(tmp$_0_0);
          }
        }
        var tmp$_6;
        tmp$_6 = destination_0.iterator();
        while (tmp$_6.hasNext()) {
          var element_3 = tmp$_6.next();
          console.log(element_3.style.animation);
        }
      }
    }
    return Unit;
  }
  SushiGoRound.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SushiGoRound',
    interfaces: []
  };
  var sushi_go_round;
  function forEach($receiver, action) {
    var tmp$, tmp$_0;
    tmp$ = $receiver.length;
    for (var i = 0; i <= tmp$; i++) {
      if ((tmp$_0 = $receiver[i]) != null) {
        action(tmp$_0);
      }
    }
  }
  function toArray($receiver) {
    var $receiver_0 = ArrayList_init();
    var tmp$, tmp$_0;
    tmp$ = $receiver.length;
    for (var i = 0; i <= tmp$; i++) {
      if ((tmp$_0 = $receiver[i]) != null) {
        $receiver_0.add_11rb$(tmp$_0);
      }
    }
    return $receiver_0;
  }
  _.SushiGoRound = SushiGoRound;
  Object.defineProperty(_, 'sushi_go_round', {
    get: function () {
      return sushi_go_round;
    }
  });
  _.forEach_qdflk5$ = forEach;
  _.toArray_sg7yuv$ = toArray;
  sushi_go_round = new SushiGoRound();
  Kotlin.defineModule('sushi_go_round', _);
  return _;
}(typeof sushi_go_round === 'undefined' ? {} : sushi_go_round, kotlin);
