if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'flex-arrange'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'flex-arrange'.");
}
this['flex-arrange'] = function (_, Kotlin) {
  'use strict';
  var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init;
  var toDoubleOrNull = Kotlin.kotlin.text.toDoubleOrNull_pdl1vz$;
  var IntRange = Kotlin.kotlin.ranges.IntRange;
  var Unit = Kotlin.kotlin.Unit;
  var EventListener = Kotlin.org.w3c.dom.events.EventListener_gbr1zf$;
  var numberToInt = Kotlin.numberToInt;
  var throwCCE = Kotlin.throwCCE;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  function Layout() {
    this.tagName_0 = 'flex-arrange';
    this.spaceName_0 = 'flex-arrange-space';
    this.beforeHeight_0 = 'data-before-height';
    this.onResized_0 = EventListener(Layout$onResized$lambda(this));
    window.addEventListener('DOMContentLoaded', EventListener(Layout_init$lambda(this)), false);
    window.addEventListener('DOMContentLoaded', this.onResized_0, false);
    window.addEventListener('resize', this.onResized_0, false);
  }
  Layout.prototype.isSingle_0 = function (parent) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    tmp$_1 = (tmp$_0 = (tmp$ = parent.firstElementChild) != null ? tmp$.getBoundingClientRect() : null) != null ? tmp$_0.top : null;
    if (tmp$_1 == null) {
      throw IllegalStateException_init();
    }
    var firstTop = tmp$_1;
    tmp$_2 = parent.children[1];
    if (tmp$_2 == null) {
      return true;
    }
    var secondTop = tmp$_2.getBoundingClientRect().top;
    return firstTop !== secondTop;
  };
  function Layout$onResized$lambda(this$Layout) {
    return function (it) {
      var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
      tmp$_1 = (tmp$_0 = (tmp$ = document.body) != null ? tmp$.getElementsByTagName(this$Layout.tagName_0) : null) != null ? toArray(tmp$_0) : null;
      if (tmp$_1 == null) {
        return;
      }
      tmp$_2 = tmp$_1.iterator();
      while (tmp$_2.hasNext()) {
        var parent = tmp$_2.next();
        var height = parent.getBoundingClientRect().height;
        if (height !== ((tmp$_3 = parent.getAttribute(this$Layout.beforeHeight_0)) != null ? toDoubleOrNull(tmp$_3) : null)) {
          parent.setAttribute(this$Layout.beforeHeight_0, height.toString());
          if (this$Layout.isSingle_0(parent)) {
            var tmp$_4;
            tmp$_4 = (new IntRange(0, parent.childElementCount)).iterator();
            while (tmp$_4.hasNext()) {
              var element = tmp$_4.next();
              var tmp$_5, tmp$_6;
              (tmp$_6 = (tmp$_5 = parent.children[element]) != null ? tmp$_5.classList : null) != null ? (tmp$_6.add('single'), Unit) : null;
            }
          }
           else {
            var tmp$_7;
            tmp$_7 = (new IntRange(0, parent.childElementCount)).iterator();
            while (tmp$_7.hasNext()) {
              var element_0 = tmp$_7.next();
              var tmp$_8, tmp$_9;
              (tmp$_9 = (tmp$_8 = parent.children[element_0]) != null ? tmp$_8.classList : null) != null ? (tmp$_9.remove('single'), Unit) : null;
            }
          }
        }
      }
      return Unit;
    };
  }
  function Layout_init$lambda(this$Layout) {
    return function (it) {
      var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5;
      var displaySize = Math.max(window.parent.screen.width, window.parent.screen.height);
      tmp$_1 = (tmp$_0 = (tmp$ = document.body) != null ? tmp$.getElementsByTagName(this$Layout.tagName_0) : null) != null ? toArray(tmp$_0) : null;
      if (tmp$_1 == null) {
        return;
      }
      tmp$_2 = tmp$_1.iterator();
      while (tmp$_2.hasNext()) {
        var parent = tmp$_2.next();
        tmp$_3 = parent.firstElementChild;
        if (tmp$_3 == null) {
          continue;
        }
        var child = tmp$_3;
        var childWidth = numberToInt(child.getBoundingClientRect().width);
        tmp$_4 = displaySize / childWidth | 0;
        for (var i = 0; i <= tmp$_4; i++) {
          var newChild = Kotlin.isType(tmp$_5 = child.cloneNode(false), Element) ? tmp$_5 : throwCCE();
          newChild.classList.add(this$Layout.spaceName_0);
          parent.append(newChild);
        }
      }
      return Unit;
    };
  }
  Layout.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Layout',
    interfaces: []
  };
  var hoge;
  function forEach($receiver, action) {
    var tmp$, tmp$_0;
    tmp$ = $receiver.length;
    for (var i = 0; i <= tmp$; i++) {
      if ((tmp$_0 = $receiver[i]) != null) {
        action(tmp$_0);
      }
    }
  }
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
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
  _.Layout = Layout;
  Object.defineProperty(_, 'hoge', {
    get: function () {
      return hoge;
    }
  });
  var package$net = _.net || (_.net = {});
  var package$matsudamper = package$net.matsudamper || (package$net.matsudamper = {});
  var package$selector = package$matsudamper.selector || (package$matsudamper.selector = {});
  package$selector.forEach_qdflk5$ = forEach;
  package$selector.toArray_sg7yuv$ = toArray;
  hoge = new Layout();
  Kotlin.defineModule('flex-arrange', _);
  return _;
}(typeof this['flex-arrange'] === 'undefined' ? {} : this['flex-arrange'], kotlin);
