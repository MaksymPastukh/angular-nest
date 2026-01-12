import {FilterData} from './product-response-filter.interface';
import {SelectedFilters} from './product-selected-filters.interface';


export interface FilterState {
  filterData: FilterData | null;

  selected: SelectedFilters;

  ui: {
    currentCategory: string | null;
    currentStyle: string | null;
  };

  isLoading: boolean;
  error: string | null;
  initialized: boolean;
}
