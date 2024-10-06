// import { useState } from 'react'
import * as S from './style'

type Props = {
  creatingContact: boolean
}

const Header = ({ creatingContact }: Props) => {
  return (
    <S.HeaderCont>
      {creatingContact ? (
        <>
          <S.GridCont>
            <S.H1>Create new contact</S.H1>
          </S.GridCont>
        </>
      ) : (
        <>
          <S.GridCont>
            <S.H1>Contact List 95&rsquo;</S.H1>
            <S.SearchFill>
              <S.ButtonSearch type="button" />
              <S.InputSearch type="search" className="search" />
            </S.SearchFill>
          </S.GridCont>
        </>
      )}
    </S.HeaderCont>
  )
}

export default Header
