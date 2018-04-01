#### 用Promise封装ajax

```
//适用 get 或 post

;(function(window,undefined){
    var ajax = function (type,url,data) {
        return new Promise(function(resolve, reject){
            var xhr = new XMLHttpRequest();
            // 查询字符串
            if(type === 'get' && data){
                for(var key in data){
                    url += `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}&`;
                }
                url = url.slice(-1);
            }
            xhr.onload = function(){
                if(xhr.status >= 200 && xhr.status < 300 || xhr.status == 304){
                    resolve(xhr.response);
                } else {
                    reject(xhr.statusText);
                }
            }
            xhr.timeout = 10000;
            xhr.ontimeout = function() {
                reject('链接超时！')
            };
            xhr.onerror = function() {
                reject('网络错误！');
            };
            xhr.onabort = function() {
                reject('请求取消！');
            };
            xhr.open(type,url,true);
            if(type === 'get'){
                xhr.send(null);
            } else  {
                xhr.send(JSON.stringify(data));
            }
        })

    };
    window.ajax = ajax;
})(window,undefined)

```
test

```
ajax('get','https://www.baidu.com/')
.then(function(result){
    console.log(result);
})

```
