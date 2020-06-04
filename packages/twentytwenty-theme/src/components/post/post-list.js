import usePostTypeInfiniteScroll from "@frontity/hooks/use-post-type-infinite-scroll";
import { connect, useConnect } from "frontity";
import React, { useEffect } from "react";

import Loading from "../loading";
import Post from "./post";

const PostList = ({ actions }) => {
  const { state } = useConnect();

  const data = state.source.get(state.router.link);

  const { posts, isLimit, isFetching, fetchNext } = usePostTypeInfiniteScroll({
    active: !!data.isPost,
  });

  /**
   * Once the post has loaded in the DOM, prefetch both the
   * home posts and the list component so if the user visits
   * the home page, everything is ready and it loads instantly.
   */
  useEffect(() => {
    actions.source.fetch("/");
  }, []);

  return (
    <div>
      {posts.map(({ key, link, isLast, Wrapper }) => (
        <Wrapper key={key}>
          <Post link={link} />
          {!isLast && <hr />}
        </Wrapper>
      ))}
      {isFetching && <Loading />}
      {isLimit && <button onClick={fetchNext}>Load Next Page</button>}
    </div>
  );
};

export default connect(PostList);
