interface GlobalInitialState {
  name: string;
}

const reducers = {
  GET_SOMETHING: (state: GlobalInitialState) => {
    console.log(state.name);
  },
};

export default reducers;
