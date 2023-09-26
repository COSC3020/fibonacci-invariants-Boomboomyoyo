function fib(n) {
    // Find if we are in one of the base cases
    if(n == 0){
        return [0]
    }
    if(n == 1){
        return [0,1]
    }
    // Recurse otherwise
    arr = fib(n-1)
    arr.push(arr[arr.length-1] + arr[arr.length-2])
    return arr
}
