// # 1、二分查找

// 目的：在给数组中查到给定的元素，若存在，则查找成功，若没找到，则查找失败

// 首先确定的一点是二分查找的前提条件————是按照升序排列


// 按照暴力算法，可以以此从头到尾的进行比对，那样最多就要循环M（被查数组的长度）次，进行了性能的损失。时间复杂度为O(n)

// 二分法的核心思想是将对应的元素与有序数组的中间位置进行比较，若相等则查找成功，若不相等则将元素与数组的中间值比较，并且数组分成前后两部分，
// 再次进行中间值比较，依次下去最终若找到则查找成功，若未找到则失败。时间复杂度为O(logn)

// 例如：给定[5,13,19,21,37,56,64,75,80,88,92];这个数组，查找到21这个数字的下标

// 非递归版本

    function binary_search(arr, key){
        var start = 0,end = arr.length-1;
        while(start <= end){
            var mid = parseInt((end-start)/2)
            if(arr[mid] == key){
                return mid
            }else if(key > arr[mid]){
                start = mid+1
            }else if(key < arr[mid]){
                end = mid -1
            }else{
                return -1
            }
        }
    }
    var arr = [5,13,19,21,37,56,64,75,80,88,92]
    var index = binary_search(arr, 21)
    console.log(index)
// 递归方法
    function binary_search (arr, start, end, key) {
        if( start > end ){
            return -1
        }
        var mid = start + (( end - start ) >> 1 )
        if( arr[mid] == key ){
            return mid
        }else if( key > arr[mid] ){
            start = mid + 1
            return binary_search(arr, start, end, key)
        }else if( key < arr[mid] ){
            end = mid -1
            return binary_search(arr, start, end, key)
        }
    }
    var arr = [5,13,19,21,37,56,64,75,80,88,92]
    var index = binary_search(arr, 0, arr.length-1, 21)
    console.log(index)

// 如果有重复的数字，进行的兼容
function binary_search ( arr, key) {
    var start = 0 ,end = arr.length -1;
    while ( start <= end ){
        // 获取中间值
        var mid = start + ( (end - start) >> 1 )
        if( arr[mid] > key ) {
            // 如果中间值大于给定值就将末尾值等于中间值-1
            end = mid -1
        }else if( arr[mid] < key ) {
            // 如果中间值小于给定值就将起始值等于中间值+1
            start = mid +1
        }else{
            // 针对重复数字相等的问题，如果不等于最后一个，或者不等于
            if( (mid == arr.length -1) || (arr[mid+1] != key)){
                return mid
            }else {
                low = mid + 1
            }
        }
    }

}
// 以上就是二分法的核心知识点了。