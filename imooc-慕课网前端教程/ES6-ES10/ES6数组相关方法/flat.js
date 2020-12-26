// flat() 方法，对多维数组进行扁平化操作，而且可以对数组中的空项进行移除。
/**
 * 使用 flat() 方法会接收一个参数，这个参数是数值类型，是要处理扁平化数组的深度，生成后的新数组是独立存在的，不会对原数组产生影响。
 * 由此我们也可以使用它深拷贝一个数组
 */
let arr = [1, 2, [3, 4, [5, 6]]];
console.log(arr);
console.log(arr.flat());
console.log(arr.flat(2));
// 上面的代码定义了一个层嵌套的数组，默认情况下只会拍平一层数组，也就是把原来的三维数组降低到了二维数组。在传入的参数为 2 时，则会降低两维，成为一个一维数组。

// 使用 Infinity，可展开任意深度的嵌套数组
let arr1 = [1, 2, [3, 4, [5, 6, [7, 8]]]];
console.log(arr1.flat(Infinity));  // [1, 2, 3, 4, 5, 6, 7, 8]


// 数组空项
// 在数组中有空项的时候，使用 flat() 会将中的空项进行移除。
let arr2 = [1, 2, , 4, 5];
console.log(arr2.flat());      // [1, 2, 4, 5]
let arr3 = [1, 2, [3, 4, , [5, , , 6, [7, , , 8]]]];
console.log(arr3.flat(Infinity));

// 深拷贝数组  使用 flat() 方法有个很好用的场景，就是深拷贝数组。
// 我们知道 flat() 拍平后的数组不会影响源数组，那么是不是我们可以传入参数 0 让其不做扁平化操作呢？答案是可以的：
console.log("=".repeat(20) + "深拷贝数组" + "=".repeat(20))
let arr4 = [1, 2, [3, 4, [5, 6]]];
let arr5 = arr4.flat(0);

console.log(arr5);

arr4.push(199);
console.log(arr4);
console.log(arr5);

arr4[2][2][0] = 1000;
console.log(arr4);
console.log(arr5);









