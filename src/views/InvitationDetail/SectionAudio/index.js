import {
  memo, createRef
} from 'react';
import PropTypes from 'prop-types';
import ReactPlayer from 'react-player';
import {
  IconWrapper, PlayIcon, PauseIcon
} from './styles';

const SectionAudio = ({ audios, play, onToggle }) => {
  const player = createRef();

  return (
    <>
      <IconWrapper onPress={onToggle}>
        {play ? (<PauseIcon />) : (<PlayIcon />) }
      </IconWrapper>
      {audios.map(audio => (
        <ReactPlayer style={{ display: 'none' }} ref={player} key={audio.id} url={audio.url} controls playing={play} />
      ))}
    </>
  );
};

SectionAudio.propTypes = {
  audios: PropTypes.array,
  onToggle: PropTypes.func
};
SectionAudio.defaultProps = {
  audios: [],
  onToggle: () => {}
};

export default memo(SectionAudio);