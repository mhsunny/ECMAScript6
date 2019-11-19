import * as math from './math.js';
import {
    max
} from './max.js';

console.log("Max: " + max(50, 10)); // 50

console.log(math.sumAll(50, 10)); // 60
console.log(math.subtractAll(50, 10)); // 40
console.log(math.multiplyAll(50, 10)); // 500
console.log(math.divideAll(50, 10)); // 5
console.log(math.findModulus(50, 15)); // 5