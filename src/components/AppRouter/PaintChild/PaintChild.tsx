import React from 'react';
import { useParams } from 'react-router-dom';

import Paint from '../../Paint';

const PaintChild = () => {
  const { id } = useParams<{ id: string }>();

  return <Paint id={id} />;
};

export default PaintChild;
