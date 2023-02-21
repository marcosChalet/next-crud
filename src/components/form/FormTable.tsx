import { AuthContext } from '@/context/AuthContext';
import Client from '@/core/Client';
import React, { useContext, useState } from 'react';
import Button from '../ui/Button';
import Input from '../ui/Input';

interface FormProps {
  client: Client;
  hasChangedClient?: (client: Client) => void;
  canceled?: () => void;
}

export default function FormTable(props: FormProps) {
  const id = props.client?.id;
  const [name, setName] = useState(props.client?.name ?? '');
  const [age, setAge] = useState(props.client?.age ?? 0);
  const auth = useContext(AuthContext);

  return (
    <div>
      {id ? <Input readOnly text="Code" value={id} className="mb-5" /> : false}

      <Input
        text="Name"
        value={name}
        hasChangedValue={setName}
        className="mb-5"
      />

      <Input text="Age" type="number" value={age} hasChangedValue={setAge} />

      <div className="flex justify-end mt-7">
        <Button
          color="blade"
          className="mr-2"
          onClick={() =>
            props.hasChangedClient?.(
              new Client(name, +age, id, auth.user.uid ?? ''),
            )
          }
        >
          {id ? 'Modify' : 'Save'}
        </Button>

        <Button onClick={props.canceled}>Cancel</Button>
      </div>
    </div>
  );
}
