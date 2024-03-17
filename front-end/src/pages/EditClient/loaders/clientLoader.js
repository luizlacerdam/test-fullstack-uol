import { requestData } from '../../../utils/requests';

export default async function clientLoader({ params }) {
  const OK = 200;
  const { id } = params;
  const data = await requestData(`/user/${id}`);
  if (data.status === OK) {
    return data;
  }
  return null;
}
