import { apiQuery } from "../../libs/query/query";

interface Props {
  name: string;
  id: string;
}

const StarSection = ({ name, id }: Props) => {
  const submitStar = async (id: string) => {
    await apiQuery(id);
  };

  return (
    <section>
      <h3>Valin stjarna er: {name}</h3>
      <button type="button" onClick={() => submitStar(id)}>
        Birta stjörnu?
      </button>
    </section>
  );
};

export default StarSection;
