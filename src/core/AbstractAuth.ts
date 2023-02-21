import { useRouter } from 'next/router';

export default abstract class AbstractAuth {
  router = useRouter();
  abstract submit(email: string, password: string): void;
  abstract routeOption(): void;
}
