import * as S from './style'

const Header = () => {
  return (
    <S.HeaderCont>
      <S.GridCont>
        <S.H1>Contact List 95&rsquo;</S.H1>
        <S.SearchFill>
          <S.ButtonSearch type="button" />
          <S.InputSearch type="search" className="search" />
        </S.SearchFill>
      </S.GridCont>
    </S.HeaderCont>
  )
}

export default Header
