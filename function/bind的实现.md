### 硬绑定
```

if (!Function.prototype.bind) {
  Function.prototype.bind = function (...arg) {
    if (typeof this !== "function") {
      throw new TypeError("error");
    }
    var oThis = arg[0]
        aArgs = arg.slice(1), 
        that = this;
    return function (...args) {
      return that.apply(oThis? 
        oThis : this || window,
        [...aArgs,...args]);
    };
  };
}

```

### 软绑定
```

if (!Function.prototype.softBind) {
  Function.prototype.softbind = function (obj) {
    var that = this;
    var args = [].slice.call(arguments, 1);
    return function () {
      return that.apply((!this || this === (window || global))?obj:this,args.concat([].slice.call(arguments)));
    }
  }
}

```