import {
  HeaderCont,
  H1,
  SearchFill,
  ButtonSearch,
  InputSearch,
  GridCont
} from './style'
const Header = () => {
  return (
    <HeaderCont>
      <GridCont>
        <H1>Contact List 95&rsquo;</H1>
        <SearchFill>
          <ButtonSearch type="button" />
          <InputSearch type="search" className="search" />
        </SearchFill>
      </GridCont>
    </HeaderCont>
  )
}

export default Header
