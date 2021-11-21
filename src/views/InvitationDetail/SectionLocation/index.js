import { memo } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Container,
  Text,
  Gap
} from 'components';
import { MapWrapper, MapIframe } from './styles';

const SectionLocation = ({ location }) => (
  <View>
    <Container>
      <Text size="m" bold>Detail Lokasi</Text>
      <Gap height="m" />
      <Text size="xs" lineHeight={18}>{location.address}</Text>
      <Gap height="m" />
    </Container>

    {location && location.googlemap && (
      <MapWrapper>
        <MapIframe
          title="map"
          src={location.googlemap}
          width={480}
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        />
      </MapWrapper>
    )}
    <Gap height="l" />
  </View>
);

SectionLocation.propTypes = {
  location: PropTypes.object
};
SectionLocation.defaultProps = {
  location: {}
};

export default memo(SectionLocation);