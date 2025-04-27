import ImageType from "../App.types"
import ImageCard from "./ImageCard";

export default function ImageGallery({ images, onImageClick }: { images: ImageType[]; onImageClick: (image: ImageType) => void }) {
  return (
    <ul>
      {images.map((image) => (
        <ImageCard
          image={image}
          key={image.id}
          onClick={() => onImageClick(image)}
        />
      ))}
    </ul>
  );
}
