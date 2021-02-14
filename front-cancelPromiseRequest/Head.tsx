/*
export const Head = () => {
    return (
      <thead>
        <tr>
          <th>Title</th>
          <th>Body</th>
        </tr>
      </thead>
    );
  };
*/
interface Props {
  properties: {
    key: number | symbol | string,
    title: string,
  }[];
  /*
    properties: {
    key: keyof ObjectType,
    title: string,
  }[];
  */
}

const Head: FunctionComponent<Props> = ({
  properties,
}) => {
  return (
    <thead>
      <tr>
        {
          properties.map(property => (
            <th key={String(property.key)}>{property.title}</th>
          ))
        }
      </tr>
    </thead>
  );
};