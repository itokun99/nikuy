import PropTypes from 'prop-types';
import {
  Gap, FormGroup, Button, Container
} from 'components/atoms';
import { UploadImage } from 'components/molecules';

const FormGallery = ({
  form,
  error,
  loading,
  onChange,
  onDelete
}) => (
  <>
    <FormGroup>
      <UploadImage
        loading={loading}
        name="url"
        onChange={onChange}
        error={Boolean(error.url)}
        errorMessage={error.url}
        image={form.url}
      />
    </FormGroup>
    <Container>
      <Button title="Hapus" color="danger" size="m" onPress={onDelete} />

    </Container>
    <Gap height="xl" />
  </>
);

FormGallery.propTypes = {
  form: PropTypes.object,
  error: PropTypes.object,
  loading: PropTypes.bool,
  onChange: PropTypes.func
};
FormGallery.defaultProps = {
  form: {},
  error: {},
  loading: false,
  onChange: () => {}
};

export default FormGallery;