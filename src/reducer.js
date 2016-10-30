import * as t from './actionTypes';

const initialState = {
  gridSize: 32,
  viewportWidth: 640,
  viewportHeight: 320,
  rendererWidth: 640,
  rendererHeight: 320,
  rendererX: 0,
  rendererY: 0,
  entities: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case t.RENDERER_SCROLL:
      return renderScroll(state, action);
    case t.ADD_ENTITY:
      return addEntity(state, action);
    default:
      return state;
  }
}

const renderScroll = (state, action) => {
  const movementX = action.payload.movementX;
  const movementY = action.payload.movementY;
  const entities = state.entities.slice();
  entities.map(entity => console.log(entity));
  return state;
};

const addEntity = (state, action) => {
  const entities = state.entities.slice();
  entities.push(action.payload.entity);
  console.log(entities);
  return Object.assign({}, state, { entities });
};
