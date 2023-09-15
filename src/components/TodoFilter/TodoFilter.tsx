import { Select } from '../../types/Select';

type Props = {
  query: string;
  onQueryChange: (value: string) => void;
  selectedFilter: string;
  onSelectFilter: (value: Select) => void;
};

export const TodoFilter: React.FC<Props> = ({
  query,
  onQueryChange,
  selectedFilter,
  onSelectFilter,
}) => {
  const resetFilters = () => {
    onQueryChange('');
    onSelectFilter(Select.all);
  };

  return (
    <form className="field has-addons">
      <p className="control">
        <span className="select">
          <select
            data-cy="statusSelect"
            value={selectedFilter}
            onChange={(event) => onSelectFilter(event?.target.value as Select)}
          >
            {Object.entries(Select).map(([key, value]) => (
              <option value={key} key={key}>
                {value}
              </option>
            ))}
          </select>
        </span>
      </p>

      <p className="control is-expanded has-icons-left has-icons-right">
        <input
          data-cy="searchInput"
          type="text"
          className="input"
          placeholder="Search..."
          value={query}
          onChange={(event) => onQueryChange(event.target.value)}
        />
        <span className="icon is-left">
          <i className="fas fa-magnifying-glass" />
        </span>

        <span className="icon is-right" style={{ pointerEvents: 'all' }}>
          {query && (
            <button
              data-cy="clearSearchButton"
              type="button"
              className="delete"
              aria-label="Clear Search"
              onClick={resetFilters}
            />
          )}
        </span>
      </p>
    </form>
  );
};
