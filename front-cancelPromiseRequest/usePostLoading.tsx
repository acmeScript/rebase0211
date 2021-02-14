import { useRouteMatch } from 'react-router-dom';
import { useEffect, useState } from 'react';
import RaceConditionGuard from '../utilities/RaceConditionGuard';
 
const raceConditionGuard = new RaceConditionGuard();
/* usage
const raceConditionGuard = new RaceConditionGuard<Post>();
raceConditionGuard.getGuardedPromise(
  fetch(`http://localhost:5000/posts/${params.id}`)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject();
    })
)
*/

interface Post {
    id: number;
    title: string;
    body: string;
}

function usePostLoading() {
  const { params } = useRouteMatch();
  const [post, setPostState] = useState<Post>();
  const [isLoading, setLoadingState] = useState(false);
 
  useEffect(
    () => {
      setLoadingState(true);
      raceConditionGuard.getGuardedPromise(
        fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
      )
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
          return Promise.reject();
        })
        .then((fetchedPost) => {
          setPostState(fetchedPost);
        })
        .finally(() => {
          setLoadingState(false);
        });
    },
    [params],
  );
 
  return {
    post,
    isLoading,
  };
}
 
export default usePostLoading;