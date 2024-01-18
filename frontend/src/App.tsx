import { useEffect, useState } from 'react'
import reactLogo from './assets/Rick_and_Morty.svg'
import './App.css'
import CustomSlider from '@/components/CustomSlider'
import SimpleCard from './components/SimpleCard'
import TopBar from './components/TopBar'
import { IFilterOption, IFilters } from './interfaces/characters'
import { useSelector } from 'react-redux'
import { useAppDispatch } from '@/store/hooks'
import { fetchAddFavoriteCharacter, fetchCharacters, fetchRemoveFavoriteCharacter, selectCharacters, selectFavoriteStatus } from '@/store/characters/characterSlice'
import { useLocalStorage } from 'usehooks-ts'
import { selectUser } from './store/auth/authSlice';

function App() {
  const [userId, setUserId] = useLocalStorage('userId', '')
  const [filter, setFilter] = useState<IFilters>({})
  const dispatch = useAppDispatch();
  const data = useSelector(selectCharacters);
  const favoriteStatus = useSelector(selectFavoriteStatus);
  const user = useSelector(selectUser);

  const itemList = data || [];

  const sliderData = itemList.filter((item) => item.status === 'Alive');

  const resetFilters = () => {
    setFilter({});
  };

  const onFilterChange = (
    option: IFilterOption
  ) => {
    if (option.value === 'All') return resetFilters();
    setFilter({ [option.type]: option.value });
  };

  const handleToggleFavorite = (
    id: string,
    isFavorite: boolean,
  ) => {

    if (favoriteStatus === "pending") return false;
    if (isFavorite) {
      dispatch(fetchAddFavoriteCharacter(id))
    } else {
      dispatch(fetchRemoveFavoriteCharacter(id))
    }
  };

  useEffect(() => {
    if (user?.id) setUserId(user.id)
  }, [setUserId, user]);

  useEffect(() => {
    if (userId) dispatch(fetchCharacters(filter));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter]);

  useEffect(() => {
    if (favoriteStatus === "succeeded") dispatch(fetchCharacters(filter));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [favoriteStatus]);


  return (
    <>
      <header className='Header'>
        <img src={reactLogo} className="App-logo" alt="React logo" />
      </header>
      <CustomSlider items={sliderData} />
      <TopBar filters={filter} onSelectType={onFilterChange} />
      <main>
        {itemList.length > 0 && itemList.map((item) =>
          <SimpleCard key={item.id} item={item} onToggleFavorite={handleToggleFavorite} />
        )}
      </main>
    </>
  )
}

export default App
