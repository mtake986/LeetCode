
// Mar 14 2022
// Fill a bag with up to max value as close as you can
const fillBag = (max, items) => {
  const sortedItems = items.sort((a, b) => a - b);
  // console.log(sortedItems)
  // binary search to find the closest number to halfMax

  const getCenterNum = (array) => {
    if (array.length === 1) array[0];
    let arrayLength = array.length;
    let centerNumIndex = Math.floor(arrayLength/2);
    let centerNum = array[centerNumIndex];
    return centerNum;
  }

  const divideArray = (half, centerNum, array) => {
    console.log(half, array, centerNum)
    let centerNumIndex = array.indexOf(centerNum);
    console.log(`centerNumIndex => ${centerNumIndex}`)
    if (array.length === 2) {
      const divided = array.filter((a) => a !== centerNum);
      return divided;
    }
    else {
      if (half < centerNum) {
        const divided = array.slice(0, centerNumIndex)
        if (divided.length === 0) {
          return [-1]
        } else {
          console.log(`divided => ${divided}`)
          return divided;
        }
      } else {
        const divided = array.slice(centerNumIndex+1)
        if (divided.length === 0) {
          return [-1]
        } else {
          console.log(`divided => ${divided}`)
          return divided;
        }
      }
    }
  }

  // console.log(getCenterNum(items))
  let map = [];
  let currentAmount = 0;
  const recursion = (half, newArray, map, currentAmount) => {

    console.log(`half=>${half}, newArray=>${newArray}, map=>${map}`)
    const centerNum = getCenterNum(newArray);
    if (half < 2) {
      console.log("===== temporarily done =====")
      return "half < 10"
    };
    
    if (newArray.includes(half)) {
      // call recursion again to find a number that's next closest number to the next half. I need to pass "the next half" and "newArray missing the closest number to half; length--1"
      let passingArray = newArray.filter((a) => a !== half);
      console.log(`Exact half is here!!`)
      currentAmount += half;

      let map = [];
      recursion(Math.floor(half/2), passingArray, map, currentAmount)
      
    }
    else {
      console.log(`else`)
      // if not, compare the dif to the dif in the map. if current dif is bigger than this time's dif, change it to this time's values {centerNum: dif} and move on to the next CenterNum. Keep doing this until array.length = 1

      // if no value in map yet
      if (map.length === 0) {
        map[0] = centerNum
        map[1] = Math.abs(half-centerNum)
      } 
      // if not, I need to compare to change the value inside or not
      else {
        if (Math.abs(half-centerNum) < map[1]) {
          map[0] = centerNum
          map[1] = Math.abs(half-centerNum)
        }
      }

      // need to pass a half-splitted array. 
      if (newArray.length === 1) {
        let passingArray = newArray.filter((a) => a !== newArray.length[0]);
        console.log(`No more element in array!! Next is Math.floor(half/2)=>${Math.floor(half/2)}, passingArray=>${passingArray}`)
        let map = new Map();
        recursion(Math.floor(half/2), passingArray, map, currentAmount)
      } 
      console.log("Lwt's devide array")
      recursion(half, divideArray(half, centerNum, newArray), map, currentAmount)
    }
  }


  recursion(Math.floor(max/2), items, map, currentAmount)
}

fillBag(72, [1, 3, 6, 19, 48, 24, 13, 18, 9, 36, 39, 52])