import PropTypes from 'prop-types';
import {
  FormGroup, Button, Container, FormInput, Gap
} from 'components/atoms';

const FormVideo = ({
  form, loading, error, onChange, onDelete
}) => (
  <>
    <Container>
      <FormGroup>
        <FormInput
          label="Url Video"
          name="url"
          type="text"
          value={form.url}
          onChange={onChange}
          disabled={loading}
          error={Boolean(error.url)}
          errorMessage={error.url}
          placeholder="Masukan url video (youtube)"
        />
      </FormGroup>
    </Container>
    <Container>
      <Button onPress={onDelete} title="Hapus" color="danger" size="m" />
    </Container>
    <Gap height="m" />
  </>
);

FormVideo.propTypes = {
  form: PropTypes.object,
  error: PropTypes.object,
  loading: PropTypes.bool,
  onChange: PropTypes.func,
  onDelete: PropTypes.func
};
FormVideo.defaultProps = {
  form: {},
  error: {},
  onChange: () => {},
  onDelete: () => {},
  loading: false
};

export default FormVideo;