import {
  Modal, Button, Container, Gap
} from 'components';
import PropTypes from 'prop-types';

const SectionBottom = ({ show, onPressAmplop, onPressMessage }) => (
  <>
    <Modal visible={show} backdrop={false} closeButton={false} enableScroll>
      <Container>
        <Button onPress={onPressMessage} title="Kirim Ucapan" />
        <Gap height="xs" />
        <Button onPress={onPressAmplop} title="Kirim Amplop" color="secondary" />
      </Container>
      <Gap height="m" />
    </Modal>
  </>
);

SectionBottom.propTypes = {
  show: PropTypes.bool,
  onPressAmplop: PropTypes.func,
  onPressMessage: PropTypes.func
};
SectionBottom.defaultProps = {
  show: false,
  onPressAmplop: () => {},
  onPressMessage: () => {}
};

export default SectionBottom;