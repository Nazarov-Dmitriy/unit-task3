export default function fetchData(url) {
  if (url === 'https://server/user/1') {
    return { status: 'ok' };
  }
  throw new Error('Mock this!');
}
