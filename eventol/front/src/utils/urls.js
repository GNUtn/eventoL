import _ from 'lodash';
import {HOME_REQUIRED_FIELDS, REPORT_REQUIRED_FIELDS} from './constants';

// eslint-disable-next-line prefer-destructuring
export const host = window.location.host;

export const EVENTOL_DOCUMENTATION = 'http://eventol.github.io/eventoL/#/';

export const INDEX_URL = '/';
export const REPORT_URL = '/report';
export const LOGIN_URL = '/accounts/login/';
export const LOGOUT_URL = '/accounts/signup/';
export const PROFILE_URL = '/accounts/profile/';

export const API_URL = '/events/api/';
export const EVENTS_API_URL = `${API_URL}events/`;

export const WS_URL = `ws://${host}/`;
export const EVENTS_WS_URL = `${WS_URL}updates/events/`;

export const CREATE_EVENT = '/create-event/';

export const getTagUrl = slug => `/tags/${slug}`;
export const getEventUrl = slug => `/events/${slug}/`;
export const getApiFullUrl = url => `/api/events/${url}`;

export const getEventApiUrl = (queryParams = '') =>
  `/api/events/?${queryParams}`;

export const getReportQueryParams = (pageSize, page, sorted) => {
  const offset = page * pageSize;
  let queryParams = `limit=${pageSize}&offset=${offset}&fields=${REPORT_REQUIRED_FIELDS}`;
  if (sorted && sorted.length > 0) {
    const [{id: name, desc}] = sorted;
    queryParams += `&ordering=${desc ? '-' : ''}${name}`;
  }
  return queryParams;
};

export const getReportUrl = (pageSize, page, sorted) =>
  getEventApiUrl(getReportQueryParams(pageSize, page, sorted));

export const getWsUrl = protocol =>
  `${_.isEmpty(protocol) ? 'ws' : protocol}://${host}/updates/`;

const addSlugParams = slug => (slug ? `&tags__slug=${slug}` : '');

export const getMyEventsUrl = slug =>
  `?my_events=true&fields=${HOME_REQUIRED_FIELDS}${addSlugParams(slug)}`;

export const getSearchUrl = (searchTerm, slug) =>
  `?search=${searchTerm}&fields=${HOME_REQUIRED_FIELDS}${addSlugParams(slug)}`;

export const getRecentEventsUrl = slug =>
  `?ordering=-created_at&registration_is_open=true&fields=${HOME_REQUIRED_FIELDS}${addSlugParams(
    slug
  )}`;

export const getUpcomingEventsUrl = slug =>
  `?registration_is_open=true&ordering=last_date&fields=${HOME_REQUIRED_FIELDS}${addSlugParams(
    slug
  )}`;

export const getFeaturedEventsUrl = slug =>
  `?ordering=-attendees_count&registration_is_open=true&fields=${HOME_REQUIRED_FIELDS}${addSlugParams(
    slug
  )}`;

export const getFinishedEventsUrl = slug =>
  `?registration_is_open=false&ordering=-attendees_count&fields=${HOME_REQUIRED_FIELDS}${addSlugParams(
    slug
  )}`;

export const getEventsWithConfirmedScheduleUrl = slug =>
  `?schedule_confirmed=true&registration_is_open=true&fields=${HOME_REQUIRED_FIELDS}${addSlugParams(
    slug
  )}`;

export const goToUrl = url => {
  window.location.href = url;
};
