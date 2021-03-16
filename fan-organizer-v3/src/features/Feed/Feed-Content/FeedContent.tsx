import React from "react";
import { Box } from "grommet";
import { Page } from "../../../ui/Layout/Page";
import { posts } from "./posts";
import { useEntity } from "../../../context/loading-context";
import { RenderArea } from '../../../context/routes-areaRenderer-context';

function Post({ post }) {
  return (
    <div
      style={{
        border:"1px solid black",
        display:"block",
        maxWidth:"600px"
      }}>
      <img
        // src={`https://picsum.photos/600/400?d=${Date.now()}`}
        src={post.img}
        alt={post.alt || "random image from unsplash"}
        style={{ width: "100%" }}
      />
    </div>
  );
}
export const FeedContent: React.FunctionComponent<{}> = () => {
  const { loading } = useEntity("/api/posts");
  if (loading) {
    return null;
  }
  return (
    <Page title="Feed" documentTitle="Feed">
        <Box gap="medium" flex={{ grow: 0 }}>
          {posts.map(post => (
            <Post key={post.id} post={post} />
          ))}
        </Box>
    </Page>
  );
};
