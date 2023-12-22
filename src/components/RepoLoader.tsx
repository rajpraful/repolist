import Skeleton from "@mui/material/Skeleton";

export const SingleRepoLoader = () => (
  <Skeleton
    variant="rectangular"
    height={115}
    style={{ marginBottom: "1rem" }}
    animation="wave"
  />
);

const RepoLoader = () => {
  return (
    <div>
      <SingleRepoLoader />
      <SingleRepoLoader />
      <SingleRepoLoader />
      <SingleRepoLoader />
      <SingleRepoLoader />
    </div>
  );
};

export default RepoLoader;
