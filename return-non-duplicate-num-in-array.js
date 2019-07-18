var singleNumber = function(nums) {
    let numbers = {}
    for (let i=0; i<nums.length;i++){
        if(!numbers[nums[i]]){
            numbers[nums[i]] = true
        }
        else{
            delete numbers[nums[i]]
        }
    }
    return Object.keys(numbers)[0]
};


// Input: [2,2,1]
///Output: 1
