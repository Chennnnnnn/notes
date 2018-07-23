#### 用Promise封装ajax

```
//适用 get 或 post

;(function(window,undefined){
    var ajax = function (url,method,data) {
        return new Promise(function(resolve, reject){
            var xhr = new XMLHttpRequest();
            // 查询字符串
            if(method.toLowerCase() === 'get' && data){
                url += '?';
                for(var key in data){
                    url += `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}&`;
                }
                
                url = url.slice(0,-1);
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
            xhr.open(method,url,true);
            if(method.toLowerCase() === 'get'){
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
ajax('https://www.baidu.com/','get',{name:'chen'})
.then(function(result){
    console.log(result);
})

```

