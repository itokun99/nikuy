import {
  Gap, FormGroup, FormInput, Button
} from 'components/atoms';
import PropTypes from 'prop-types';
import { UploadImageRounded } from 'components/molecules';

const FormCouple = ({
  form, onChange, loading, error, onDelete
}) => (
  <>
    <FormGroup>
      <UploadImageRounded
        name="photo"
        onChange={onChange}
        image={form.photo}
      />
    </FormGroup>
    <FormGroup>
      <FormInput
        label="Nama"
        name="name"
        type="text"
        value={form.name}
        onChange={onChange}
        disabled={loading}
        error={Boolean(error.name)}
        errorMessage={error.name}
        placeholder="Masukan nama mempelai"
      />
    </FormGroup>
    <FormGroup>
      <FormInput
        label="Keterangan"
        name="description"
        type="text"
        value={form.description}
        onChange={onChange}
        disabled={loading}
        error={Boolean(error.description)}
        errorMessage={error.description}
        placeholder="Masukan keterangan"
      />
    </FormGroup>
    <FormGroup>
      <Button onPress={onDelete} disabled={loading} color="danger" size="m" title="Hapus" />
    </FormGroup>
    <Gap height="m" />
  </>
);

FormCouple.propTypes = {
  form: PropTypes.object,
  error: PropTypes.object,
  loading: PropTypes.bool,
  onChange: PropTypes.func,
  onDelete: PropTypes.func
};
FormCouple.defaultProps = {
  form: {},
  error: {},
  loading: false,
  onChange: () => {},
  onDelete: () => {}
};

export default FormCouple;