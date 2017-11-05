if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'selector'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'selector'.");
}
var selector = function (_, Kotlin) {
  'use strict';
  var reversedArray = Kotlin.kotlin.collections.reversedArray_4b5429$;
  var Pair = Kotlin.kotlin.Pair;
  var Unit = Kotlin.kotlin.Unit;
  var IntRange = Kotlin.kotlin.ranges.IntRange;
  var slice = Kotlin.kotlin.collections.slice_6bjbi1$;
  var reversed = Kotlin.kotlin.collections.reversed_7wnvza$;
  var listOf = Kotlin.kotlin.collections.listOf_i5x0yv$;
  var filterNotNull = Kotlin.kotlin.collections.filterNotNull_m3lr2h$;
  var Error_0 = Kotlin.kotlin.Error;
  var Enum = Kotlin.kotlin.Enum;
  WindowState.prototype = Object.create(Enum.prototype);
  WindowState.prototype.constructor = WindowState;
  WindowState$XS.prototype = Object.create(WindowState.prototype);
  WindowState$XS.prototype.constructor = WindowState$XS;
  WindowState$SM.prototype = Object.create(WindowState.prototype);
  WindowState$SM.prototype.constructor = WindowState$SM;
  WindowState$MD.prototype = Object.create(WindowState.prototype);
  WindowState$MD.prototype.constructor = WindowState$MD;
  WindowState$LG.prototype = Object.create(WindowState.prototype);
  WindowState$LG.prototype.constructor = WindowState$LG;
  WindowState$XL.prototype = Object.create(WindowState.prototype);
  WindowState$XL.prototype.constructor = WindowState$XL;
  function BaseSelector() {
  }
  Object.defineProperty(BaseSelector.prototype, 'elementName', {
    get: function () {
      return 'selector-' + this.targetName;
    }
  });
  BaseSelector.prototype.getAttributeName_mk5ry$ = function (windowState) {
    if (Kotlin.equals(windowState, WindowState$XS_getInstance()))
      return 'data-' + this.targetName + '-' + WindowState$XS_getInstance().getSuffix();
    else if (Kotlin.equals(windowState, WindowState$SM_getInstance()))
      return 'data-' + this.targetName + '-' + WindowState$SM_getInstance().getSuffix();
    else if (Kotlin.equals(windowState, WindowState$MD_getInstance()))
      return 'data-' + this.targetName + '-' + WindowState$MD_getInstance().getSuffix();
    else if (Kotlin.equals(windowState, WindowState$LG_getInstance()))
      return 'data-' + this.targetName + '-' + WindowState$LG_getInstance().getSuffix();
    else if (Kotlin.equals(windowState, WindowState$XL_getInstance()))
      return 'data-' + this.targetName + '-' + WindowState$XL_getInstance().getSuffix();
    else
      return Kotlin.noWhenBranchMatched();
  };
  BaseSelector.$metadata$ = {
    kind: Kotlin.Kind.INTERFACE,
    simpleName: 'BaseSelector',
    interfaces: []
  };
  function ClassSelector() {
    this.targetName_wyzibs$_0 = 'class';
  }
  Object.defineProperty(ClassSelector.prototype, 'targetName', {
    get: function () {
      return this.targetName_wyzibs$_0;
    }
  });
  ClassSelector.prototype.stateChanged_mk5ry$ = function (windowState) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    tmp$_1 = (tmp$_0 = (tmp$ = document.body) != null ? tmp$.getElementsByTagName(this.elementName) : null) != null ? toArray(tmp$_0) : null;
    if (tmp$_1 == null) {
      return;
    }
    tmp$_2 = tmp$_1.iterator();
    while (tmp$_2.hasNext()) {
      var item = tmp$_2.next();
      if (item == null)
        continue;
      item.className = (tmp$_3 = item.getAttribute(this.getAttributeName_mk5ry$(windowState))) != null ? tmp$_3 : '';
    }
  };
  ClassSelector.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ClassSelector',
    interfaces: [BaseSelector]
  };
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  function ClassSelector_init($this) {
    $this = $this || Object.create(ClassSelector.prototype);
    ClassSelector.call($this);
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    tmp$_1 = (tmp$_0 = (tmp$ = document.body) != null ? tmp$.getElementsByTagName($this.elementName) : null) != null ? toArray(tmp$_0) : null;
    if (tmp$_1 == null) {
      return $this;
    }
    tmp$_2 = tmp$_1.iterator();
    while (tmp$_2.hasNext()) {
      var item = tmp$_2.next();
      if (item == null)
        continue;
      if (item.getAttribute($this.getAttributeName_mk5ry$(WindowState$MD_getInstance())) == null) {
        tmp$_3 = item.getAttribute('class');
        if (tmp$_3 == null) {
          continue;
        }
        var classItem = tmp$_3;
        item.setAttribute($this.getAttributeName_mk5ry$(WindowState$MD_getInstance()), classItem);
      }
      var $receiver = ArrayList_init();
      var $receiver_0 = reversedArray(WindowState$values());
      var tmp$_4;
      for (tmp$_4 = 0; tmp$_4 !== $receiver_0.length; ++tmp$_4) {
        var element = $receiver_0[tmp$_4];
        $receiver.add_11rb$(new Pair(element, item.getAttribute($this.getAttributeName_mk5ry$(element))));
      }
      var tmp$_5, tmp$_0_0;
      var index = 0;
      tmp$_5 = $receiver.iterator();
      while (tmp$_5.hasNext()) {
        var item_0 = tmp$_5.next();
        var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
        var index_0 = (tmp$_0_0 = index, index = tmp$_0_0 + 1 | 0, tmp$_0_0);
        action$break: do {
          var tmp$_6, tmp$_7;
          if (item_0.second == null) {
            var $receiver_1 = slice($receiver, new IntRange(index_0 + 1 | 0, $receiver.size - 1 | 0));
            var destination = ArrayList_init(collectionSizeOrDefault($receiver_1, 10));
            var tmp$_8;
            tmp$_8 = $receiver_1.iterator();
            while (tmp$_8.hasNext()) {
              var item_1 = tmp$_8.next();
              destination.add_11rb$(item_1.second);
            }
            var tmp$result;
            tmp$break: do {
              var tmp$_9;
              tmp$_9 = destination.iterator();
              while (tmp$_9.hasNext()) {
                var element_0 = tmp$_9.next();
                if (element_0 != null) {
                  tmp$result = element_0;
                  break tmp$break;
                }
              }
              tmp$result = null;
            }
             while (false);
            if ((tmp$_6 = tmp$result) != null) {
              item.setAttribute($this.getAttributeName_mk5ry$(item_0.first), tmp$_6);
              break action$break;
            }
            var $receiver_2 = reversed(slice($receiver, new IntRange(0, index_0 - 1 | 0)));
            var destination_0 = ArrayList_init(collectionSizeOrDefault($receiver_2, 10));
            var tmp$_10;
            tmp$_10 = $receiver_2.iterator();
            while (tmp$_10.hasNext()) {
              var item_2 = tmp$_10.next();
              destination_0.add_11rb$(item_2.second);
            }
            var tmp$result_0;
            tmp$break: do {
              var tmp$_11;
              tmp$_11 = destination_0.iterator();
              while (tmp$_11.hasNext()) {
                var element_1 = tmp$_11.next();
                if (element_1 != null) {
                  tmp$result_0 = element_1;
                  break tmp$break;
                }
              }
              tmp$result_0 = null;
            }
             while (false);
            if ((tmp$_7 = tmp$result_0) != null) {
              item.setAttribute($this.getAttributeName_mk5ry$(item_0.first), tmp$_7);
            }
          }
        }
         while (false);
      }
    }
    return $this;
  }
  function Selector() {
    this.selectors = this.selectors;
    this.windowState_0 = null;
    this.selectorRoot_0 = new Selector$selectorRoot$ObjectLiteral(this);
  }
  Selector.prototype.getWindowState_0 = function () {
    var width = window.innerWidth;
    var block$result;
    if (width < WindowState$SM_getInstance().getBreakPoint()) {
      block$result = WindowState$XS_getInstance();
    }
     else if (width < WindowState$MD_getInstance().getBreakPoint()) {
      block$result = WindowState$SM_getInstance();
    }
     else if (width < WindowState$LG_getInstance().getBreakPoint()) {
      block$result = WindowState$MD_getInstance();
    }
     else if (width < WindowState$XL_getInstance().getBreakPoint()) {
      block$result = WindowState$LG_getInstance();
    }
     else {
      block$result = WindowState$XL_getInstance();
    }
    return block$result;
  };
  function Selector$selectorRoot$ObjectLiteral(this$Selector) {
    this.this$Selector = this$Selector;
  }
  Selector$selectorRoot$ObjectLiteral.prototype.handleEvent = function (event) {
    var beforeWindowState = this.this$Selector.windowState_0;
    var tmp$ = this.this$Selector;
    var $receiver = this.this$Selector.getWindowState_0();
    this.this$Selector;
    var this$Selector = this.this$Selector;
    var tmp$_0;
    if (Kotlin.equals($receiver, beforeWindowState))
      return;
    tmp$_0 = this$Selector.selectors.iterator();
    while (tmp$_0.hasNext()) {
      var item = tmp$_0.next();
      item.stateChanged_mk5ry$($receiver);
    }
    tmp$.windowState_0 = $receiver;
  };
  Selector$selectorRoot$ObjectLiteral.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    interfaces: []
  };
  Selector.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Selector',
    interfaces: []
  };
  function Selector_init($this) {
    $this = $this || Object.create(Selector.prototype);
    Selector.call($this);
    window.addEventListener('load', Selector_init$lambda($this), false);
    window.addEventListener('load', $this.selectorRoot_0, false);
    window.addEventListener('resize', $this.selectorRoot_0, false);
    return $this;
  }
  function Selector_init$lambda(this$Selector) {
    return function (it) {
      this$Selector.selectors = listOf([ClassSelector_init(), new VisibilitySelector(this$Selector.getWindowState_0())]);
      return Unit;
    };
  }
  var selector;
  function forEach($receiver, action) {
    var tmp$;
    tmp$ = $receiver.length;
    for (var i = 0; i <= tmp$; i++) {
      action($receiver[i]);
    }
  }
  function toArray($receiver) {
    var $receiver_0 = ArrayList_init();
    var tmp$;
    tmp$ = $receiver.length;
    for (var i = 0; i <= tmp$; i++) {
      $receiver_0.add_11rb$($receiver[i]);
    }
    return $receiver_0;
  }
  function VisibilitySelector(windowState) {
    this.windowState = windowState;
    this.targetName_krbdfk$_0 = 'visibility';
    var tmp$, tmp$_0;
    (tmp$_0 = (tmp$ = document.body) != null ? tmp$.getElementsByTagName(this.elementName) : null) != null ? (forEach(tmp$_0, VisibilitySelector_init$lambda(this)), Unit) : null;
    this.stateChanged_mk5ry$(this.windowState);
  }
  Object.defineProperty(VisibilitySelector.prototype, 'targetName', {
    get: function () {
      return this.targetName_krbdfk$_0;
    }
  });
  function VisibilitySelector$stateChanged$lambda(closure$windowState, this$VisibilitySelector) {
    return function (parent) {
      var tmp$, tmp$_0, tmp$_1;
      if ((tmp$_1 = (tmp$_0 = (tmp$ = parent != null ? parent.children : null) != null ? toArray(tmp$) : null) != null ? filterNotNull(tmp$_0) : null) != null) {
        var tmp$_2;
        tmp$_2 = tmp$_1.iterator();
        while (tmp$_2.hasNext()) {
          var element = tmp$_2.next();
          var closure$windowState_0 = closure$windowState;
          var this$VisibilitySelector_0 = this$VisibilitySelector;
          var tmp$_3, tmp$_4, tmp$_5, tmp$_6;
          tmp$_6 = (Kotlin.isType(tmp$_5 = element, HTMLElement) ? tmp$_5 : Kotlin.throwCCE()).style;
          tmp$_3 = element.getAttribute(this$VisibilitySelector_0.getAttributeName_mk5ry$(closure$windowState_0));
          if (Kotlin.equals(tmp$_3, 'true'))
            tmp$_4 = '';
          else if (Kotlin.equals(tmp$_3, 'false'))
            tmp$_4 = 'none';
          else
            throw new Error_0();
          tmp$_6.display = tmp$_4;
        }
      }
      return Unit;
    };
  }
  VisibilitySelector.prototype.stateChanged_mk5ry$ = function (windowState) {
    var tmp$, tmp$_0;
    (tmp$_0 = (tmp$ = document.body) != null ? tmp$.getElementsByTagName(this.elementName) : null) != null ? (forEach(tmp$_0, VisibilitySelector$stateChanged$lambda(windowState, this)), Unit) : null;
  };
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  var Collection = Kotlin.kotlin.collections.Collection;
  function VisibilitySelector_init$lambda(this$VisibilitySelector) {
    return function (parent) {
      var tmp$, tmp$_0, tmp$_1;
      if ((tmp$_1 = (tmp$_0 = (tmp$ = parent != null ? parent.children : null) != null ? toArray(tmp$) : null) != null ? filterNotNull(tmp$_0) : null) != null) {
        var tmp$_2;
        tmp$_2 = tmp$_1.iterator();
        while (tmp$_2.hasNext()) {
          var element = tmp$_2.next();
          var this$VisibilitySelector_0 = this$VisibilitySelector;
          action$break: do {
            var $receiver = WindowState$values();
            var destination = ArrayList_init();
            var tmp$_3;
            for (tmp$_3 = 0; tmp$_3 !== $receiver.length; ++tmp$_3) {
              var element_0 = $receiver[tmp$_3];
              var tmp$_0_0;
              if ((tmp$_0_0 = element.getAttribute(this$VisibilitySelector_0.getAttributeName_mk5ry$(element_0))) != null) {
                destination.add_11rb$(tmp$_0_0);
              }
            }
            var destination_0 = ArrayList_init();
            var tmp$_4;
            tmp$_4 = destination.iterator();
            while (tmp$_4.hasNext()) {
              var element_1 = tmp$_4.next();
              if (Kotlin.equals(element_1, 'true') || Kotlin.equals(element_1, 'false'))
                destination_0.add_11rb$(element_1);
            }
            var tmp$_5;
            var all$result;
            all$break: do {
              var tmp$_6;
              if (Kotlin.isType(destination_0, Collection) && destination_0.isEmpty()) {
                all$result = true;
                break all$break;
              }
              tmp$_6 = destination_0.iterator();
              while (tmp$_6.hasNext()) {
                var element_2 = tmp$_6.next();
                if (!Kotlin.equals(element_2, 'true')) {
                  all$result = false;
                  break all$break;
                }
              }
              all$result = true;
            }
             while (false);
            var isAllTrue = all$result;
            var all$result_0;
            all$break: do {
              var tmp$_7;
              if (Kotlin.isType(destination_0, Collection) && destination_0.isEmpty()) {
                all$result_0 = true;
                break all$break;
              }
              tmp$_7 = destination_0.iterator();
              while (tmp$_7.hasNext()) {
                var element_3 = tmp$_7.next();
                if (!Kotlin.equals(element_3, 'false')) {
                  all$result_0 = false;
                  break all$break;
                }
              }
              all$result_0 = true;
            }
             while (false);
            var isAllFalse = all$result_0;
            if (isAllTrue)
              tmp$_5 = false;
            else if (isAllFalse)
              tmp$_5 = true;
            else {
              var $receiver_0 = ArrayList_init();
              var $receiver_1 = reversedArray(WindowState$values());
              var tmp$_8;
              for (tmp$_8 = 0; tmp$_8 !== $receiver_1.length; ++tmp$_8) {
                var element_4 = $receiver_1[tmp$_8];
                $receiver_0.add_11rb$(new Pair(element_4, element.getAttribute(this$VisibilitySelector_0.getAttributeName_mk5ry$(element_4))));
              }
              var tmp$_9, tmp$_0_1;
              var index = 0;
              tmp$_9 = $receiver_0.iterator();
              while (tmp$_9.hasNext()) {
                var item = tmp$_9.next();
                var index_0 = (tmp$_0_1 = index, index = tmp$_0_1 + 1 | 0, tmp$_0_1);
                action$break_0: do {
                  var tmp$_10, tmp$_11;
                  if (item.second == null) {
                    var $receiver_2 = slice($receiver_0, new IntRange(index_0 + 1 | 0, $receiver_0.size - 1 | 0));
                    var destination_1 = ArrayList_init(collectionSizeOrDefault($receiver_2, 10));
                    var tmp$_12;
                    tmp$_12 = $receiver_2.iterator();
                    while (tmp$_12.hasNext()) {
                      var item_0 = tmp$_12.next();
                      destination_1.add_11rb$(item_0.second);
                    }
                    var tmp$result;
                    tmp$break: do {
                      var tmp$_13;
                      tmp$_13 = destination_1.iterator();
                      while (tmp$_13.hasNext()) {
                        var element_5 = tmp$_13.next();
                        if (element_5 != null) {
                          tmp$result = element_5;
                          break tmp$break;
                        }
                      }
                      tmp$result = null;
                    }
                     while (false);
                    if ((tmp$_10 = tmp$result) != null) {
                      element.setAttribute(this$VisibilitySelector_0.getAttributeName_mk5ry$(item.first), tmp$_10);
                      break action$break_0;
                    }
                    var $receiver_3 = reversed(slice($receiver_0, new IntRange(0, index_0 - 1 | 0)));
                    var destination_2 = ArrayList_init(collectionSizeOrDefault($receiver_3, 10));
                    var tmp$_14;
                    tmp$_14 = $receiver_3.iterator();
                    while (tmp$_14.hasNext()) {
                      var item_1 = tmp$_14.next();
                      destination_2.add_11rb$(item_1.second);
                    }
                    var tmp$result_0;
                    tmp$break: do {
                      var tmp$_15;
                      tmp$_15 = destination_2.iterator();
                      while (tmp$_15.hasNext()) {
                        var element_6 = tmp$_15.next();
                        if (element_6 != null) {
                          tmp$result_0 = element_6;
                          break tmp$break;
                        }
                      }
                      tmp$result_0 = null;
                    }
                     while (false);
                    if ((tmp$_11 = tmp$result_0) != null) {
                      element.setAttribute(this$VisibilitySelector_0.getAttributeName_mk5ry$(item.first), tmp$_11);
                    }
                  }
                }
                 while (false);
              }
              break action$break;
            }
            var defaultAttribute = tmp$_5;
            var $receiver_4 = WindowState$values();
            var destination_3 = ArrayList_init($receiver_4.length);
            var tmp$_16;
            for (tmp$_16 = 0; tmp$_16 !== $receiver_4.length; ++tmp$_16) {
              var item_2 = $receiver_4[tmp$_16];
              destination_3.add_11rb$(this$VisibilitySelector_0.getAttributeName_mk5ry$(item_2));
            }
            var destination_4 = ArrayList_init();
            var tmp$_17;
            tmp$_17 = destination_3.iterator();
            while (tmp$_17.hasNext()) {
              var element_7 = tmp$_17.next();
              var it = element.getAttribute(element_7);
              if (!Kotlin.equals(it, 'true') && !Kotlin.equals(it, 'false'))
                destination_4.add_11rb$(element_7);
            }
            var tmp$_18;
            tmp$_18 = destination_4.iterator();
            while (tmp$_18.hasNext()) {
              var element_8 = tmp$_18.next();
              element.setAttribute(element_8, defaultAttribute.toString());
            }
          }
           while (false);
        }
      }
      return Unit;
    };
  }
  VisibilitySelector.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'VisibilitySelector',
    interfaces: [BaseSelector]
  };
  function WindowState(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function WindowState_initFields() {
    WindowState_initFields = function () {
    };
    new WindowState$XS();
    new WindowState$SM();
    new WindowState$MD();
    new WindowState$LG();
    new WindowState$XL();
  }
  function WindowState$XS() {
    WindowState$XS_instance = this;
    WindowState.call(this, 'XS', 0);
  }
  WindowState$XS.prototype.getBreakPoint = function () {
    return 0;
  };
  WindowState$XS.prototype.getSuffix = function () {
    return 'xs';
  };
  WindowState$XS.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'XS',
    interfaces: [WindowState]
  };
  var WindowState$XS_instance = null;
  function WindowState$XS_getInstance() {
    WindowState_initFields();
    return WindowState$XS_instance;
  }
  function WindowState$SM() {
    WindowState$SM_instance = this;
    WindowState.call(this, 'SM', 1);
  }
  WindowState$SM.prototype.getBreakPoint = function () {
    return 768;
  };
  WindowState$SM.prototype.getSuffix = function () {
    return 'sm';
  };
  WindowState$SM.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'SM',
    interfaces: [WindowState]
  };
  var WindowState$SM_instance = null;
  function WindowState$SM_getInstance() {
    WindowState_initFields();
    return WindowState$SM_instance;
  }
  function WindowState$MD() {
    WindowState$MD_instance = this;
    WindowState.call(this, 'MD', 2);
  }
  WindowState$MD.prototype.getBreakPoint = function () {
    return 768;
  };
  WindowState$MD.prototype.getSuffix = function () {
    return 'md';
  };
  WindowState$MD.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'MD',
    interfaces: [WindowState]
  };
  var WindowState$MD_instance = null;
  function WindowState$MD_getInstance() {
    WindowState_initFields();
    return WindowState$MD_instance;
  }
  function WindowState$LG() {
    WindowState$LG_instance = this;
    WindowState.call(this, 'LG', 3);
  }
  WindowState$LG.prototype.getBreakPoint = function () {
    return 992;
  };
  WindowState$LG.prototype.getSuffix = function () {
    return 'lg';
  };
  WindowState$LG.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'LG',
    interfaces: [WindowState]
  };
  var WindowState$LG_instance = null;
  function WindowState$LG_getInstance() {
    WindowState_initFields();
    return WindowState$LG_instance;
  }
  function WindowState$XL() {
    WindowState$XL_instance = this;
    WindowState.call(this, 'XL', 4);
  }
  WindowState$XL.prototype.getBreakPoint = function () {
    return 1200;
  };
  WindowState$XL.prototype.getSuffix = function () {
    return 'xl';
  };
  WindowState$XL.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'XL',
    interfaces: [WindowState]
  };
  var WindowState$XL_instance = null;
  function WindowState$XL_getInstance() {
    WindowState_initFields();
    return WindowState$XL_instance;
  }
  WindowState.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'WindowState',
    interfaces: [Enum]
  };
  function WindowState$values() {
    return [WindowState$XS_getInstance(), WindowState$SM_getInstance(), WindowState$MD_getInstance(), WindowState$LG_getInstance(), WindowState$XL_getInstance()];
  }
  WindowState.values = WindowState$values;
  function WindowState$valueOf(name) {
    switch (name) {
      case 'XS':
        return WindowState$XS_getInstance();
      case 'SM':
        return WindowState$SM_getInstance();
      case 'MD':
        return WindowState$MD_getInstance();
      case 'LG':
        return WindowState$LG_getInstance();
      case 'XL':
        return WindowState$XL_getInstance();
      default:Kotlin.throwISE('No enum constant net.matsudamper.selector.WindowState.' + name);
    }
  }
  WindowState.valueOf_61zpoe$ = WindowState$valueOf;
  var package$net = _.net || (_.net = {});
  var package$matsudamper = package$net.matsudamper || (package$net.matsudamper = {});
  var package$selector = package$matsudamper.selector || (package$matsudamper.selector = {});
  package$selector.BaseSelector = BaseSelector;
  package$selector.ClassSelector_init = ClassSelector_init;
  package$selector.ClassSelector = ClassSelector;
  package$selector.Selector_init = Selector_init;
  package$selector.Selector = Selector;
  Object.defineProperty(package$selector, 'selector', {
    get: function () {
      return selector;
    }
  });
  package$selector.forEach_kskzji$ = forEach;
  package$selector.toArray_sg7yuv$ = toArray;
  package$selector.VisibilitySelector = VisibilitySelector;
  Object.defineProperty(WindowState, 'XS', {
    get: WindowState$XS_getInstance
  });
  Object.defineProperty(WindowState, 'SM', {
    get: WindowState$SM_getInstance
  });
  Object.defineProperty(WindowState, 'MD', {
    get: WindowState$MD_getInstance
  });
  Object.defineProperty(WindowState, 'LG', {
    get: WindowState$LG_getInstance
  });
  Object.defineProperty(WindowState, 'XL', {
    get: WindowState$XL_getInstance
  });
  package$selector.WindowState = WindowState;
  Object.defineProperty(ClassSelector.prototype, 'elementName', Object.getOwnPropertyDescriptor(BaseSelector.prototype, 'elementName'));
  ClassSelector.prototype.getAttributeName_mk5ry$ = BaseSelector.prototype.getAttributeName_mk5ry$;
  Object.defineProperty(VisibilitySelector.prototype, 'elementName', Object.getOwnPropertyDescriptor(BaseSelector.prototype, 'elementName'));
  VisibilitySelector.prototype.getAttributeName_mk5ry$ = BaseSelector.prototype.getAttributeName_mk5ry$;
  selector = Selector_init();
  Kotlin.defineModule('selector', _);
  return _;
}(typeof selector === 'undefined' ? {} : selector, kotlin);
