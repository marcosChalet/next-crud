import React from 'react';

import Layout from '@/components/table/Layout';
import FormTable from '@/components/form/FormTable';
import useClients from '@/hooks/useClients';
import PanelTable from '@/components/table/PanelTable';

export default function Home() {
  const {
    client,
    clients,
    tableVisible,
    isEmailConfirmed,
    newClient,
    showTable,
    saveClient,
    removeClient,
    selectClient,
  } = useClients();

  return (
    <div
      className={`
      flex flex-col justify-center items-center
      bg-nosferatu text-white
      min-h-screen w-screen
    `}
    >
      {!isEmailConfirmed && (
        <h1 className="text-2xl font-bold mb-2 text-marcelin animate-pulse">
          Confirm email before!
        </h1>
      )}
      <Layout title="Simple Crud">
        {tableVisible ? (
          <PanelTable
            newClient={newClient}
            clients={clients}
            selectClient={selectClient}
            removeClient={removeClient}
          />
        ) : (
          <FormTable
            client={client}
            hasChangedClient={saveClient}
            canceled={showTable}
          />
        )}
      </Layout>
    </div>
  );
}
