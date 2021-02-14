import React from 'react';
import usePostLoading from './usePostLoading';
import PostsTable from './PostsTable';
import useUsersLoading from './useUsersLoading';
/*
const PostsPage = () => {
  const { posts, isLoading } = usePostsLoading();
  return (
    <div>
      {
        !isLoading && (
          <PostsTable
            posts={posts}
          />
        )
      }
    </div>
  );
};
*/
const PostsPage = () => {
  const { post, isLoading } = usePostLoading();
  const { users, isLoadingTwo } = useUsersLoading();
  return (
    <div>
      {
        !isLoading && (
          <PostsTable
            objects={post}
            properties={[
              {
                key: 'title',
                title: 'Title'
              },
              {
                key: 'body',
                title: 'Body'
              },
            ]}
          />
        ) 
        &&
        <PostsTable
            objects={users}
            properties={[
              {
                key: 'title',
                title: 'Title'
              },
              {
                key: 'body',
                title: 'Body'
              },
            ]}
          />
        ) 
      }
    </div>
  );
};