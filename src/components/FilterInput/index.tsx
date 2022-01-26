import { BsSearch } from "react-icons/bs";

import Container from "./styles";

interface IFilterInput {
  searchValue: string;
  setSearchValue: (searchValue: string) => void;
}

const FilterInput = ({ searchValue, setSearchValue }: IFilterInput) => {
  return (
    <Container>
      <input
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <BsSearch />
    </Container>
  );
};

export default FilterInput;
