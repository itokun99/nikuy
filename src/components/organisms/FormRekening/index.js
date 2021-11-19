import PropTypes from 'prop-types';
import {
  FormGroup, FormInput, Button, Gap
} from 'components/atoms';

const FormRekening = ({
  form, error, loading, onChange, onDelete
}) => (
  <>
    <FormGroup>
      <FormInput
        label="Nomor Rekening"
        name="rekening"
        type="text"
        value={form.rekening}
        onChange={onChange}
        disabled={loading}
        error={Boolean(error.rekening)}
        errorMessage={error.rekening}
        placeholder="Masukan nomor rekening"
      />
    </FormGroup>
    <FormGroup>
      <FormInput
        label="Nama Bank"
        name="bank"
        type="text"
        value={form.bank}
        onChange={onChange}
        disabled={loading}
        error={Boolean(error.bank)}
        errorMessage={error.bank}
        placeholder="Masukan Nama Bank"
      />
    </FormGroup>
    <FormGroup>
      <FormInput
        label="Pemilik Rekening"
        name="owner"
        type="text"
        value={form.owner}
        onChange={onChange}
        disabled={loading}
        error={Boolean(error.owner)}
        errorMessage={error.owner}
        placeholder="Masukan nama pemilik rekening"
      />
    </FormGroup>
    <FormGroup>
      <Button title="Hapus" color="danger" size="m" onPress={onDelete} />
      <Gap height="m" />
    </FormGroup>
  </>
);

FormRekening.propTypes = {
  form: PropTypes.object,
  error: PropTypes.object,
  loading: PropTypes.bool,
  onChange: PropTypes.func,
  onDelete: PropTypes.func
};
FormRekening.defaultProps = {
  form: {},
  error: {},
  loading: false,
  onChange: () => {},
  onDelete: () => {}
};

export default FormRekening;