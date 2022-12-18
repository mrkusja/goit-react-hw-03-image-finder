export const imagesMapper = array => {
  return array.map(({ id, webformatUrl, largeImageURL }) => ({
    id,
    webformatUrl,
    largeImageURL,
  }));
};
