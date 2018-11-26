### JSONP的封装

>使用
>JSONP('/',{name:'hellow'},fn);

```
(function(window,document){
    function JSONP(url,data,callback) {
        var cb = `jsonp${Date.now()}`
        var s  = document.createElement('script');
        var time = 10000; 

        //拼接查询字符串
        var _option = '';
        for(var key in data){
            _option += `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}&`;
        }

        // 超时处理
        var overtime = setTimeout(function(){
            clear();           
        },time)

        // 清除标签
        var clear = function () {
            document.body.removeChild(s);
            window[cb] = null;
            clearTimeout(overtime);
        }
        // 添加全局函数
        window[cb] = function (data) {
            overtime();
            callback(data);
        }
        // script添加到全局
        s.src = `${url}?${_option}callback=${cb}`;
        document.body.appendChild(s);
    }
    window.JSONP = JSONP;
})(window,document)

```