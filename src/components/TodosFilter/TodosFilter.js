import React from 'react';
import { NavLink } from 'react-router-dom';
import './TodosFilter.scss';

const FILTERS = ['All', 'Active', 'Completed'];

export const TodosFilter = () => (
  <ul className="filters">
    {FILTERS.map(filter => (
      <li key={filter} className="filter">
        <NavLink
          className="filter_link"
          to={filter === 'All' ? '/' : `/${filter.toLowerCase()}`}
          exact
          activeClassName="filter_link--selected"
        >
          {filter}
        </NavLink>
      </li>
    ))}
  </ul>
);
