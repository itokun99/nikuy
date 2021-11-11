import React from 'react';
import { Wrapper } from './styles';

const Shimmer = ({ ...props }) => <Wrapper {...props} />;

export default React.memo(Shimmer);