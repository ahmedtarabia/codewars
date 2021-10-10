// Given two arrays of strings, return the number of times each string of the second 
//array appears in the first array.
//use map length and filter
// Example
array1 = ['abc', 'abc', 'xyz', 'cde', 'uvw']
array2 = ['abc', 'cde', 'uap']
function countArray(array1, array2){
 let newArr = array2.map( l => array1.filter(x => x=== l).length)
 return newArr
}

countArray(['abc', 'abc','xyz','abcd','cde'],['abc', 'cde', 'uap'])

// Test.assertDeepEquals(solve(['abc', 'abc','xyz','abcd','cde'], ['abc', 'cde', 'uap']), [2, 1, 0]);
// Test.assertDeepEquals(solve(['abc', 'xyz','abc', 'xyz','cde'], ['abc', 'cde', 'xyz']), [2, 1, 2]);
// Test.assertDeepEquals(solve(['quick', 'brown', 'fox', 'is', 'quick'], ['quick', 'abc', 'fox']), [2, 0, 1]);


//Other way to solve it:
const findNumOfAppears = (arr1, arr2) => 
arr2.map( x => arr1.filter(y => y === x).length )

console.log(findNumOfAppears(['abc', 'abc','xyz','abcd','cde'], ['abc', 'cde', 'uap']))