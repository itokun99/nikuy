import { useEffect } from 'react';
import {
  Gap,
  Button, Container, CardInvitation, FormGroup
} from 'components';
import { SecondContainer } from 'containers';
import { getMyInvitation, deleteMyInvitation } from 'services';
import { myinvitationSelector } from 'modules';
import { useRouter } from 'next/router';
import { routePaths } from 'routes';
import { useSelector, shallowEqual } from 'react-redux';
import { alert, screenLoading } from 'controls';
import { toast } from 'react-toastify';

const MyInvitation = () => {
  const invitation = useSelector(myinvitationSelector, shallowEqual);
  const invitations = invitation?.data || [];
  const router = useRouter();

  const deleteInvitation = async data => {
    try {
      screenLoading(true);
      await deleteMyInvitation(data?.id);
      await getMyInvitation();
      screenLoading(false);
      toast.success('Berhasil menghapus undangan');
    } catch (err) {
      screenLoading(false);
      toast.error(err?.message);
    }
  };

  const onEdit = data => {
    router.push(`${routePaths.EDIT_INVITATION}/${data?.id}`);
  };

  const onView = data => {
    router.push(`${routePaths.LIST_INVITATION}/${data?.id}`);
  };

  const onDelete = data => {
    alert({
      title: 'Konfirmasi!',
      message: 'Apakah kamu yakin ingin menghapus undangan ini?',
      leftButtonTitle: 'Iya',
      rightButtonTitle: 'Tidak',
      onPressLeftButton: () => deleteInvitation(data)
    });
  };

  useEffect(() => {
    getMyInvitation();
  }, []);

  return (
    <SecondContainer
      navbarProps={{
        title: 'Undanganku',
        transparent: false,
        color: 'softGray'
      }}
    >
      <Container>
        <FormGroup>
          <Button
            title="+ BUAT UNDANGAN"
            withBorder
            borderColor="primary"
            color="transparent"
            radius="xl"
            onPress={() => router.push(routePaths.CREATE_INVITATION)}
          />
        </FormGroup>
        <Gap height="s" />

        {invitations.map(data => (
          <CardInvitation
            key={data.id}
            title={data.title}
            location={data.location}
            image={data.thumbnail}
            date={data.date}
            onEdit={() => onEdit(data)}
            onView={() => onView(data)}
            onDelete={() => onDelete(data)}
          />
        ))}
      </Container>
    </SecondContainer>
  );
};

export default MyInvitation;