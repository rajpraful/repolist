import { useEffect, useState } from "react";
import { Container, Pagination } from "@mui/material";
import Box from "@mui/system/Box";
import RepoCard from "./RepoCard";
import RepoLoader from "./RepoLoader";

const RepoListComponent = () => {
  const [repos, setRepos] = useState([]);
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState(false);
  const [pageCount, setPageCount] = useState<number>(0);
  const [visibleFlags, setVisibleFlags] = useState(
    JSON.parse(window.localStorage.getItem("visibleFlags") ?? "{}")
  );

  const getRepos = async () => {
    try {
      setLoading(true);
      const apiData = await fetch(
        `https://api.github.com/search/repositories?sort=stars&q=javascript&per_page=10&page=${
          page ?? 1
        }`
      );
      const data = await apiData.json();
      console.log("data", data.items);
      setRepos(data.items);
      !pageCount &&
        setPageCount(Math.min(Math.round(data.total_count / 10), 100));
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getRepos();
  }, [page]);

  const handleVisible = (e: any) => {
    const nodeId = e.target.id;
    const updatedVisibleFlags = { ...visibleFlags, [nodeId]: e.target.checked };
    setVisibleFlags(updatedVisibleFlags);
    window.localStorage.setItem(
      "visibleFlags",
      JSON.stringify(updatedVisibleFlags)
    );
  };

  const handlePageChange = (e: any, page: number) => {
    setPage(page);
  };

  return (
    <Container maxWidth="lg">
      <Box py={2} className="Paginator">
        {pageCount ? (
          <Pagination
            count={pageCount}
            page={page}
            showFirstButton
            showLastButton
            color="primary"
            onChange={handlePageChange}
          />
        ) : (
          ""
        )}
      </Box>
      {loading ? (
        <RepoLoader />
      ) : (
        repos.map((repo: any) => (
          <RepoCard
            key={repo.node_id}
            data={repo}
            checked={visibleFlags?.[repo.node_id] ?? false}
            handleVisible={handleVisible}
          />
        ))
      )}
    </Container>
  );
};

export default RepoListComponent;
