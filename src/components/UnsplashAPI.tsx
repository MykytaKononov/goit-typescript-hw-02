import axios from "axios";
import { useEffect } from "react";
import ImageGallery from "./ImageGallery";
import ErrorMessage from "./ErrorMessage";
import ImageType from "../App.types";

const API_KEY = "70g0lZUS49PVNQQ69Yw_gterSWQjLehn_kWYtrbaUxQ";

export default function UnsplashAPI({
  search,
  setLoading,
  onImageClick,
  setError,
  page,
  setImages,
  images,
  error,
  loading,
}: {
  search: string;
  setLoading: (loading: boolean) => void;
  onImageClick: (image: ImageType) => void;
  setError: (error: string | null) => void;
  page: number;
  setImages: React.Dispatch<React.SetStateAction<ImageType[]>>;
  images: ImageType[];
  error: string | null;
  loading: boolean;
  }) {
  useEffect(() => {
    if (!search) {
      return;
    }
    const URL = `https://api.unsplash.com/search/photos?query=${search}&page=${page}&client_id=${API_KEY}`;

    async function fetchData() {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(URL);
        setImages((prevImages: ImageType[]) => [...prevImages, ...response.data.results as ImageType[]]);
      } catch (err) {
        console.error(err);
        setError((err as {message:string}).message);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [search, page, setLoading, setError, setImages]);

  return (
    <div>
      {error && <ErrorMessage error={error} />}
      {!loading && !error && search && images.length === 0 && <p>No results</p>}
      {!loading && !error && images.length > 0 && (
        <ImageGallery images={images} onImageClick={onImageClick} />
      )}
    </div>
  );
}
