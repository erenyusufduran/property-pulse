export function convertToSerializableObject(leanDoc) {
  for (const key of Object.keys(leanDoc)) {
    if (leanDoc[key] === null) continue;
    if (leanDoc[key].toJSON && leanDoc[key].toString) {
      leanDoc[key] = leanDoc[key].toString();
    }
  }
  return leanDoc;
}
