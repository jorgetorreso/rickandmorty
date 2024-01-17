import { IFilterOption, IFilters } from '@/interfaces/characters';
import React from 'react';
import './TopBar.scss';
import { isEmptyValue } from '@/utils/helper';

interface ITopBarProps {
    filters: IFilters;
    onSelectType: (type: IFilterOption) => void;
}

const options = [
    {
        type: 'reset',
        value: 'All'
    },
    {
        type: 'gender',
        value: 'female'
    },
    {
        type: 'gender',
        value: 'male'
    },
    {
        type: 'species',
        value: 'Human'
    },
    {
        type: 'species',
        value: 'Alien'
    }

];

const TopBar: React.FC<ITopBarProps> = ({ filters, onSelectType }) => {

    const currentFilter = !isEmptyValue(filters) ? Object.entries(filters)[0] : null;

    return (
        <div className="TopBar">
            <span>
                Characters  {currentFilter && `by ${currentFilter[0]} ${currentFilter[1]}`}
            </span>

            <div className="buttons">
                {options.map((option) => (
                    <button
                        key={`${option.type}-${option.value}`}
                        onClick={() => onSelectType(option)}
                        className={(option.type === 'reset' && !currentFilter) || currentFilter && (currentFilter[0] === option.type && currentFilter[1] === option.value) ? 'selected' : ''}
                        title={option.value}
                        type='button'
                    >
                        {option.value}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default TopBar;
