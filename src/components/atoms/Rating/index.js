import PropTypes from 'prop-types';
import React from 'react';
import Icon from '../Icon';
import { Counter, Wrapper } from './styles';

const Rating = ({
  maxRating, rate, totalCount, iconSize
}) => {
  const [rates, setRates] = React.useState([true, false, false, false, false]);

  const getInitialRate = React.useCallback(() => {
    const data = [];
    let i = 1;
    while (i <= maxRating) {
      let initialValue = false;
      if (i <= rate) {
        initialValue = true;
      }
      data.push(initialValue);
      i += 1;
    }
    setRates(data);
    return data;
  }, [rate, maxRating]);

  React.useEffect(() => {
    getInitialRate();
  }, [getInitialRate]);

  const renderTotalCount = () => {
    if (totalCount === null || typeof totalCount === 'undefined') {
      return null;
    }
    return <Counter>{`(${totalCount})`}</Counter>;
  };

  return (
    <Wrapper>
      {rates.map((val, index) => (
        <Icon
          key={Number(index)}
          icon={val ? 'ic-star' : 'ic-star-off'}
          size={iconSize}
        />
      ))}
      {renderTotalCount()}
    </Wrapper>
  );
};

Rating.propTypes = {
  rate: PropTypes.number,
  maxRating: PropTypes.number,
  totalCount: PropTypes.number,
  iconSize: PropTypes.number
};
Rating.defaultProps = {
  maxRating: 5,
  rate: 0,
  totalCount: null,
  iconSize: 32
};

export default React.memo(Rating);