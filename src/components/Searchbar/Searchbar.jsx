import { submitQuery } from 'constants/actions';
import { Button, Input, SearchbarStyled, SearchForm } from './Searchbar.styled';
import { useDispatch } from 'react-redux';

const Searchbar = () => {
  const dispatch = useDispatch();

  const onFormSubmit = e => {
    e.preventDefault();
    const input = e.currentTarget.elements.queryInput.value;
    if (input.trim() === '')
      return alert('Please enter the some text in input');
    dispatch(submitQuery(input.trim().toLowerCase()));
  };

  return (
    <SearchbarStyled className="searchbar">
      <SearchForm onSubmit={onFormSubmit} className="form">
        <Button type="submit" className="button">
          <span className="button-label">Search</span>
        </Button>

        <Input
          className="input"
          type="text"
          name="queryInput"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </SearchForm>
    </SearchbarStyled>
  );
};

export default Searchbar;
