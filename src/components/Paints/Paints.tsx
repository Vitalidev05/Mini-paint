import React from 'react';

import { useStates } from '../../hooks/useStates';
import AddNewPaint from '../AddNewPaint';
import PaintRef from '../PaintRef';

const Paints = (): JSX.Element => {
  const { privatePaints } = useStates(x => x.privatePaints);

  return (
    <div>
      {privatePaints.map(x => (
        <PaintRef key={x.id} name={x.name} id={x.id} />
      ))}
      <AddNewPaint />
    </div>
  );
};

export default Paints;
