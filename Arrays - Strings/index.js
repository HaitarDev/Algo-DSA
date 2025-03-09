// IS PALINDROMES 
// IF THE REVERSE STR IS EQUAL TO THE ORIGINAL ONE THEN THAT STR IS PALINDROME 
// E.G CDDC === CDDC ; ABBA === ABBA;       HELLO !== OLLEH

// function isPalindromes(str) {
//   const reverseStr = str.split("").reverse().join("").toLowerCase();
//   if (reverseStr === str.toLowerCase()) {
//     return true;
//   } else return false
// }
//
// console.log(isPalindromes("hello"))
// O(N) time complexity;    O(N) space complexity



//REVERSE INTEGERS
//E.G 123 === 321; -123 === -321; 120 === 021

// function reverseInt(int) {
//   return +(int.toString().split("").reverse().join(""))
//
// }
// console.log(reverseInt(123))


// CAPITALIZE FIRSTS LETTER
// E.G "hello world" === "Hello World"
//
// function capitalizeLetter(str) {
//   return str.split(" ").map(word => {
//     return word[0].toUpperCase() + word.slice(1)
//   }).join(" ")
// }
//
// console.log(capitalizeLetter("hello world"))






// MAXPROFIT
// BUY IN LOWEST DAY AND SELL IN HIGHEST DAY
// E.G [7,1,5,3,6,4] === 5
// function maxProfit(prices) {
//   let lowest = 0;
//   let highest = 0;
// //l 
//   //j
//   for (let i = 0; i < prices.length; i++) {
//     let j = i + 1;
//
// // E.G [7,1,5,3,6,4] === 5
//     if (prices[i] < prices[j]) {
//       lowest = prices[i];
//       highest = prices[j]
//       j++
//     } if else (prices[i] > prices[j] ) {
//     lowest = prices[j]
//       j++
//     }
//
//   }
// }
//
// [7, 1, 5, 3, 6, 4]



//SUM
// function isSum(arr1, arr2) {
//   // change arr to objects
//   const obj1 = {}
//   const obj2 = {}
//   for (let i of arr1) {
//     obj1[i] = obj1[i] ? obj1[i] + 1 : 1
//   }
//   for (let i of arr2) {
//     obj2[i] = obj2[i] ? obj2[i] + 1 : 1
//   }
//   // check if obj1[i] ** 2 is in the obj2 and if it equal to obj2[i]
//
//   for (let i = 0; i < arr1.length; i++) {
//     console.log("key", arr1[i], "--value", obj1[arr1[i]])
//     if (obj2[arr1[i] ** 2] === obj1[arr1[i]]) {
//       continue 
//     } else return false
//   }
//   return true
// }
// console.log(isSum([1, 2, 3, 2, 5], [9, 1, 4, 4, 25]))

// { 1: 1, 2: 2, 3: 1, 5: 1 } { 9: 1, 1: 1, 4: 2, 25: 1 }



// COUNT UNIQUE VALUES;
// E.G [1,1,1,3,5,5,6,7] -> 5
// function countUniqueVal(arr) {
//   let uniqueValues = 0;
//   let left = 0;
//   let right = 1;
//   while (left < arr.length) {
//     if (arr[left] === arr[right]) {
//       right++
//     } else {
//       uniqueValues++
//       left = right
//     }
//   }
//   console.log(uniqueValues)
// }
//
// console.log(countUniqueVal([1, 1, 1, 3, 5, 5, 6, 7]))



// MAX SUB ARRAY 
// E.G  [2,6,9,2,1,8,5,6,3], 3  --> 19
// left = 0;
// max = 17 + 2 -2 = 17
// left +1
// temp = max(max, temp) 
//
// function maxSubArr(arr, num) {
//   let temp = 0;
//   let maxSum = 0; //make -Infinity if negative number allowed
//   let left = 0;
//
//   for (let i = 0; i < num; i++) {
//     temp += arr[i]
//   }
//
//   for (let i = num; i < arr.length; i++) {
//     temp = temp + arr[i] - arr[left]
//     console.log("max", maxSum, "+arr[i]", arr[i], "-arr[left]", arr[left])
//     maxSum = Math.max(maxSum, temp)
//     left++
//   }
//   return maxSum
//
// }
// console.log(maxSubArr([2, 6, 9, 2, 1, 8, 5, 6, 3], 3))
//
//
//



// function romanToInt(s) {
//   let number = 0;
//   let jump = false;
//   const romanObj = {
//     I: 1,
//     V: 5,
//     X: 10,
//     L: 50,
//     C: 100,
//     D: 500,
//     M: 1000,
//   }
//
//   for (let i = s.length - 1; i >= 0; i--) {
//     let numRom = s[i]
//     let nextRom = s[i - 1]
//     if (jump === true) {
//       jump = false;
//       continue
//     }
//     if (romanObj[numRom] > romanObj[nextRom]) {
//       console.log("double number")
//       number = number + (romanObj[numRom] - romanObj[nextRom])
//       console.log(number)
//       jump = true
//     } else number += romanObj[numRom]
//   }
//   return number
// };
//
//
// console.log(romanToInt("MCMXCIV"))
//


// function lengthOfLastWord(s) {
//   const arr = s.trim().split(" ");
//   let lastWordConsisten = ''
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== '') {
//       lastWordConsisten = arr[i]
//     }
//   }
//
//   return lastWordConsisten.length
// };
// console.log(lengthOfLastWord("Hello World    body"))


// function canJump(nums) {
//   if (nums.length === 1) return true;
//   let i = 1;
//   let countJumps = nums[i];
//   const length = nums.length - 1;
//   console.log(countJumps)
//   console.log(length)
//   while (i <= length) {
//     console.log(countJumps)
//     if (nums[i] === 0) return false;
//     if (countJumps >= length) {
//       console.log("true")
//       return true
//     }
//     countJumps += i;
//     console.log(countJumps)
//     if (countJumps >= length) return true;
//     if (nums[countJumps] === 0) {
//       i++;
//       countJumps = nums[i]
//     }
//   }
// };
// console.log(canJump([1, 2]))


// function containsDuplicate(nums) {
//   let i = 0;
//   let j = 1;
//   while (i <= nums.length - 1) {
//     if (nums[i] === nums[j]) return true;
//     if (j >= nums.length - 1) {
//       i++;
//       j = i + 1;
//     } else j++
//   }
//   return false
// };
//
// console.log(containsDuplicate([1, 2, 3, 1]))


// function groupAnagrams(strs) {
//   let result = {}
//   let sorted = strs.map(str => str.split("").sort().join(""))
//
//   for (let i = 0; i < sorted.length; i++) {
//     if (!result[sorted[i]]) {
//       result[sorted[i]] = [strs[i]]
//     } else result[sorted[i]].push(strs[i])
//   }
//   return Object.values(result)
// };
// console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))



// function topKFrequent(nums, k) {
//   let res = []
//   let map = {}
//   for (let i = 0; i < nums.length; i++) {
//     map[nums[i]] = (map[nums[i]] || 0) + 1
//   }
//
//   let keys = Object.entries(map).sort((a, b) => b[1] - a[1])
//   console.log(keys)
//   for (let i = 0; i < k; i++) {
//     res.push(parseInt(keys[i][0]))
//   }
//   return res
// };
//
// console.log(topKFrequent(
//   [4, 1, -1, 2, -1, 2, 3]
//   , 2))


// 238. Product of Array Except Self
function productExceptSelf(nums) {
  let prefix = [1]
  let prefix2 = [1]
  let j = 0;
  let res = []

  for (let i = 0; i < nums.length - 1; i++) {
    prefix.push(prefix[i] * nums[i])
  }

  for (let i = nums.length - 1; i > 0; i--) {
    prefix2.push(nums[i] * prefix2[j])
    j++
  }
  prefix2.reverse()

  for (let i = 0; i < nums.length; i++) {
    res.push(prefix[i] * prefix2[i])
  }

  return res
}
console.log(productExceptSelf([-1, 1, 0, -3, 3]))
//  0  1  2   3
// [1, 1, 2, 6]
// [1, 4, 12, 24 => reverse : [24, 12, 4, 1]
// [24,12, 8, 6]














