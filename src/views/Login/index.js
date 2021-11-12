import { useState } from 'react';
import {
  Gap,
  Text,
  Button,
  FormGroup,
  Container,
  FormInput,
  NavbarBack,
  BackgroundImage
} from 'components';
import { useRouter } from 'next/router';
import { login, getProfile } from 'services';
import { toast } from 'react-toastify';
import { useForm, validator } from 'utils';
import { routePaths } from 'routes';
import { Wrapper, TextWrapper } from './styles';

const initialForm = {
  email: '',
  password: ''
};

const initialError = {
  email: '',
  password: ''
};

const Login = () => {
  const router = useRouter();

  const [form, setForm] = useForm(initialForm);
  const [errors, setError] = useForm(initialError);
  const [loading, setLoading] = useState(false);

  const onChange = e => {
    const { name, value } = e.target;
    setForm(name, value);

    if (errors[name]) {
      setError(name, '');
    }
  };

  const validate = () => {
    const err = { ...errors };

    if (!form.email) {
      err.email = 'Mohon masukan email kamu';
    } else if (!validator.isEmail(form.email)) {
      err.email = 'Format email tidak valid';
    }

    if (!form.password) {
      err.password = 'Mohon isi kata sandi kamu';
    }

    setError('multiple', err);
    const invalid = Object.values(err).some(e => e !== '');
    return !invalid;
  };

  const submit = async () => {
    if (!validate()) {
      return null;
    }

    try {
      setLoading(true);
      await login(form);
      await getProfile();
      setForm('reset');
      setLoading(false);
      return router.replace(routePaths.HOME);
    } catch (err) {
      setLoading(false);
      return toast.error(err?.message);
    }
  };

  return (
    <>
      <NavbarBack title="Masuk" />
      <BackgroundImage image="/assets/images/img-register.svg" />
      <Wrapper>
        <Container>
          <FormGroup>
            <FormInput
              label="Email"
              name="email"
              value={form.email}
              onChange={onChange}
              disabled={loading}
              error={Boolean(errors.email)}
              errorMessage={errors.email}
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
              disabled={loading}
              error={Boolean(errors.password)}
              errorMessage={errors.password}
              placeholder="Masukan kata sandi kamu"
            />
          </FormGroup>
          <Gap height="xs" />
          <FormGroup>
            <TextWrapper>
              <Text align="right" size="xxs" link="/lupa-sandi">Lupa kata sandi?</Text>
            </TextWrapper>
          </FormGroup>
          <Gap height="xs" />
          <FormGroup>
            <Button disabled={loading} onPress={submit} title="Masuk" />
          </FormGroup>
          <Gap height="xs" />
          <FormGroup>
            <Text size="xxs">
              Belum punya akun?
              {' '}
              <Text size="xxs" link="/daftar">daftar disini</Text>
            </Text>
          </FormGroup>
        </Container>
      </Wrapper>
    </>
  );
};

export default Login;