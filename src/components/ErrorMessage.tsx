export default function ErrorMessage({ error }:{error:string | null} ) {
  if (!error) {
    return null;
  }
  return (
    <>
      <p>Something wrong, Please try again.</p>
    </>
  );
}
