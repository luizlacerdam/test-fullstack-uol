import { requestData } from '../../../utils/requests';

export default async function clientsLoader() {
  const OK = 200;
  const data = await requestData('/user');
  if (data.status === OK) {
    return data;
  }
  return null;
}
