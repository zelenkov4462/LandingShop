import { FilterIcons, FilterMenu, FilterWrapper } from './styled';
import filter from '../../../../assets/svg/filter.svg';
import grid from '../../../../assets/svg/viewgrid.svg';
import list from '../../../../assets/svg/viewlist.svg';
import { typographyTypes } from '../../../atoms/Typography/constants';

import Typography from '../../../atoms/Typography/Typography';

const Filter = () => {
  return (
    <FilterWrapper>
      <FilterMenu>
        <img src={ filter } alt="filter"/>
        <Typography type={ typographyTypes.body } Tag="span">
          FILTER
        </Typography>
      </FilterMenu>
      <FilterIcons>
        <img src={ list } alt=""/>
        <img src={ grid } alt=""/>
      </FilterIcons>
    </FilterWrapper>
  );
};

export default Filter;