// windowオブジェクトはない
// console.log(window);

// その代わりグローバルオブジェクト(global)が使用できる
console.log(global);

// グローバルオブジェクト(global)は記述を省略できる
setTimeout(() => {
   console.log("hello"); 
}, 1000);