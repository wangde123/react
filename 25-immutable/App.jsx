import React from "react";

//! lazy immutable PureComponent shouldComponentUpdate useCallback useMemo
//! 深浅拷贝

// import { Map } from "immutable";
// import { List } from "immutable";
// import { Seq } from "immutable";
// import { fromJS } from "immutable";
// import { Range } from "immutable";

const App = () => {
  // 创建immutable对象
  // const obj = Map({ a: 3, b: 4 });
  // toJS方法可以将immutable对象转成普通对象
  // 只在调试的时候用
  // console.log(obj.toJS());

  // 获取immutable对象的值, 使用get方法
  // console.log(obj.get("a"));
  // console.log(obj.get("b"));

  // 返回一个新的immutable对象的值, 使用set和update方法
  // const obj2 = obj.set("a", 5);
  // console.log(obj2.toJS());

  // const obj3 = obj.update("a", (v) => v * 2);
  // console.log(obj3.toJS());

  // const map1 = Map({ a: 3, b: 4 });
  // const map2 = Map({ a: 3, b: 4 });
  // console.log(map1 === map2); // false
  // console.log(map1.equals(map2)); // true  比的是里面的值是否完全相同

  // const map1 = Map({ a: 3, b: 4 });
  // const map2 = map1.set("a", 5);
  // console.log(map1 === map2); // false
  // const map2 = map1.set("a", 3);
  // console.log(map1 === map2); // true

  // 创建immutable数组
  // const list1 = List([1, 2]);
  // const list2 = list1.push(3, 4, 5);
  // const list3 = list2.unshift(0);
  // const list4 = list1.concat(list2, list3);
  // console.log(list4.size);

  // const map1 = Map({ a: 1, b: 2, c: 3, d: 4 });
  // const map2 = map1.map((v, k) => k.toUpperCase()).join();
  // console.log(map2);

  // immutable对象合并
  // const map1 = Map({ a: 1, b: 2, z: { x: 10, y: 20 } });
  // const map2 = Map({ b: 3, c: 4, z: { x: 30, w: 40 } });
  // const map3 = map1.merge(map2);
  // const map3 = map1.mergeDeep(map2);
  // console.log(map3);
  // const map4 = map1.merge({ abc: 123 }); // immutable对象可以合并普通对象
  // console.log(map4);

  // immutable数组合并
  // const list1 = List([1, 2, 3]);
  // const list2 = List([4, 5, 6]);
  // const array = [7, 8, 9];
  // const list3 = list1.concat(list2, array);
  // console.log(list3);
  // const list4 = [4, 5, 6].concat(list1);
  // console.log(list4);

  // Sep既可以创建对象，又可以创建数组
  // const map1 = Seq({ a: 3, b: 4 });
  // console.log(map1);
  // const list1 = Seq([1, 3, 4]);
  // console.log(list1);

  // Seq具有惰性
  // const oddSquares = Seq([1, 2, 3, 4, 5, 6, 7, 8])
  //   .filter((x) => {
  //     // [1,2,3,4,5,6,7,8]
  //     console.log("filter x:" + x);
  //     return x % 2 !== 0;
  //   })
  //   .map((x) => {
  //     // [1,3,5,7]
  //     console.log("map x:" + x);
  //     return x * x;
  //   });
  // console.log(oddSquares.get(1));

  // fromJS也可以创建对象和数组
  // fromJS可以递归地创建immutable对象
  // const map1 = Map({ a: 1, b: 2, c: { x: 3, y: 4 } });
  // console.log(map1);
  // const map2 = fromJS({ a: 1, b: 2, c: { x: 3, y: 4 } });
  // console.log(map2);

  // const map1 = fromJS({ a: { b: { c: [3, 4, 5] } } });
  // console.log(map1);
  // Map { "a": Map { "b": Map { "c": List [ 3, 4, 5 ] } } }
  // const map2 = map1.mergeDeep({ a: { b: { d: 6 } } });
  // console.log(map2);
  // console.log(map2.getIn(["a", "b", "d"]));
  // const map3 = map2.setIn(["a", "b", "d"], 9);
  // console.log(map3.toJS());
  // const map3 = map2.updateIn(["a", "b", "d"], (v) => v + 1);
  // console.log(map3.toJS());

  // const aRange = Range(1, Infinity)
  //   .skip(1000)
  //   .map((n) => -n)
  //   .filter((n) => n % 2 === 0)
  //   .take(2)
  //   .reduce((r, n) => r * n, 1);
  // console.log(aRange); // 1006008

  return (
    <>
      <h2>immutable</h2>
      <input type="range" />
    </>
  );
};

export default App;
