import { Autocompletion } from 'types/autocompletion';
import { FuzzyCompletion } from 'types/fuzzycompletion';
import { LEIRecord } from 'types/lei-record';

const baseURL = 'https://api.gleif.org/api/v1/'

export async function getLEIRecordByID(id: string): Promise<LEIRecord> {
  const url = `${baseURL}lei-records/${id}`;
  const response = await fetch(url, {
    method: 'GET',
    headers: new Headers({
      'Accept': 'application/vnd.api+json'
    }),
  });

  if (!response.ok) {
    throw new Error(`Request failed with status: ${response.status}`);
  }

  const data = await response.json();
  return data;
}

export async function getAutocompletions(field: string, q: string): Promise<Autocompletion[]> {
  const url = `${baseURL}autocompletions?field=${field}&q=${q}`;
  const response = await fetch(url, {
    method: 'GET',
    headers: new Headers({
      'Accept': 'application/vnd.api+json'
    }),
  });

  if (!response.ok) {
    throw new Error(`Request failed with status: ${response.status}`);
  }

  const data = await response.json();
  return data.data;
}

export async function getFuzzyCompletions(field: string, q: string): Promise<FuzzyCompletion[]> {
  const url = `${baseURL}fuzzycompletions?field=${field}&q=${q}`;
  const response = await fetch(url, {
    method: 'GET',
    headers: new Headers({
      'Accept': 'application/vnd.api+json'
    }),
  });

  if (!response.ok) {
    throw new Error(`Request failed with status: ${response.status}`);
  }

  const data = await response.json();
  return data.data;
}

getLEIRecordByID("789000Q21SW842S9IJ58")
  .then((data) => { console.log(data) })
  .catch((error) => console.error(error))