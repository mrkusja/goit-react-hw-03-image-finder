export const imagesMapper = array => {
  return array.map(({ id, webformatUrl: previewImageURL, largeImageURL }) => ({
    id,
    previewImageURL,
    largeImageURL,
  }));
};
