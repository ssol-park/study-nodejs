import * as _ from 'lodash';

interface IOriginal {
  something: string;
}

const original: IOriginal = {
  something: 'good',
};

// shallow copy
const shallowCopied = original;
console.log(shallowCopied === original); // true
console.log(shallowCopied.something === original.something); // true
console.log({ shallow: shallowCopied.something, original: original.something });

console.log('--------------------------');

// deep copy - 1. spread operator
const deepCopied = { ...original };

deepCopied.something = 'bad';

console.log(deepCopied === original); // fasle
console.log({ deep: deepCopied.something, original: original.something });

console.log('--------------------------');

// deep copy - 2. Object.assign()
const newDeepCopied = Object.assign({}, original);
newDeepCopied.something = 'new copy!';

console.log(newDeepCopied === original); // fasle
console.log({
  newDeepCopied: newDeepCopied.something,
  original: original.something,
});

// --> 1, 2번 방법은 2차원 객체의 deep copy가 이루어 지지 않는다.

console.log('--------------------------');

// deep copy - 3. lodash

interface IDimension {
  option: {
    a: string;
  };
}

const dimension: IDimension = {
  option: {
    a: 'a',
  },
};

const lodashCopied = _.cloneDeep(dimension);

lodashCopied.option.a = 'bbb';

console.log(lodashCopied === dimension); // false
console.log(lodashCopied.option.a === dimension.option.a); // false

// References
// https://velog.io/@recordboy/JavaScript-%EC%96%95%EC%9D%80-%EB%B3%B5%EC%82%ACShallow-Copy%EC%99%80-%EA%B9%8A%EC%9D%80-%EB%B3%B5%EC%82%ACDeep-Copy
// https://roseline.oopy.io/dev/javascript-back-to-the-basic/shallow-copy-deep-copy
