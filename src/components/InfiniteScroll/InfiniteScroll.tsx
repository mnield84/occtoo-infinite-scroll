import { useEffect } from "react";
import { useInfiniteQuery } from "react-query";
import { useInView } from "react-intersection-observer";
import ScrollItem from "./ScrollItem";
import { ITodos } from "../../types/todos";
import { Grid } from "../Layout/Layout.styles";

export const InfiniteScroll = ({ page, api, limit }: IInfiniteScroll) => {
  const { ref, inView } = useInView();

  const fetchItems = async (page: number) => {
    const response = await fetch(`${api}?_page=${page}&_limit=${limit}`);
    return response.json() as Promise<ITodos[]>;
  };

  const { data, isSuccess, hasNextPage, fetchNextPage, isFetchingNextPage } =
    useInfiniteQuery("todos", ({ pageParam = page }) => fetchItems(pageParam), {
      getNextPageParam: (lastPage, allPages) => {
        const nextPage =
          lastPage.length === limit ? allPages.length + 1 : undefined;
        return nextPage;
      },
    });

  const content =
    isSuccess &&
    data.pages.map((page) =>
      page.map((todos: ITodos, i: number) => {
        if (page.length >= 3 && page.length - 3 === i) {
          return <ScrollItem todo={todos} ref={ref} key={`todo_${i}`} />;
        }
        return <ScrollItem todo={todos} key={`todo_${i}`} />;
      })
    );

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage, hasNextPage]);

  return (
    <Grid gridGap="1rem" justifyContent={"center"} p={"100px 0"}>
      {content}
      {isFetchingNextPage && <h3>Loading...</h3>}
    </Grid>
  );
};

interface IInfiniteScroll {
  page: number;
  api: string;
  limit: number;
}
