import PropTypes from 'prop-types';
import { FormGroup, FormInput, Button } from 'components/atoms';
import { FormRow, FormColumn } from './styles';

const FormSchedule = ({
  form, loading, error, onChange, onDelete
}) => (
  <>
    <FormGroup>
      <FormInput
        label="Nama Acara"
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
        label="Tanggal"
        name="date"
        type="date"
        value={form.date}
        onChange={onChange}
        disabled={loading}
        error={Boolean(error.date)}
        errorMessage={error.date}
        placeholder="Masukan tanggal"
      />
    </FormGroup>
    <FormRow>
      <FormColumn>
        <FormGroup>
          <FormInput
            label="Mulai"
            name="start"
            type="time"
            value={form.start}
            onChange={onChange}
            disabled={loading}
            error={Boolean(error.start)}
            errorMessage={error.start}
            placeholder="00:00"
          />
        </FormGroup>
      </FormColumn>
      <FormColumn>
        <FormGroup>
          <FormInput
            label="Berakhir"
            name="end"
            type="time"
            value={form.end}
            onChange={onChange}
            disabled={loading}
            error={Boolean(error.end)}
            errorMessage={error.end}
            placeholder="00:00"
          />
        </FormGroup>
      </FormColumn>
    </FormRow>
    <FormGroup>
      <FormInput
        label="Lokasi"
        name="location"
        type="textarea"
        value={form.location}
        onChange={onChange}
        disabled={loading}
        error={Boolean(error.location)}
        errorMessage={error.location}
        placeholder="Masukan lokasi"
      />
    </FormGroup>
    <FormGroup>
      <Button onPress={onDelete} disabled={loading} color="danger" size="m" title="Hapus" />
    </FormGroup>
  </>
);

FormSchedule.propTypes = {
  form: PropTypes.object,
  loading: PropTypes.bool,
  error: PropTypes.object,
  onChange: PropTypes.func,
  onDelete: PropTypes.func
};
FormSchedule.defaultProps = {
  form: {},
  loading: false,
  error: {},
  onChange: () => {},
  onDelete: () => {}
};

export default FormSchedule;