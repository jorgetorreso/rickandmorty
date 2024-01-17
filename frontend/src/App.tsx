import { useEffect, useState } from 'react'
import reactLogo from './assets/Rick_and_Morty.svg'
import './App.css'
import CustomSlider from '@/components/CustomSlider'
import SimpleCard from './components/SimpleCard'
import TopBar from './components/TopBar'
import { IFilterOption, IFilters } from './interfaces/characters'
import { useSelector } from 'react-redux'
import { useAppDispatch } from '@/store/hooks'
import { fetchCharacters, selectCharacters } from '@/store/characters/characterSlice'
import { useLocalStorage } from 'usehooks-ts'
import { fetchUser, selectUser } from './store/auth/authSlice'
import { isEmptyValue } from './utils/helper'

function App() {
  const [userId, setUserId] = useLocalStorage('userId', '')
  const [filter, setFilter] = useState<IFilters>({})
  const dispatch = useAppDispatch();
  const data = useSelector(selectCharacters);
  const user = useSelector(selectUser);

  const sliderData = data.filter((item) => item.status === 'Alive') || [];

  const resetFilters = () => {
    setFilter({});
  };

  const onFilterChange = (
    option: IFilterOption
  ) => {
    if (option.value === 'All') return resetFilters();
    setFilter({ [option.type]: option.value });
  };

  useEffect(() => {
    if (isEmptyValue(userId)) dispatch(fetchUser());
  }, []);

  useEffect(() => {
    if (user?.id) setUserId(user.id)
  }, [setUserId, user]);

  useEffect(() => {
    if (userId) dispatch(fetchCharacters(filter));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter]);

  return (
    <>
      <header className='Header'>
        <img src={reactLogo} className="App-logo" alt="React logo" />
      </header>
      <CustomSlider items={sliderData} />
      <TopBar filters={filter} onSelectType={onFilterChange} />
      <main>
        {data.length > 0 && data.map((item) =>
          <SimpleCard key={item.id} item={item} />
        )}
      </main>
    </>
  )
}

export default App
