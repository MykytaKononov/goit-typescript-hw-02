import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import UnsplashAPI from "./components/UnsplashAPI";
import Loader from "./components/Loader";
import ImageModal from "./components/ImageModal";
import ErrorMessage from "./components/ErrorMessage";
import LoadMoreBtn from "./components/loadMoreBtn";
import { Toaster } from "react-hot-toast";
import  ImageType  from "./App.types";



function App() {
  const [search, setSearch] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<ImageType | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState<number>(1);
  const [images, setImages] = useState<ImageType[]>([]);

  useEffect(() => {
    if (search) {
      setPage(1);
      setImages([]);
    }
  }, [search]);

  const handleSearch = (request: string) => {
    setSearch(request);
  };

  const handleImageClick = (image: ImageType) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
    setIsModalOpen(false);
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <>
      <Toaster />
      <SearchBar onSearch={handleSearch} />
      {loading && <Loader loading={loading} />}
      {error && <ErrorMessage error={error} />}
      <UnsplashAPI
        search={search}
        setLoading={setLoading}
        onImageClick={handleImageClick}
        setError={setError}
        page={page}
        setImages={setImages}
        images={images}
        error={error}
        loading={loading}
      />
      <ImageModal
        image={selectedImage}
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
      />
      {images.length > 0 && !loading && !error && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}
    </>
  );
}

export default App;
