type Props = {
  name: string;
};

const index = ({ name = 'Budi' }: Props) => (
  <div>
    <h1>Hello {name}</h1>
  </div>
);

export default index;
