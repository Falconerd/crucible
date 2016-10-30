export const rendererScroll = (entities, movementX, movementY) => ({
  type: 'RENDERER_SCROLL',
  payload: {
    entities,
    movementX,
    movementY
  }
});

export const addEntity = entity => ({
  type: 'ADD_ENTITY',
  payload: {
    entity
  }
});
