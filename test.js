const bubbleSortArray = [2, 6, 1, 12, 20, 5, 3, 7, 18];

//Bubble sort

// for (let i = 0; i < bubbleSortArray.length; i++) {

//   for (let j = 0; j < bubbleSortArray.length; j++) {
//     if (bubbleSortArray[j] > bubbleSortArray[j+1] ) {
//             let max = bubbleSortArray[j]
//             bubbleSortArray[j] = bubbleSortArray[j+1]
//             bubbleSortArray[j+1]= max

//     }

//   }

// }

// Insection Sort

// for (let i = 1; i < bubbleSortArray.length; i++) {
//   let catchItem = bubbleSortArray[i];
//   let j = i - 1;

//   for (; j >= 0 && bubbleSortArray[j] > catchItem; j--) {
//     bubbleSortArray[j + 1] = bubbleSortArray[j];
//   }

//   bubbleSortArray[j + 1] = catchItem;
// }



  
  for (let i = 0; i < bubbleSortArray.length - 1; i++) {
      let minIndex = i;

    
      for (let j = i + 1; j <  bubbleSortArray.length; j++) {
          if (bubbleSortArray[j] < bubbleSortArray[minIndex]) {
              minIndex = j;
          }
      }

      if (minIndex !== i) {
          let temp = bubbleSortArray[i];
          bubbleSortArray[i] = bubbleSortArray[minIndex];
          bubbleSortArray[minIndex] = temp;
      }
  }
  
  console.log(bubbleSortArray, "new");
  
