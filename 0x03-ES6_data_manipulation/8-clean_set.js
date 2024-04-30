export default function cleanSet(set, startString) {
  const match = Array.from(set).filter((str) => str.startsWith(startString));
  const result = match.map((strr) => strr.substring(startString.length));
  return startString.length > 0 ? result.join('-') : '';
}
