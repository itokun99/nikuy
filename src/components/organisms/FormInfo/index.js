import PropTypes from 'prop-types';
import {
  FormInput, Text, Gap, Label, FormGroup, Container
} from 'components/atoms';
import { UploadImage } from 'components/molecules';

const FormInfo = ({
  form,
  error,
  loading,
  onChange
}) => (
  <>
    <Container>
      <Text bold>Informasi Undangan</Text>
      <Gap height="m" />
    </Container>
    <Container>
      <FormGroup>
        <FormInput
          label="Judul"
          name="title"
          type="text"
          value={form.title}
          onChange={onChange}
          disabled={loading}
          error={Boolean(error.title)}
          errorMessage={error.title}
          placeholder="Masukan judul"
        />
      </FormGroup>
      <FormGroup>
        <FormInput
          label="Url"
          name="url"
          type="text"
          value={form.url}
          onChange={onChange}
          disabled={loading}
          error={Boolean(error.url)}
          errorMessage={error.url}
          placeholder="Masukan url undangan"
        />
      </FormGroup>
      <FormGroup>
        <FormInput
          label="Deskripsi"
          name="description"
          type="textarea"
          value={form.description}
          onChange={onChange}
          disabled={loading}
          error={Boolean(error.description)}
          errorMessage={error.description}
          placeholder="Masukan deskripsi"
        />
      </FormGroup>
    </Container>
    <FormGroup>
      <Container>
        <Label>Gambar Cover</Label>
      </Container>
      <UploadImage
        name="cover"
        onChange={onChange}
        error={Boolean(error.cover)}
        errorMessage={error.cover}
        image={form.cover}
      />
    </FormGroup>
    <FormGroup>
      <Container>
        <Label>Gambar Detail</Label>
      </Container>
      <UploadImage
        name="thumbnail"
        onChange={onChange}
        error={Boolean(error.thumbnail)}
        errorMessage={error.thumbnail}
        image={form.thumbnail}
      />
    </FormGroup>
    <Gap height="xl" />
  </>
);

FormInfo.propTypes = {
  form: PropTypes.object,
  error: PropTypes.object,
  loading: PropTypes.bool,
  onChange: PropTypes.func
};
FormInfo.defaultProps = {
  form: {},
  error: {},
  loading: false,
  onChange: () => {}
};

export default FormInfo;