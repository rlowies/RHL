import { useEffect, useState, useCallback } from "react";
import "./pages.scss";

const Home = () => {
  const [data, setData] = useState<any>([]);
  const [fullData, setFullData] = useState<any>([]);

  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const getPostsAsync = useCallback(async () => {
    setIsLoading(true);
    setData(await getPosts(`/api/getPosts/page/${page}`));
  }, [page]);

  useEffect(() => {
    getPostsAsync();
  }, [getPostsAsync]);

  useEffect(() => {
    if (!isLoading) {
      return;
    }

    setFullData(fullData.concat(data));
    setIsLoading(false);
  }, [data, fullData, isLoading]);

  const getPosts = async (url: string): Promise<string[]> => new Promise((resolve) => resolve(["someStuff"]));

  return (
    <>
      <div className="page-container">
        <button
          onClick={(e) => {
            setPage(page + 1);
          }}
        >
          More
        </button>
        <br />
        Data: {fullData}
      </div>
    </>
  );
};

export default Home;
