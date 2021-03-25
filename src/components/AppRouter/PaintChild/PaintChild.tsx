import React from 'react';
import { useParams } from 'react-router-dom';

import Paint from '../../Paint';

const PaintChild = () => {
  const { id } = useParams();

  return <Paint id={id} />;
};

export default PaintChild;
