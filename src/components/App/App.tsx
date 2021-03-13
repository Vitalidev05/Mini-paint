import React, { useEffect } from 'react';

import { useActions } from '../../hooks/useActions';
import { useStates } from '../../hooks/useStates';

const App = () => {
  const { testfunc } = useActions();
  const { test } = useStates(x => x.test);

  useEffect(() => {
    testfunc();
  }, []);

  return <div>{test}</div>;
};

export default App;
