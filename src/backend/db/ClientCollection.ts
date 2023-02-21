import firebase from '../config';
import Client from '@/core/Client';
import RepositoryInterface from '@/core/Repository.interface';

export default class ClientCollection implements RepositoryInterface {
  #conversor = {
    toFirestore(client: Client) {
      return {
        uid: client.uid,
        name: client.name,
        age: client.age,
      };
    },
    fromFirestore(
      snapshot: firebase.firestore.QueryDocumentSnapshot,
      options: firebase.firestore.SnapshotOptions,
    ): Client {
      const data = snapshot.data(options);
      return new Client(data.name, data.age, snapshot.id, data.uid);
    },
  };

  async save(client: Client): Promise<Client | undefined> {
    if (client?.id) {
      await this.#collection().doc(client.id).set(client);
      return client;
    } else {
      const docRef = await this.#collection().add(client);
      const doc = await docRef.get();
      return doc.data();
    }
  }

  async delete(client: Client): Promise<void> {
    return this.#collection().doc(client.id).delete();
  }

  async getAll(client: Client): Promise<Client[]> {
    const query = await this.#collection().where('uid', '==', client.uid).get();
    return query.docs.map((doc) => doc.data()) ?? [];
  }

  #collection() {
    return firebase
      .firestore()
      .collection('clientes')
      .withConverter(this.#conversor);
  }
}
