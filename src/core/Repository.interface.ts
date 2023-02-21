import Client from './Client';

export default interface RepositoryInterface {
  save(client: Client): Promise<Client | undefined>;
  delete(client: Client): Promise<void>;
  getAll(client: Client): Promise<Client[]>;
}
