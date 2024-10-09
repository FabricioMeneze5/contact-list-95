import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

import * as S from './style'
import { changeFilter } from '../../store/reducers/filter'

type Props = {
  creatingContact: boolean
}

const Header = ({ creatingContact }: Props) => {
  const dispatch = useDispatch()
  const { term } = useSelector((state: RootReducer) => state.filter)

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
              <S.InputSearch
                type="text"
                value={term}
                onChange={(e) => dispatch(changeFilter(e.target.value))}
              />
            </S.SearchFill>
          </S.GridCont>
        </>
      )}
    </S.HeaderCont>
  )
}

export default Header
