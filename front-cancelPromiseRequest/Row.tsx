/*
interface Props {
    title: string;
    body: string;
  }
   
export const Row: FunctionComponent<Props> = ({
  title,
  body,
}) => {
  return (
    <tr>
      <td>{title}</td>
      <td>{body}</td>
    </tr>
  );
};
*/
interface Props<ObjectType> {
  object: ObjectType;
}
function Row<ObjectType extends { id: number }>(
  { object, properties }: Props<ObjectType>
) {
  return (
    <tr>
      {
        properties.map(property => (
          <td key={String(property.key)}>
            {object[property.key]}
          </td>
        ))
      }
    </tr>
  );
}