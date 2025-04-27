import ImageType from "../App.types";

export default function ImageCard({ image, onClick }:{ image: ImageType; onClick: () => void }) {
  return (
    <li onClick={onClick} style={{ listStyleType: "none" }}>
      <img src={image.urls.small} alt={image.alt_description} />
    </li>
  );
}
