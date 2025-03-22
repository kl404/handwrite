// function myAll(promises) {
//   return new Promise((resolve, reject) => {
//     const result = [];
//     let cnt = 0;

//     promises.forEach((promise, index) => {
//       promise.then(
//         (value) => {
//           result[index] = value;
//           cnt++;
//           if (cnt === promises.length) {
//             resolve(result);
//           }
//         },
//         (err) => {
//           reject(err);
//         }
//       );
//     });
//   });
// }

function myAny(promises){
  return new Promise((resolve, reject) => {
    const rejectRes = [];
    let cnt = 0;

    promises.forEach((promise, index) => {
        promise.then((value) =>{
          resolve(value);
        },      
        (err) => {
        rejectRes[index] = err;
        cnt++;
        if(cnt === promises.length){
          reject(rejectRes);
        }
        })
    }); 

  })
}


