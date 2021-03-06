﻿function treeHouseCompare(a,b) {
    areaHouse = a * a +((a*(a*2/3)))/2;
    areaTree = b * (b / 3) + ((b / 3* 2) * (b / 3* 2) * Math.PI);
    return (areaHouse > areaTree? "house/" + areaHouse.toFixed(2): "tree/" + areaTree.toFixed(2));
}

console.log(treeHouseCompare(3, 2));
console.log(treeHouseCompare(3, 3));
console.log(treeHouseCompare(4, 5));