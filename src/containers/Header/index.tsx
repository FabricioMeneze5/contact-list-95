import { HeaderCont, H1, SearchFill, ButtonSearch, InputSearch } from './style'
const Header = () => {
  return (
    <HeaderCont>
      <H1>Contact List 95&rsquo;</H1>
      <SearchFill>
        <ButtonSearch type="button" />
        <InputSearch type="search" className="search" />
      </SearchFill>
    </HeaderCont>
  )
}

export default Header
