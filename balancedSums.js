function balancedSums(arr) {
    let left_sum = 0;
    let total_sum = arr.reduce((a,b)=>{
        return a+b;
    },0);
    
    for(let i=0; i<arr.length;i++){
        let right_sum = total_sum-arr[i]-left_sum;
        if(left_sum===right_sum)return("YES");
        left_sum +=arr[i];
        
    }
    return("NO");
}
