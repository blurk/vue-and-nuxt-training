export default function isImageLink(link) {
  const regex = /(https?:\/\/.*\.(?:png|jpg))/i;
  return regex.test(link);
}
