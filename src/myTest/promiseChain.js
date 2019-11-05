(async function() {
  let promise = new Promise(function(resolve, reject) {
    console.log("Promise");
    resolve(0);
  });

  let ret = await promise
    .then(function(v) {
      // 注意： 这里不会等 then 执行完！ .then() 是异步的！
      console.log("F1: arg: " + v);
      console.log("Resolved.");
    })
    .then(() => {
      // WYH: 不能带参数！  这里报错了： SyntaxError: Unexpected token xxx
      console.log("then 2 in: ");
    })
    .then(v => {
      console.log("then 3 arg: " + v);
      console.log("then 3 in: ");
      return "Im F3 ret";
    })
    .then(v => {
      console.log("then 4 arg: " + v);
      console.log("then 4 in: ");
      return "XYZ";
    })
    .catch(function(e) {
      console.log("catch promise error: " + e);
    });
  console.log("ret: " + ret);
  console.log("Hi!");
})();

export default 0;
