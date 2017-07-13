/**
 * Created by 35107 on 2017/6/22.
 */
import * as Types from './mutatins-types';
const mutations = {
  [Types.ADD_COLLECT](state, book){
    !state.collects.some(item => item.id == book.id) ? state.collects.push(book) : null;
    localStorage.setItem('collects', JSON.stringify(state.collects));
  },
  [Types.REMOVE_COLLECT](state, id){
    state.collects = state.collects.filter(item => item.id != id);
    localStorage.setItem('collects', JSON.stringify(state.collects));
  }
};

export default mutations;
