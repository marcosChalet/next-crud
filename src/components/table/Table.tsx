import Client from '@/core/Client';
import React from 'react';
import { EdititionIcon, TrashIcon } from '../ui/Icons';

interface TableProps {
  clients: Client[];
  selectedClient?: (client: Client) => void;
  deletedClient?: (client: Client) => void;
}

export default function Table(props: TableProps) {
  const showActions = props.deletedClient || props.selectedClient;

  function HeaderRender() {
    return (
      <tr>
        <th className="text-left p-4">Code</th>
        <th className="text-left p-4">Name</th>
        <th className="text-left p-4">Age</th>
        {showActions ? <th className="p-4">Actions</th> : false}
      </tr>
    );
  }

  function DataRender() {
    return props.clients?.map((client, i) => {
      return (
        <tr
          key={client.id}
          className={`bg-vonCount-${i % 2 === 0 ? '900' : '800'}`}
        >
          <td className="text-left p-4">{client.id}</td>
          <td className="text-left p-4">{client.name}</td>
          <td className="text-left p-4">{client.age}</td>
          {showActions ? ActionsRender(client) : false}
        </tr>
      );
    });
  }

  function ActionsRender(client: Client) {
    return (
      <td className="flex justify-center">
        {props.selectedClient ? (
          <button
            onClick={() => props.selectedClient?.(client)}
            className={`
            flex justify-center items-center
            text-blade rounded-full p-2 m-1
            hover:bg-nosferatu
            hover:scale-105 ease-in duration-200
          `}
          >
            {EdititionIcon}
          </button>
        ) : (
          false
        )}

        {props.deletedClient ? (
          <button
            onClick={() => props.deletedClient?.(client)}
            className={`
            flex justify-center items-center
            text-marcelin rounded-full p-2 m-1
            hover:bg-nosferatu
            hover:scale-105 ease-in duration-200
          `}
          >
            {TrashIcon}
          </button>
        ) : (
          false
        )}
      </td>
    );
  }

  return (
    <table className="w-full rounded-xl overflow-hidden">
      <thead
        className={`
          text-gray-100 bg-gradient-to-r from-purple-500 to-purple-800
        `}
      >
        {HeaderRender()}
      </thead>

      <tbody>{DataRender()}</tbody>
    </table>
  );
}
