### 硬绑定
```

if (!Function.prototype.bind) {
  Function.prototype.bind = function (oThis,...Args) {
    if (typeof this !== "function") {
      throw new TypeError("error");
    }
    var that = this;
    return function (...args) {
      return that.apply(oThis? 
        oThis : this || window,
        [...Args,...args]);
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