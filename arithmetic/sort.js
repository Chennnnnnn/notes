// 冒泡排序
function bubbleSort(arr) {
    var len = arr.length
    for (var i = 0; i < len; i++) {
        for (var j = 0; j < len - 1 - i; j++) {
            if (a[j] > a[j + 1]) {
                var temp = a[j + 1];
                a[j + 1] = a[j];
                a[j] = temp;
            }
        }
    }
    return arr;
}

//冒泡排序优化,添加标志位
function bubbleSort2(arr) {
    for (var i = arr.length - 1; i > 0;) {
        var p = 0;
        for (var j = 0; j < i; j++) {
            if (a[j] > a[j + 1]) {
                p = j;
                var temp = a[j + 1];
                a[j + 1] = a[j];
                a[j] = temp;
            }
        }
        i = p;
    }
    return arr;
}

//选择排序
function SelectionSort(arr) {
    var minIndex = 0,
        temp;
    for (var i = 0; i < arr.length; i++) {
        minIndex = i;
        for (var j = i; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j
            }
        }
        temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
    return arr;
}

//直接插入排序
function InsertSort(arr) {
    var len = arr.length,
        temp;
    for (var i = 1; i < len; i++) {
        temp = arr[i];
        if (temp < a[i - 1]) {
            for (var j = i - 1; j >= 0; j--) {
                if (arr[j] > temp) {
                    arr[j + 1] = arr[j];
                }
            }
            arr[j + 1] = temp;
        }
    }
    return arr;
}

//希尔排序
function shellSort(arr) {
    var len = arr.length,
        gap = Math.floor(len / 2), //增量   
        temp;
    while (gap > 0) {
        //每一次增量排序
        for (var i = gap; i < len; i++) {
            temp = arr[i]
            for (var j = i; j >= 0; j -= gap) {
                if (arr[j - gap] > arr[j]) {
                    temp = arr[j - gap];
                    arr[j - gap] = arr[j];
                    arr[j] = temp;
                } else {
                    break
                } //去掉不必要的比较
            }
        }
        gap = Math.floor(gap / 2);
    }
    return arr
}

//快速排序
function quickSort(arr) {
    var temp, temp2;
    //数组分区,left-right,数组排序区间
    function partition(array, left, right) {
        var storeIndex = left;
        var pivot = array[right];
        for (var i = left; i < right; i++) {
            if (array[i] < pivot) {
                temp = array[i];
                array[i] = array[storeIndex];
                array[storeIndex] = temp;
                storeIndex++
            }
        }
        temp2 = array[storeIndex];
        array[storeIndex] = array[right];
        array[right] = temp2;
        return storeIndex;
    }
    //递归调用分区排序
    function sort(array, left, right) {
        if (left > right) {
            return;
        }
        var storeIndex = partition(array, left, right);
        sort(array, left, storeIndex - 1);
        sort(array, storeIndex + 1, right);
    }
    sort(arr, 0, arr.length - 1);
    return arr;

}


//归并排序
function mergeSort(arr, first, last) {
    //递归条件判断
    if (last - first < 1) {
        return;
    }

    first = first || 0;
    last = last || arr.length - 1;
    console.log(first, last)
    //拆分数组
    var middle = Math.floor((first + last) / 2);
    mergeSort(arr, first, middle);
    mergeSort(arr, middle + 1, last);

    var f = first,
        m = middle,
        i, temp;
    while (f <= m && m + 1 <= last) {
        if (arr[f] >= arr[m + 1]) { // 这里使用了插入排序的思想
            temp = arr[m + 1];
            for (i = m; i >= f; i--) {
                arr[i + 1] = arr[i];
            }
            arr[f] = temp;
            m++
        } else {
            f++
        }
    }
    return arr;
}


//堆排序
function heapSort() {
    //维护堆
    function heapify() {
        let 
    }
}

var a = [6, 5, 9, 1, 7, 0, 2, 4];
console.log(mergeSort(a));

















var add = (function () {
    var a = 0;
    return function () {
        return ++a;
    }
})()