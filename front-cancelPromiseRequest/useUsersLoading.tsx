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

interface Users {
    id: number;
    name: string;
    email: string;
}

function useusersLoading() {
  const { params } = useRouteMatch();
  const [users, setUsersState] = useState<Users>();
  const [isLoading, setLoadingState] = useState(false);
 
  useEffect(
    () => {
      setLoadingState(true);
      raceConditionGuard.getGuardedPromise(
        fetch(`https://jsonplaceholder.typicode.com/users`)
      )
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
          return Promise.reject();
        })
        .then((fetchedPost) => {
            setUsersState(fetchedPost);
        })
        .finally(() => {
          setLoadingState(false);
        });
    },
    [params],
  );
 
  return {
    users,
    isLoading,
  };
}
 
export default useUsersLoading;