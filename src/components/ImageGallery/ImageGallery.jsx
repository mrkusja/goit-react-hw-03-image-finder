import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ arrayImages }) => {
  return (
    <ul>
      {arrayImages.map(image => (
        <ImageGalleryItem
          key={image.id}
          previewImg={image.webformatUrl}
          largeImg={image.largeImageURL}
        />
      ))}
    </ul>
  );
};
