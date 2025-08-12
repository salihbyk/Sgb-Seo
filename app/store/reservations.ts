export interface Reservation {
  id: number;
  name: string;
  phone: string;
  email: string;
  service: string;
  staff: string;
  date: string;
  time: string;
  notes: string;
}

export const state = (): { list: Reservation[] } => ({
  list: [],
});

export const mutations = {
  ADD: (stateObj: { list: Reservation[] }, reservation: Reservation): void => {
    stateObj.list.push(reservation);
  },
};

export const actions = {
  add: ({ commit }, reservation: Reservation): void => {
    commit('ADD', reservation);
  },
};

export const getters = {
  all: (stateObj: { list: Reservation[] }): Reservation[] => stateObj.list,
};

export const namespaced = true;
