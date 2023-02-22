import Client from '@/core/Client';
import React from 'react';
import Button from '../ui/Button';
import Table from './Table';

interface PanelTableProps {
  clients: Client[];
  newClient: () => void;
  selectClient: (client: Client) => void;
  removeClient: (client: Client) => void;
}

export default function PanelTable({
  newClient,
  clients,
  selectClient,
  removeClient,
}: PanelTableProps) {
  return (
    <div className="overflow-auto m-3 sm:p-6 sm:m-0">
      <div className="flex justify-start sm:justify-end">
        <Button color="blade" className="mb-4" onClick={newClient}>
          New Client
        </Button>
      </div>
      <Table
        clients={clients}
        selectedClient={selectClient}
        deletedClient={removeClient}
      />
    </div>
  );
}
