import { useState } from 'react';
import {
  Gap,
  Form,
  Text,
  Button,
  FormGroup,
  Container,
  FormInput,
  NavbarBack,
  BackgroundImage
} from 'components';
import { useRouter } from 'next/router';
import { routePaths } from 'routes';
import { screenLoading } from 'controls';
import { register, login, getProfile } from 'services';
import { useForm, validator } from 'utils';
import { toast } from 'react-toastify';
import { Wrapper } from './styles';

const initialForm = {
  name: '',
  email: '',
  password: '',
  password_confirmation: ''
};

const initialError = {
  name: '',
  email: '',
  password: '',
  password_confirmation: ''
};

const Register = () => {
  const router = useRouter();
  const [form, setForm] = useForm(initialForm);
  const [error, setError] = useForm(initialError);
  const [loading, setLoading] = useState(false);

  const onChange = e => {
    const { name, value } = e.target;
    setForm(name, value);

    if (error[name]) {
      setError(name, '');
    }
  };

  const validate = () => {
    const err = { ...error };

    if (!form.name) {
      err.name = 'Nama lengkap wajib diisi';
    }

    if (!validator.min(form.name, 3)) {
      err.name = 'Nama minimal 3 huruf';
    }

    if (!form.email) {
      err.email = 'Mohon masukan email kamu';
    } else if (!validator.isEmail(form.email)) {
      err.email = 'Format email tidak valid';
    }

    if (!form.password) {
      err.password = 'Mohon isi kata sandi kamu';
    } else if (!validator.min(form.password, 8)) {
      err.password = 'Kata sandi minimal 8 karakter';
    }

    if (!form.password_confirmation) {
      err.password_confirmation = 'Mohon isi kata sandi kamu';
    } else if (form.password_confirmation !== form.password) {
      err.password_confirmation = 'Konfirmasi kata sandi tidak sama';
    }

    setError('multiple', err);
    const invalid = Object.values(err).some(e => e !== '');
    return !invalid;
  };

  const submit = async e => {
    e?.preventDefault?.();

    if (!validate()) {
      return null;
    }

    try {
      setLoading(true);
      screenLoading(true);
      await register(form);
      await login(form);
      await getProfile();
      setForm('reset');
      setLoading(false);
      screenLoading(false);
      return router.replace(routePaths.HOME);
    } catch (err) {
      setLoading(false);
      screenLoading(false);
      return toast.error(err?.message);
    }
  };

  return (
    <>
      <NavbarBack title="Daftar" />
      <BackgroundImage image="/assets/images/img-register.svg" />
      <Wrapper>
        <Container>
          <Form onSubmit={submit}>
            <FormGroup>
              <FormInput
                label="Nama Lengkap"
                name="name"
                value={form.name}
                onChange={onChange}
                error={Boolean(error.name)}
                errorMessage={error.name}
                disabled={loading}
                placeholder="Masukan nama kamu"
              />
            </FormGroup>
            <FormGroup>
              <FormInput
                label="Email"
                name="email"
                type="email"
                value={form.email}
                onChange={onChange}
                error={Boolean(error.email)}
                errorMessage={error.email}
                disabled={loading}
                placeholder="Masukan email kamu"
              />
            </FormGroup>
            <FormGroup>
              <FormInput
                label="Kata Sandi"
                name="password"
                type="password"
                value={form.password}
                onChange={onChange}
                error={Boolean(error.password)}
                errorMessage={error.password}
                disabled={loading}
                placeholder="Masukan kata sandi kamu"
              />
            </FormGroup>
            <FormGroup>
              <FormInput
                label="Konfirmasi Kata Sandi"
                name="password_confirmation"
                type="password"
                onChange={onChange}
                error={Boolean(error.password_confirmation)}
                errorMessage={error.password_confirmation}
                disabled={loading}
                placeholder="Masukan konfirmasi kata sandi"
              />
            </FormGroup>
            <FormGroup>
              <Button type="submit" disabled={loading} onPress={submit} title="Buat Akun" />
            </FormGroup>
            <Gap height="xs" />
            <FormGroup>
              <Text size="xxs">
                Sudah punya akun?
                {' '}
                <Text size="xxs" link="/masuk">Masuk disini</Text>
              </Text>
            </FormGroup>
          </Form>
        </Container>
      </Wrapper>
    </>
  );
};

export default Register;