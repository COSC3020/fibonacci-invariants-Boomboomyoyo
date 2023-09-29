function fib(n) {
    // Find if we are in one of the base cases
    if(n == 0){
        return [0]
    }
    // Modify this to also account for the base case for the negative Fibonacci sequence
    if(n == 1 || n == -1){
        return [0,1]
    }
    // If not base case, determine if we are in the positive or negative portion of the Fibonacci sequence
    if(n > 0) {
        arr = fib(n-1)
        arr.push(arr[arr.length-1] + arr[arr.length-2])
        return arr
    }
    // If not in positive case, we are in negative case
    // This will return the values in decreasing order of the Fibonacci sequence. I.e. [x_0, x_-1, x_-2...]
    arr2 = fib(n+1)
    arr2.push(arr2[arr2.length-2]-arr2[arr2.length-1])
    console.log(arr2)
    return arr2
}
