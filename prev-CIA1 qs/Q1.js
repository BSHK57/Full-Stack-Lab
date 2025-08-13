function square(num){
    return num*num;
}

function processData(arr,callback){
    const ans = [];
    for (let i = 0; i<arr.length;i++){
        ans.push(callback(arr[i]));
    }
    return ans;

}
const inp = [1,2,3,4,5,6,7,8,9,10]
console.log(processData(inp,square))