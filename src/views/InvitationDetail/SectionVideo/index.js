import { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import Plyr from 'plyr';
import {
  View,
  Container,
  Text,
  Gap
} from 'components';
import { Wrapper, Iframe } from './styles';

const SectionVideo = ({ videos }) => {
  useEffect(() => {
    Plyr.setup('.video-youtube');
  }, []);

  return (
    <View>
      <Container>
        <Text size="m" bold>Video</Text>
      </Container>
      <Gap height="m" />
      {videos.map(video => (
        <Wrapper className="video-youtube" key={video.id}>
          <Iframe
            title={`video-${video.id}`}
            src={video.url}
            width={560}
            height={315}
            frameborder={0}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        </Wrapper>
      ))}
      <Gap height="xl" />
    </View>
  );
};

SectionVideo.propTypes = {
  videos: PropTypes.array
};
SectionVideo.defaultProps = {
  videos: []
};

export default memo(SectionVideo);