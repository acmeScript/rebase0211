import React, { FunctionComponent } from 'react';
import { Head } from './Head';
import { Row } from './Row';
/*
interface Post {
  id: number;
  title: string; 
  body: string;
} 

interface Props<ObjectType> {
    objects: ObjectType[];
    properties: {
        key: keyof ObjectType,
        label: string,
    }[];
}

const PostsTable: FunctionComponent<Props> = ({
  posts,
}) => {
  return (
    <table>
      <Head/>
      <tbody>
        {
          posts.map(post => (
            <Row
              key={post.id}
              title={post.title}
              body={post.body}
            />
          ))
        }
      </tbody>
    </table>
  );
};
*/
interface Props<ObjectType> {
  objects: ObjectType[];
  properties: {
    key: keyof ObjectType,
    title: string,
  }[];
}

function PostTable<ObjectType extends { id: number }>(
  { objects, properties }: PropsWithChildren<Props<ObjectType>>,
) {
  return (
    <table>
      <Head
        properties={properties}
      />
      <tbody>
        {
          objects.map(object => (
            <Row
              key={object.id}
              object={object}
              properties={properties}
            />
          ))
        }
      </tbody>
    </table>
  );
}
export default PostTable;