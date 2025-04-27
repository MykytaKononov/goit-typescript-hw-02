
import BarLoader from "react-spinners/BarLoader";

const override = {
  display: "block",
  margin: "20 0",
  borderColor: "black",
};

export default function Loader({ loading }:{ loading: boolean }) {
  return (
    <div>
      <BarLoader
        loading={loading}
        cssOverride={override}
        width={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}
