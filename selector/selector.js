if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'selector'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'selector'.");
}
var selector = function (_, Kotlin) {
  'use strict';
  var Unit = Kotlin.kotlin.Unit;
  var listOf = Kotlin.kotlin.collections.listOf_i5x0yv$;
  var filterNotNull = Kotlin.kotlin.collections.filterNotNull_m3lr2h$;
  var Error_0 = Kotlin.kotlin.Error;
  var Enum = Kotlin.kotlin.Enum;
  WindowState.prototype = Object.create(Enum.prototype);
  WindowState.prototype.constructor = WindowState;
  function BaseSelector() {
  }
  Object.defineProperty(BaseSelector.prototype, 'elementName', {
    get: function () {
      return 'selector-' + this.targetName;
    }
  });
  BaseSelector.prototype.getAttributeName_byp9cv$ = function (windowState) {
    if (Kotlin.equals(windowState, WindowState$SMALL_getInstance()))
      return 'data-' + this.targetName + '-s';
    else if (Kotlin.equals(windowState, WindowState$MEDIUM_getInstance()))
      return 'data-' + this.targetName + '-m';
    else
      return Kotlin.noWhenBranchMatched();
  };
  BaseSelector.$metadata$ = {
    kind: Kotlin.Kind.INTERFACE,
    simpleName: 'BaseSelector',
    interfaces: []
  };
  function ClassSelector() {
    this.targetName_6pi2g7$_0 = 'class';
  }
  Object.defineProperty(ClassSelector.prototype, 'targetName', {
    get: function () {
      return this.targetName_6pi2g7$_0;
    }
  });
  ClassSelector.prototype.stateChanged_byp9cv$ = function (windowState) {
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
      item.className = (tmp$_3 = item.getAttribute(this.getAttributeName_byp9cv$(windowState))) != null ? tmp$_3 : '';
    }
  };
  ClassSelector.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ClassSelector',
    interfaces: [BaseSelector]
  };
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
      if (item.getAttribute($this.getAttributeName_byp9cv$(WindowState$MEDIUM_getInstance())) == null) {
        tmp$_3 = item.getAttribute('class');
        if (tmp$_3 == null) {
          continue;
        }
        var classItem = tmp$_3;
        item.setAttribute($this.getAttributeName_byp9cv$(WindowState$MEDIUM_getInstance()), classItem);
      }
    }
    return $this;
  }
  function Selector() {
    this.SmallBreakPoint = 800;
    this.selectors = this.selectors;
    this.windowState_0 = WindowState$MEDIUM_getInstance();
    this.selectorRoot_0 = new Selector$selectorRoot$ObjectLiteral(this);
  }
  Selector.prototype.getWindowState_0 = function () {
    if (window.innerWidth <= this.SmallBreakPoint)
      return WindowState$SMALL_getInstance();
    else
      return WindowState$MEDIUM_getInstance();
  };
  function Selector$selectorRoot$ObjectLiteral(this$Selector) {
    this.this$Selector = this$Selector;
  }
  Selector$selectorRoot$ObjectLiteral.prototype.handleEvent = function (event) {
    var tmp$;
    var beforeWindowState = this.this$Selector.windowState_0;
    var tmp$_0 = this.this$Selector;
    var $receiver = this.this$Selector.getWindowState_0();
    if ($receiver === beforeWindowState)
      return;
    tmp$_0.windowState_0 = $receiver;
    tmp$ = this.this$Selector.selectors.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      item.stateChanged_byp9cv$(this.this$Selector.windowState_0);
    }
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
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
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
    this.targetName_u00erl$_0 = 'visibility';
    var tmp$, tmp$_0;
    (tmp$_0 = (tmp$ = document.body) != null ? tmp$.getElementsByTagName(this.elementName) : null) != null ? (forEach(tmp$_0, VisibilitySelector_init$lambda(this)), Unit) : null;
    this.stateChanged_byp9cv$(this.windowState);
  }
  Object.defineProperty(VisibilitySelector.prototype, 'targetName', {
    get: function () {
      return this.targetName_u00erl$_0;
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
          tmp$_3 = element.getAttribute(this$VisibilitySelector_0.getAttributeName_byp9cv$(closure$windowState_0));
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
  VisibilitySelector.prototype.stateChanged_byp9cv$ = function (windowState) {
    var tmp$, tmp$_0;
    (tmp$_0 = (tmp$ = document.body) != null ? tmp$.getElementsByTagName(this.elementName) : null) != null ? (forEach(tmp$_0, VisibilitySelector$stateChanged$lambda(windowState, this)), Unit) : null;
  };
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
          var $receiver = WindowState$values();
          var destination = ArrayList_init();
          var tmp$_3;
          for (tmp$_3 = 0; tmp$_3 !== $receiver.length; ++tmp$_3) {
            var element_0 = $receiver[tmp$_3];
            var tmp$_0_0;
            if ((tmp$_0_0 = element.getAttribute(this$VisibilitySelector_0.getAttributeName_byp9cv$(element_0))) != null) {
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
          else
            tmp$_5 = true;
          var defaultAttribute = tmp$_5;
          var $receiver_0 = WindowState$values();
          var destination_1 = ArrayList_init($receiver_0.length);
          var tmp$_8;
          for (tmp$_8 = 0; tmp$_8 !== $receiver_0.length; ++tmp$_8) {
            var item = $receiver_0[tmp$_8];
            destination_1.add_11rb$(this$VisibilitySelector_0.getAttributeName_byp9cv$(item));
          }
          var destination_2 = ArrayList_init();
          var tmp$_9;
          tmp$_9 = destination_1.iterator();
          while (tmp$_9.hasNext()) {
            var element_4 = tmp$_9.next();
            var it = element.getAttribute(element_4);
            if (!Kotlin.equals(it, 'true') && !Kotlin.equals(it, 'false'))
              destination_2.add_11rb$(element_4);
          }
          var tmp$_10;
          tmp$_10 = destination_2.iterator();
          while (tmp$_10.hasNext()) {
            var element_5 = tmp$_10.next();
            element.setAttribute(element_5, defaultAttribute.toString());
          }
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
    WindowState$SMALL_instance = new WindowState('SMALL', 0);
    WindowState$MEDIUM_instance = new WindowState('MEDIUM', 1);
  }
  var WindowState$SMALL_instance;
  function WindowState$SMALL_getInstance() {
    WindowState_initFields();
    return WindowState$SMALL_instance;
  }
  var WindowState$MEDIUM_instance;
  function WindowState$MEDIUM_getInstance() {
    WindowState_initFields();
    return WindowState$MEDIUM_instance;
  }
  WindowState.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'WindowState',
    interfaces: [Enum]
  };
  function WindowState$values() {
    return [WindowState$SMALL_getInstance(), WindowState$MEDIUM_getInstance()];
  }
  WindowState.values = WindowState$values;
  function WindowState$valueOf(name) {
    switch (name) {
      case 'SMALL':
        return WindowState$SMALL_getInstance();
      case 'MEDIUM':
        return WindowState$MEDIUM_getInstance();
      default:Kotlin.throwISE('No enum constant WindowState.' + name);
    }
  }
  WindowState.valueOf_61zpoe$ = WindowState$valueOf;
  _.BaseSelector = BaseSelector;
  _.ClassSelector_init = ClassSelector_init;
  _.ClassSelector = ClassSelector;
  _.Selector_init = Selector_init;
  _.Selector = Selector;
  Object.defineProperty(_, 'selector', {
    get: function () {
      return selector;
    }
  });
  _.forEach_kskzji$ = forEach;
  _.toArray_sg7yuv$ = toArray;
  _.VisibilitySelector = VisibilitySelector;
  Object.defineProperty(WindowState, 'SMALL', {
    get: WindowState$SMALL_getInstance
  });
  Object.defineProperty(WindowState, 'MEDIUM', {
    get: WindowState$MEDIUM_getInstance
  });
  _.WindowState = WindowState;
  Object.defineProperty(ClassSelector.prototype, 'elementName', Object.getOwnPropertyDescriptor(BaseSelector.prototype, 'elementName'));
  ClassSelector.prototype.getAttributeName_byp9cv$ = BaseSelector.prototype.getAttributeName_byp9cv$;
  Object.defineProperty(VisibilitySelector.prototype, 'elementName', Object.getOwnPropertyDescriptor(BaseSelector.prototype, 'elementName'));
  VisibilitySelector.prototype.getAttributeName_byp9cv$ = BaseSelector.prototype.getAttributeName_byp9cv$;
  selector = Selector_init();
  Kotlin.defineModule('selector', _);
  return _;
}(typeof selector === 'undefined' ? {} : selector, kotlin);
