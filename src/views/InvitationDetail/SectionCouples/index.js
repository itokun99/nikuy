import { memo } from 'react';
import PropTypes from 'prop-types';
import {
  Couple, View, Container, Text, Gap
} from 'components';
import { isEven } from 'utils';

const SectionCouples = ({ couples }) => (
  <View>
    <Container>
      <Text size="m" bold>Pasangan Mempelai</Text>
      <Gap height="m" />
      {couples.map((couple, index) => (
        <Couple
          position={isEven(index + 1) ? 'right' : 'left'}
          key={couple.id}
          photo={couple.photo}
          name={couple.name}
          description={couple.description}
        />
      ))}
    </Container>
  </View>
);

SectionCouples.propTypes = {
  couples: PropTypes.array
};
SectionCouples.defaultProps = {
  couples: []
};

export default memo(SectionCouples);