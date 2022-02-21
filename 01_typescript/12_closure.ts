const outer = () => {
  const name = 'Sora';

  const inner = () => {
    console.log(name);
  };

  return inner();
};

const outerFunc = outer();

// https://developer.mozilla.org/ko/docs/Web/JavaScript/Closures
// https://velog.io/@proshy/JS%ED%81%B4%EB%A1%9C%EC%A0%B8closure%EC%99%80-%ED%81%B4%EB%A1%9C%EC%A0%B8%EC%9D%98-%EC%82%AC%EC%9A%A9-%EC%98%88%EC%A0%9C
