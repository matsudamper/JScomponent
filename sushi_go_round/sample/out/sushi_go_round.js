if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'sushi_go_round'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'sushi_go_round'.");
}
var sushi_go_round = function (_, Kotlin) {
  'use strict';
  var throwUPAE = Kotlin.throwUPAE;
  var ensureNotNull = Kotlin.ensureNotNull;
  var Unit = Kotlin.kotlin.Unit;
  var toInt = Kotlin.kotlin.text.toInt_pdl1vz$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var throwCCE = Kotlin.throwCCE;
  var EventListener = Kotlin.org.w3c.dom.events.EventListener_gbr1zf$;
  function SushiGoRound() {
    this.styleSheet_mnmm7i$_0 = this.styleSheet_mnmm7i$_0;
    this.targetRuleIndex = null;
    this.ulArray_qqjy0i$_0 = this.ulArray_qqjy0i$_0;
    this.onAction_0 = EventListener(SushiGoRound$onAction$lambda(this));
    window.addEventListener('DOMContentLoaded', this.onAction_0, false);
  }
  Object.defineProperty(SushiGoRound.prototype, 'styleSheet', {
    get: function () {
      if (this.styleSheet_mnmm7i$_0 == null)
        return throwUPAE('styleSheet');
      return this.styleSheet_mnmm7i$_0;
    },
    set: function (styleSheet) {
      this.styleSheet_mnmm7i$_0 = styleSheet;
    }
  });
  Object.defineProperty(SushiGoRound.prototype, 'ulArray', {
    get: function () {
      if (this.ulArray_qqjy0i$_0 == null)
        return throwUPAE('ulArray');
      return this.ulArray_qqjy0i$_0;
    },
    set: function (ulArray) {
      this.ulArray_qqjy0i$_0 = ulArray;
    }
  });
  function SushiGoRound$slide$ObjectLiteral(closure$current, closure$children, this$SushiGoRound) {
    this.closure$current = closure$current;
    this.closure$children = closure$children;
    this.this$SushiGoRound = this$SushiGoRound;
  }
  SushiGoRound$slide$ObjectLiteral.prototype.handleEvent = function (event) {
    this.closure$current.removeEventListener('webkitAnimationEnd', this);
    var $receiver = this.closure$children;
    this.closure$children;
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var closure$children = this.closure$children;
      var tmp$_0, tmp$_1;
      var order = toInt(element.style.order);
      tmp$_1 = element.style;
      if (order === 0)
        tmp$_0 = (closure$children.size - 1 | 0).toString();
      else
        tmp$_0 = (order - 1 | 0).toString();
      tmp$_1.order = tmp$_0;
    }
    this.this$SushiGoRound.slide_0(this.closure$current, this.closure$children);
  };
  SushiGoRound$slide$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: []
  };
  var NoSuchElementException_init = Kotlin.kotlin.NoSuchElementException;
  SushiGoRound.prototype.slide_0 = function (current, children) {
    if (this.styleSheet.cssRules[ensureNotNull(this.targetRuleIndex)] != null) {
      this.styleSheet.deleteRule(ensureNotNull(this.targetRuleIndex));
      var tmp$;
      tmp$ = children.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        var tmp$_0;
        (tmp$_0 = current != null ? current.style : null) != null ? (tmp$_0.animation = 'none') : null;
      }
    }
    var first$result;
    first$break: do {
      var tmp$_1;
      tmp$_1 = children.iterator();
      while (tmp$_1.hasNext()) {
        var element_0 = tmp$_1.next();
        if (toInt(element_0.style.order) === 0) {
          first$result = element_0;
          break first$break;
        }
      }
      throw new NoSuchElementException_init('Collection contains no element matching the predicate.');
    }
     while (false);
    var current_0 = first$result;
    var keyframes = '\n' + '                        @keyframes slide {' + '\n' + '                            to {' + '\n' + '                                margin-left: ' + (-current_0.clientWidth | 0) + 'px;' + '\n' + '                            }' + '\n' + '                        }' + '\n' + '                        ';
    this.styleSheet.insertRule(keyframes, ensureNotNull(this.targetRuleIndex));
    current_0.addEventListener('webkitAnimationEnd', new SushiGoRound$slide$ObjectLiteral(current_0, children, this));
    var $receiver = current_0.style;
    $receiver.animationName = 'slide';
    $receiver.animationDuration = '3s';
    $receiver.animationIterationCount = '1';
    $receiver.animationTimingFunction = 'linear';
  };
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
  function SushiGoRound$onAction$lambda(this$SushiGoRound) {
    return function (it) {
      var tmp$;
      if (!(this$SushiGoRound.styleSheet_mnmm7i$_0 != null)) {
        this$SushiGoRound.styleSheet = Kotlin.isType(tmp$ = document.styleSheets[0], CSSStyleSheet) ? tmp$ : throwCCE();
      }
      if (this$SushiGoRound.targetRuleIndex == null) {
        this$SushiGoRound.targetRuleIndex = this$SushiGoRound.styleSheet.cssRules.length;
      }
      if (!(this$SushiGoRound.ulArray_qqjy0i$_0 != null)) {
        var tmp$_0 = this$SushiGoRound;
        var $receiver = toArray(document.getElementsByClassName('sushi'));
        var destination = ArrayList_init();
        var tmp$_1;
        tmp$_1 = $receiver.iterator();
        while (tmp$_1.hasNext()) {
          var element = tmp$_1.next();
          var tmp$_0_0;
          var tmp$_2;
          if ((tmp$_0_0 = Kotlin.isType(tmp$_2 = element, HTMLUListElement) ? tmp$_2 : null) != null) {
            destination.add_11rb$(tmp$_0_0);
          }
        }
        tmp$_0.ulArray = destination;
      }
      var $receiver_0 = this$SushiGoRound.ulArray;
      var tmp$_3;
      tmp$_3 = $receiver_0.iterator();
      while (tmp$_3.hasNext()) {
        var element_0 = tmp$_3.next();
        var this$SushiGoRound_0 = this$SushiGoRound;
        var $receiver_1 = toArray(element_0.children);
        var destination_0 = ArrayList_init();
        var tmp$_4;
        tmp$_4 = $receiver_1.iterator();
        while (tmp$_4.hasNext()) {
          var element_1 = tmp$_4.next();
          var tmp$_0_1;
          var tmp$_5;
          if ((tmp$_0_1 = Kotlin.isType(tmp$_5 = element_1, HTMLLIElement) ? tmp$_5 : null) != null) {
            destination_0.add_11rb$(tmp$_0_1);
          }
        }
        var children = destination_0;
        if (children.get_za3lpa$(0).style.order.length === 0) {
          var tmp$_6, tmp$_0_2;
          var index = 0;
          tmp$_6 = children.iterator();
          while (tmp$_6.hasNext()) {
            var item = tmp$_6.next();
            var index_0 = (tmp$_0_2 = index, index = tmp$_0_2 + 1 | 0, tmp$_0_2);
            item.style.order = index_0.toString();
          }
        }
        this$SushiGoRound_0.slide_0(null, children);
      }
      return Unit;
    };
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
