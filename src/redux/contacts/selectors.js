import { selectNameFilter } from '../filters/selectors';
import { createSelector } from '@reduxjs/toolkit';
import Fuse from 'fuse.js';

export const selectIsLoading = state => state.contacts.loading;
export const selectError = state => state.contacts.error;
export const selectContacts = state => state.contacts.items;
export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, filter) => {
    if (!filter) {
      return contacts;
    }
    const options = {
      includeScore: true,
      keys: ['name', 'number'],
    };
    const fuse = new Fuse(contacts, options);
    const filteredResults = fuse.search(filter);
    return filteredResults.map(result => result.item);
  }
);