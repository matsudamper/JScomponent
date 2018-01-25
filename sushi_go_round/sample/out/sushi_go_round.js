if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'sushi_go_round'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'sushi_go_round'.");
}
var sushi_go_round = function (_, Kotlin) {
  'use strict';
  var Unit = Kotlin.kotlin.Unit;
  var toInt = Kotlin.kotlin.text.toInt_pdl1vz$;
  var ensureNotNull = Kotlin.ensureNotNull;
  var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init;
  var EventListener = Kotlin.org.w3c.dom.events.EventListener_gbr1zf$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  function SushiGoRound() {
    this.loopCounter = LinkedHashMap_init();
    this.onAction_0 = EventListener(SushiGoRound$onAction$lambda(this));
    window.addEventListener('DOMContentLoaded', this.onAction_0, false);
  }
  function SushiGoRound$onAction$lambda$lambda$lambda$orderChange(closure$children) {
    return function () {
      var $receiver = closure$children;
      var tmp$;
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        var closure$children_0 = closure$children;
        var tmp$_0, tmp$_1;
        var order = toInt(element.style.order);
        tmp$_1 = element.style;
        if (order === 0)
          tmp$_0 = (closure$children_0.size - 1 | 0).toString();
        else
          tmp$_0 = (order - 1 | 0).toString();
        tmp$_1.order = tmp$_0;
      }
    };
  }
  var NoSuchElementException_init = Kotlin.kotlin.NoSuchElementException;
  var abs = Kotlin.kotlin.math.abs_za3lpa$;
  function SushiGoRound$onAction$lambda$lambda$lambda(closure$children, closure$description, this$SushiGoRound, closure$index) {
    return function () {
      var $receiver = closure$children;
      var first$result;
      first$break: do {
        var tmp$;
        tmp$ = $receiver.iterator();
        while (tmp$.hasNext()) {
          var element = tmp$.next();
          if (toInt(element.style.order) === 0) {
            first$result = element;
            break first$break;
          }
        }
        throw new NoSuchElementException_init('Collection contains no element matching the predicate.');
      }
       while (false);
      var current = first$result;
      var orderChange = SushiGoRound$onAction$lambda$lambda$lambda$orderChange(closure$children);
      switch (closure$description) {
        case 'row':
          if (abs(ensureNotNull(this$SushiGoRound.loopCounter.get_11rb$(closure$index))) >= current.clientWidth) {
            current.style.marginLeft = (0).toString();
            var $receiver_0 = this$SushiGoRound.loopCounter;
            var key = closure$index;
            $receiver_0.put_xwzc9p$(key, 0);
            orderChange();
            return;
          }
           else {
            current.style.marginLeft = ensureNotNull(this$SushiGoRound.loopCounter.get_11rb$(closure$index)).toString() + 'px';
          }

          break;
        case 'row-reverse':
          if (abs(ensureNotNull(this$SushiGoRound.loopCounter.get_11rb$(closure$index))) >= current.clientWidth) {
            current.style.marginRight = (0).toString();
            var $receiver_1 = this$SushiGoRound.loopCounter;
            var key_0 = closure$index;
            $receiver_1.put_xwzc9p$(key_0, 0);
            orderChange();
            return;
          }
           else {
            current.style.marginRight = ensureNotNull(this$SushiGoRound.loopCounter.get_11rb$(closure$index)).toString() + 'px';
          }

          break;
        default:throw IllegalStateException_init();
      }
      var $receiver_2 = this$SushiGoRound.loopCounter;
      var key_1 = closure$index;
      var value = ensureNotNull(this$SushiGoRound.loopCounter.get_11rb$(closure$index)) - 1 | 0;
      $receiver_2.put_xwzc9p$(key_1, value);
      return Unit;
    };
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
  function SushiGoRound$onAction$lambda(this$SushiGoRound) {
    return function (it) {
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
      var tmp$_2, tmp$_0_0;
      var index = 0;
      tmp$_2 = ulArray.iterator();
      while (tmp$_2.hasNext()) {
        var item = tmp$_2.next();
        var this$SushiGoRound_0 = this$SushiGoRound;
        var index_0 = (tmp$_0_0 = index, index = tmp$_0_0 + 1 | 0, tmp$_0_0);
        var description = window.getComputedStyle(item, null).getPropertyValue('flex-direction');
        var $receiver_0 = toArray(item.children);
        var destination_0 = ArrayList_init();
        var tmp$_3;
        tmp$_3 = $receiver_0.iterator();
        while (tmp$_3.hasNext()) {
          var element_0 = tmp$_3.next();
          var tmp$_0_1;
          var tmp$_4;
          if ((tmp$_0_1 = Kotlin.isType(tmp$_4 = element_0, HTMLLIElement) ? tmp$_4 : null) != null) {
            destination_0.add_11rb$(tmp$_0_1);
          }
        }
        var children = destination_0;
        if (children.get_za3lpa$(0).style.order.length === 0) {
          var tmp$_5, tmp$_0_2;
          var index_1 = 0;
          tmp$_5 = children.iterator();
          while (tmp$_5.hasNext()) {
            var item_0 = tmp$_5.next();
            var index_2 = (tmp$_0_2 = index_1, index_1 = tmp$_0_2 + 1 | 0, tmp$_0_2);
            item_0.style.order = index_2.toString();
          }
        }
        this$SushiGoRound_0.loopCounter.put_xwzc9p$(index_0, 0);
        window.setInterval(SushiGoRound$onAction$lambda$lambda$lambda(children, description, this$SushiGoRound_0, index_0), 50);
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
