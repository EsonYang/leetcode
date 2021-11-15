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