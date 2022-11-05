import { useState } from 'react';
import { Modal, Button, Group } from '@mantine/core';

function PhoneModal({opened,setOpened}) {
//   const [opened, setOpened] = useState(false);

  return (
    <>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Introduce yourself!"
      >
        {/* Modal content */}
      </Modal>

      {/* <Group position="center">
        <Button onClick={() => setOpened(true)}></Button>
      </Group> */}
    </>
  );
}
export default PhoneModal;