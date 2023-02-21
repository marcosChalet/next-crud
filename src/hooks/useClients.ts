import Client from '@/core/Client';
import ClientCollection from '@/backend/db/ClientCollection';
import ClientRepository from '@/core/Repository.interface';
import useTabelaOrForm from './useTableOrForm';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '@/context/AuthContext';
import { useRouter } from 'next/router';

export default function useClients() {
  const repo: ClientRepository = new ClientCollection();

  const { showTable, tableVisible, showForm } = useTabelaOrForm();
  const auth = useContext(AuthContext);
  const uidClient = auth.user?.uid ?? '';
  const [client, setClient] = useState<Client>(Client.empty(uidClient));
  const [clients, setClients] = useState<Client[]>([]);
  const [isEmailConfirmed, setEmailConfirmed] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (auth.user?.isAuthenticated) {
      if (auth.user.emailVerified) {
        setEmailConfirmed(true);
        getAll();
      } else {
        console.log('email not confirmed...');
      }
    } else {
      router.push('/');
    }
  }, []);

  function getAll() {
    repo.getAll(client).then((clients) => {
      setClients(clients);
      showTable();
    });
  }

  function selectClient(client: Client) {
    setClient(client);
    showForm();
  }

  async function removeClient(client: Client) {
    await repo.delete(client);
    getAll();
  }

  function newClient() {
    setClient(Client.empty(uidClient));
    showForm();
  }

  async function saveClient(client: Client) {
    await repo.save(client);
    getAll();
  }

  return {
    client,
    clients,
    tableVisible,
    isEmailConfirmed,
    getAll,
    newClient,
    showTable,
    saveClient,
    removeClient,
    selectClient,
  };
}
