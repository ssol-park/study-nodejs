const outer = () => {
  const name = 'Sora';

  const inner = () => {
    console.log(name);
  };

  return inner();
};

const outerFunc = outer();
