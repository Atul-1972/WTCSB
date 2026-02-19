// function track(order, delay) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Task : " + order);
//       resolve(order); // pass value to next step
//     }, delay);
//   });
// }

// track(1, 1000)
//   .then(() => {
//     console.log("Order Confirmed");
//     return track(2, 2000);
//   })
//   .then(() => {
//     console.log("Rider Assigned");
//     return track(3, 2000);
//   })
//   .then(() => {
//     console.log("Pickup Done");
//     return track(4, 3000);
//   })
//   .then(() => {
//     console.log("Order Delivered");
//     return track(5, 4000);
//   })
//   .catch((err) => {
//     console.log("Error:", err);
//   })
//   .finally(() => {
//     console.log("finally Order Delivered");
//   });


function track(order, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Task : " + order);
      resolve(order); // pass value to next step
    }, delay);
  });
}

async function processOrder() {
  try {
    await track(1, 1000);
    console.log("Order Confirmed");

    await track(2, 2000);
    console.log("Rider Assigned");

    await track(3, 2000);
    console.log("Pickup Done");

    await track(4, 3000);
    console.log("Order Delivered");

  } catch (err) {
    console.log("Error:", err);
  } finally {
    console.log("finally Order Delivered");
  }
}

processOrder();
