import { useState, useEffect, useCallback } from 'react';
import {
  Gap,
  Form,
  Text,
  FormInput,
  Container,
  FormGroup,
  FormInfo,
  Button,
  FormQR,
  FormCouple,
  FormSchedule,
  FormRekening,
  FormVideo,
  FormAudio,
  FormGallery
} from 'components';
import { useRouter } from 'next/router';
import { SecondContainer } from 'containers';
import { useForm, validator } from 'utils';
import { screenLoading } from 'controls';
import { v4 as uuidv4 } from 'uuid';
import { toast } from 'react-toastify';
import {
  getMyInvitationDetail,
  getProvinces,
  getCities,
  getDistricts,
  getSubdistricts,
  createMyInvitation,
  editMyInvitation
} from 'services';
import { routePaths } from 'routes';

const initialForm = {
  id: '',
  title: '',
  url: '',
  description: '',
  address: '',
  postal_code: '',
  province: '',
  city: '',
  district: '',
  subdistrict: '',
  googlemap: '',
  cover: '',
  coverFile: null,
  thumbnail: '',
  thumbnailFile: null,
  couples: [],
  schedules: [],
  galleries: [],
  videos: [],
  rekening: [],
  ewallets: [],
  audios: []
};

const initialerror = {
  id: '',
  title: '',
  url: '',
  description: '',
  address: '',
  postal_code: '',
  province: '',
  city: '',
  district: '',
  subdistrict: '',
  googlemap: '',
  cover: '',
  thumbnail: ''
};

const initial = {
  couples: {
    id: '',
    name: '',
    description: '',
    photo: '',
    photoFile: null
  },

  schedules: {
    id: '',
    name: '',
    date: '',
    start: '',
    end: '',
    location: ''
  },

  videos: {
    id: '',
    url: ''
  },

  audios: {
    id: '',
    url: ''
  },

  galleries: {
    id: '',
    url: '',
    urlFile: null
  },
  rekening: {
    id: '',
    rekening: '',
    bank: '',
    owner: ''
  },

  ewallets: {
    id: '',
    name: '',
    akun: '',
    qr: '',
    qrFile: null
  }
};

const CreateInvitation = () => {
  const router = useRouter();
  const { id } = router?.query;
  const isEdit = Boolean(id);

  const [loading] = useState(false);
  const [form, setForm] = useForm(initialForm);
  const [error, setError] = useState(initialerror);
  const [provinces, setProvinces] = useState([]);
  const [cities, setCities] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [subdistricts, setSubdistricts] = useState([]);

  const getProvinceData = useCallback(() => {
    setProvinces([]);
    setCities([]);
    setDistricts([]);
    setSubdistricts([]);
    getProvinces().then(data => {
      setProvinces(data);
    });
  }, []);

  const getCitiesData = params => {
    setCities([]);
    setDistricts([]);
    setSubdistricts([]);
    getCities(params).then(data => {
      setCities(data);
    });
  };

  const getDistrictsData = params => {
    setDistricts([]);
    setSubdistricts([]);
    getDistricts(params).then(data => {
      setDistricts(data);
    });
  };

  const getSubdistrictsData = params => {
    setSubdistricts([]);
    getSubdistricts(params).then(data => {
      setSubdistricts(data);
    });
  };

  const onFormChange = (e, inputFile) => {
    const { name, value } = e.target;

    if (error[name] !== '') {
      setError(v => ({ ...v, [name]: '' }));
    }

    if (inputFile?.file) {
      const { file, image } = inputFile;
      return setForm('multiple', {
        [name]: image,
        [`${name}File`]: file
      });
    }

    if (name === 'province') {
      getCitiesData(value);
    }

    if (name === 'city') {
      getDistrictsData(value);
    }

    if (name === 'district') {
      getSubdistrictsData(value);
    }

    return setForm(name, value);
  };

  const addNewForm = field => {
    setForm(field, [...form[field], {
      ...initial[field],
      id: uuidv4()
    }]);
  };

  const onMultipleFormChange = (itemId, field, e, inputFile) => {
    const { name, value } = e.target;
    const prevList = [...form[field]];
    const newList = prevList.map(d => {
      if (d?.id === itemId) {
        if (inputFile) {
          const { image, file } = inputFile;

          return {
            ...d,
            [name]: image,
            [`${name}File`]: file
          };
        }

        return {
          ...d,
          [name]: value
        };
      }
      return d;
    });
    setForm(field, newList);
  };

  const onDeleteForm = (itemId, field) => {
    const list = [...form[field]];
    const newList = list.filter(d => d?.id !== itemId);
    setForm(field, newList);
  };

  const validateForm = () => {
    const newError = { ...error };

    if (!form.title) {
      newError.title = 'Mohon untuk mengisi judul!';
    }

    if (String(form.title).length < 3) {
      newError.title = 'Judul minimal 3 huruf';
    }

    if (validator.isHasSpace(form.url)) {
      newError.url = 'Url tidak boleh berisi spasi, ganti dengan _ atau -';
    }

    if (!form.description) {
      newError.description = 'Mohon masukan deskripsi undangan';
    }

    if (!form.address) {
      newError.address = 'Mohon isi alamat lengkap undangan';
    }

    if (!form.province) {
      newError.province = 'Mohon pilih provinsi';
    }

    if (!form.city) {
      newError.city = 'Mohon pilih kota / kabupaten';
    }

    if (!form.district) {
      newError.district = 'Mohon pilih kecamatan';
    }

    if (!form.subdistrict) {
      newError.subdistrict = 'Mohon pilih kelurahan';
    }

    if (!isEdit) {
      if (!form.coverFile) {
        newError.cover = 'Mohon upload foto untuk cover';
      }

      if (!form.thumbnailFile) {
        newError.thumbnail = 'Mohon upload foto untuk detail undangan';
      }
    }

    setError(newError);
    const invalid = Object.values(newError).some(e => e !== '');
    return !invalid;
  };

  const validateMultipleForm = () => {
    if (form.couples.length === 0) {
      toast.error('Mohon tambahkan minimal 2 data mempelai');
      return false;
    }

    if (form.schedules.length === 0) {
      toast.error('Mohon tambahkan jadwal acara minimal 1');
      return false;
    }

    if (form.schedules.length === 0) {
      toast.error('Mohon tambahkan jadwal acara minimal 1');
      return false;
    }

    return true;
  };

  const onSubmit = (e, status) => {
    e?.preventDefault();

    if (!validateForm()) {
      return toast.error('Mohon lengkapi data dengan benar');
    }

    if (!validateMultipleForm()) {
      return false;
    }

    const formData = new FormData();

    formData.append('title', form.title);
    formData.append('url', form.url);
    formData.append('description', form.description);
    formData.append('address', form.address);
    formData.append('postal_code', form.postal_code);
    formData.append('province', form.province);
    formData.append('city', form.city);
    formData.append('district', form.district);
    formData.append('subdistrict', form.subdistrict);
    formData.append('googlemap', form.googlemap);
    formData.append('cover', form.coverFile);
    formData.append('thumbnail', form.thumbnailFile);
    if (status) formData.append('status', status);

    formData.append('couples', JSON.stringify(form.couples));
    formData.append('schedules', JSON.stringify(form.schedules));
    formData.append('galleries', JSON.stringify(form.galleries));
    formData.append('videos', JSON.stringify(form.videos));
    formData.append('rekening', JSON.stringify(form.rekening));
    formData.append('ewallets', JSON.stringify(form.ewallets));
    formData.append('audios', JSON.stringify(form.audios));

    form.couples.forEach(data => {
      formData.append(`couple_${data.id}`, data.photoFile);
    });

    form.galleries.forEach(data => {
      formData.append(`gallery_${data.id}`, data.urlFile);
    });

    form.ewallets.forEach(data => {
      formData.append(`ewallet_${data.id}`, data.qrFile);
    });

    screenLoading(true);

    if (isEdit) {
      return editMyInvitation(id, formData).then(() => {
        screenLoading(false);
        toast.success('Berhasil memperbarui undangan');
      }).catch(err => {
        screenLoading(false);
        toast.error(err?.message);
      });
    }

    return createMyInvitation(formData).then(() => {
      screenLoading(false);
      router.replace(routePaths.MYINVITATION);
      toast.success('Berhasil membuat undangan');
    }).catch(err => {
      screenLoading(false);
      toast.error(err?.message);
    });
  };

  useEffect(() => {
    getProvinceData();
  }, [getProvinceData]);

  useEffect(() => {
    if (id) {
      screenLoading(true);
      getMyInvitationDetail(id).then(data => {
        screenLoading(false);
        setForm('multiple', {
          id: data.id,
          title: data.title,
          url: data.slug,
          description: data.description,
          address: data.location?.address,
          postal_code: data.location?.postal_code,
          province: data.location?.province?.id,
          city: data.location?.city?.id,
          district: data.location?.district?.id,
          subdistrict: data.location?.subdistrict?.id,
          googlemap: data.location?.googlemap,
          cover: data.image?.cover,
          thumbnail: data.image?.thumbnail,
          couples: data.couples,
          schedules: data.schedules,
          galleries: data.galleries,
          videos: data.videos,
          rekening: data.rekening,
          ewallets: data.ewallets,
          audios: data.audios
        });

        getProvinceData();
        if (data.location?.province?.id) getCitiesData(data.location?.province?.id);
        if (data.location?.city?.id) getDistrictsData(data.location?.city?.id);
        if (data.location?.district?.id) getSubdistrictsData(data.location?.district?.id);
      }).catch(err => {
        screenLoading(false);
        toast.error(err?.message);
      });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const renderCouplesForm = () => (
    <>
      <Container>
        <Text bold>Informasi Mempelai</Text>
        <Gap height="m" />
      </Container>
      <Container>
        {form.couples.map(item => (
          <FormCouple
            key={item.id}
            form={item}
            onChange={(e, i) => onMultipleFormChange(item.id, 'couples', e, i)}
            onDelete={() => onDeleteForm(item.id, 'couples')}
          />
        ))}
      </Container>
      <Container>
        <Button
          title="+ Tambah Mempelai"
          withBorder
          borderColor="primary"
          color="transparent"
          onPress={() => addNewForm('couples')}
        />
        <Gap height="xl" />
      </Container>
    </>
  );

  const renderFormSchedule = () => (
    <>
      <Container>
        <Text bold>Jadwal Acara</Text>
        <Gap height="m" />
      </Container>
      <Container>
        {form.schedules.map(item => (
          <FormSchedule
            key={item.id}
            form={item}
            onChange={(e, i) => onMultipleFormChange(item.id, 'schedules', e, i)}
            onDelete={() => onDeleteForm(item.id, 'schedules')}
          />
        ))}
      </Container>
      <Container>
        <Button
          title="+ Tambah Jadwal"
          withBorder
          borderColor="primary"
          color="transparent"
          onPress={() => addNewForm('schedules')}
        />
        <Gap height="xl" />
      </Container>
    </>
  );

  const renderFormDetailLocation = () => (
    <>
      <Container>
        <Text bold>Detail Lokasi</Text>
        <Gap height="m" />
      </Container>
      <Container>
        <FormGroup>
          <FormInput
            label="Provinsi"
            name="province"
            type="select"
            value={String(form.province)}
            onChange={onFormChange}
            disabled={loading}
            error={Boolean(error.province)}
            errorMessage={error.province}
            placeholder="Pilih"
          >
            <option value="">Pilih</option>
            {provinces.map(data => (
              <option key={data.id} value={data.id}>
                {data.name}
              </option>
            ))}
          </FormInput>
        </FormGroup>
        <FormGroup>
          <FormInput
            label="Kota/Kabupaten"
            name="city"
            type="select"
            value={String(form.city)}
            onChange={onFormChange}
            disabled={loading}
            error={Boolean(error.city)}
            errorMessage={error.city}
            placeholder="Pilih"
          >
            <option value="">Pilih</option>
            {cities.map(data => (
              <option key={data.id} value={data.id}>
                {data.name}
              </option>
            ))}
          </FormInput>
        </FormGroup>
        <FormGroup>
          <FormInput
            label="Kecamatan"
            name="district"
            type="select"
            value={String(form.district)}
            onChange={onFormChange}
            disabled={loading}
            error={Boolean(error.district)}
            errorMessage={error.district}
            placeholder="Pilih"
          >
            <option value="">Pilih</option>
            {districts.map(data => (
              <option key={data.id} value={data.id}>
                {data.name}
              </option>
            ))}
          </FormInput>
        </FormGroup>
        <FormGroup>
          <FormInput
            label="Kelurahan/Desa"
            name="subdistrict"
            type="select"
            value={String(form.subdistrict)}
            onChange={onFormChange}
            disabled={loading}
            error={Boolean(error.subdistrict)}
            errorMessage={error.subdistrict}
            placeholder="Pilih"
          >
            <option value="">Pilih</option>
            {subdistricts.map(data => (
              <option key={data.id} value={data.id}>
                {data.name}
              </option>
            ))}
          </FormInput>
        </FormGroup>
        <FormGroup>
          <FormInput
            label="Kode Pos"
            name="postal_code"
            type="text"
            value={form.postal_code}
            onChange={onFormChange}
            disabled={loading}
            error={Boolean(error.postal_code)}
            errorMessage={error.postal_code}
            placeholder="Masukan Kode Pos"
          />
        </FormGroup>
        <FormGroup>
          <FormInput
            label="Alamat Lengkap"
            name="address"
            type="textarea"
            value={form.address}
            onChange={onFormChange}
            disabled={loading}
            error={Boolean(error.address)}
            errorMessage={error.address}
            placeholder="Masukan alamat lengkap"
          />
        </FormGroup>
        <FormGroup>
          <FormInput
            label="Link Google Map"
            name="googlemap"
            type="text"
            value={form.googlemap}
            onChange={onFormChange}
            disabled={loading}
            error={Boolean(error.googlemap)}
            errorMessage={error.googlemap}
            placeholder="Masukan Link Googlemap"
          />
        </FormGroup>
        <Gap height="xl" />
      </Container>
    </>
  );

  const renderFormVideo = () => (
    <>
      <Container>
        <Text bold>Video</Text>
        <Gap height="m" />
      </Container>
      {form.videos.map(item => (
        <FormVideo
          key={item.id}
          form={item}
          onChange={(e, i) => onMultipleFormChange(item.id, 'videos', e, i)}
          onDelete={() => onDeleteForm(item.id, 'videos')}
        />
      ))}
      <Container>
        {form.videos && form.videos.length === 0 && (
          <>
            <Button
              title="+ Tambahkan Video"
              onPress={() => addNewForm('videos')}
              withBorder
              borderColor="primary"
              color="transparent"
            />
            <Gap height="xl" />
          </>
        )}

      </Container>
    </>
  );

  const renderFormGallery = () => (
    <>
      <Container>
        <Text bold>Galeri Foto</Text>
        <Gap height="m" />
      </Container>
      {form.galleries.map(item => (
        <FormGallery
          key={item.id}
          form={item}
          onChange={(e, i) => onMultipleFormChange(item.id, 'galleries', e, i)}
          onDelete={() => onDeleteForm(item.id, 'galleries')}
        />
      ))}
      <Container>
        <Button
          onPress={() => addNewForm('galleries')}
          title="+ Tambah Galeri"
          withBorder
          borderColor="primary"
          color="transparent"
        />
        <Gap height="xl" />
      </Container>
    </>
  );

  const renderFormRekening = () => (
    <>
      <Container>
        <Text bold>Informasi Rekening</Text>
        <Gap height="m" />
      </Container>
      <Container>
        {form.rekening.map(item => (
          <FormRekening
            key={item.id}
            form={item}
            onChange={(e, i) => onMultipleFormChange(item.id, 'rekening', e, i)}
            onDelete={() => onDeleteForm(item.id, 'rekening')}
          />
        ))}
      </Container>
      <Container>
        <Button
          onPress={() => addNewForm('rekening')}
          title="+ Tambah Rekening"
          withBorder
          borderColor="primary"
          color="transparent"
        />
        <Gap height="s" />
      </Container>
    </>
  );

  const renderFormEwallet = () => (
    <>
      <Container>
        {form.ewallets.map(item => (
          <FormQR
            key={item.id}
            form={item}
            onChange={(e, i) => onMultipleFormChange(item.id, 'ewallets', e, i)}
            onDelete={() => onDeleteForm(item.id, 'ewallets')}
          />
        ))}
      </Container>
      <Container>
        <Button
          onPress={() => addNewForm('ewallets')}
          title="+ Tambahkan E-payment"
          withBorder
          borderColor="primary"
          color="transparent"
        />
        <Gap height="xl" />
      </Container>
    </>
  );

  const renderFormAudio = () => (
    <>
      <Container>
        <Text bold>Audio</Text>
        <Gap height="m" />
      </Container>
      {form.audios.map(item => (
        <FormAudio
          key={item.id}
          form={item}
          onChange={(e, i) => onMultipleFormChange(item.id, 'audios', e, i)}
          onDelete={() => onDeleteForm(item.id, 'audios')}
        />
      ))}
      <Container>
        {form.audios && form.audios.length === 0 && (
          <>
            <Button
              title="+ Tambahkan Audio"
              onPress={() => addNewForm('audios')}
              withBorder
              borderColor="primary"
              color="transparent"
            />
            <Gap height="xl" />
          </>
        )}

      </Container>
    </>
  );

  return (
    <SecondContainer
      transparent={false}
      navbarProps={{
        title: 'Buat Undangan',
        transparent: false,
        color: 'light'
      }}
    >
      <Form onSubmit={onSubmit}>
        <FormInfo form={form} loading={loading} error={error} onChange={onFormChange} />
        {renderCouplesForm()}
        {renderFormDetailLocation()}
        {renderFormSchedule()}
        {renderFormVideo()}
        {renderFormAudio()}
        {renderFormGallery()}
        {renderFormRekening()}
        {renderFormEwallet()}

        <Container>
          <Button title="SIMPAN" onPress={e => onSubmit(e, 'active')} />
          <Gap height="xs" />
          <Button type="submit" title="DRAFT" color="secondary" onPress={e => onSubmit(e, 'nonactive')} />
          <Gap height="xl" />
        </Container>
      </Form>
    </SecondContainer>
  );
};

export default CreateInvitation;