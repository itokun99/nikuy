import PropTypes from 'prop-types';
import {
  Label, FormGroup, FormInput, Button, Gap
} from 'components/atoms';
import { UploadImageSquare } from 'components/molecules';

const FormQR = ({
  form, onChange, loading, error, onDelete
}) => (
  <>
    <FormGroup>
      <Label>Gambar QR</Label>
      <UploadImageSquare
        loading={loading}
        name="qr"
        onChange={onChange}
        error={Boolean(error.qr)}
        errorMessage={error.qr}
        image={form.qr}
      />
    </FormGroup>
    <FormGroup>
      <FormInput
        label="Nama Ewallet"
        name="name"
        type="text"
        value={form.name}
        onChange={onChange}
        disabled={loading}
        error={Boolean(error.name)}
        errorMessage={error.name}
        placeholder="Masukan nama ewallet"
      />
    </FormGroup>
    <FormGroup>
      <FormInput
        label="Nomor Akun Ewallet"
        name="akun"
        type="text"
        value={form.akun}
        onChange={onChange}
        disabled={loading}
        error={Boolean(error.akun)}
        errorMessage={error.akun}
        placeholder="Masukan nomor akun ewallet"
      />
    </FormGroup>
    <FormGroup>
      <Button title="Hapus" color="danger" size="m" onPress={onDelete} />
      <Gap height="m" />
    </FormGroup>
  </>
);

FormQR.propTypes = {
  form: PropTypes.object,
  error: PropTypes.object,
  loading: PropTypes.bool,
  onChange: PropTypes.func,
  onDelete: PropTypes.func
};
FormQR.defaultProps = {
  form: {},
  error: {},
  loading: false,
  onChange: () => {},
  onDelete: () => {}
};

export default FormQR;