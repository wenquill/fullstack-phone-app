import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as API from '../../api';

const PROCESSORS_SLICE_NAME = 'processors';

const initialState = {
  processors: [],
  isFetching: false,
  error: null,
};

export const getProcessorsThunk = createAsyncThunk(
  `${PROCESSORS_SLICE_NAME}/get`,
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await API.getProcessors();
      return data;
    } catch (err) {
      return rejectWithValue({ errors: err.response.data });
    }
  }
);

const processorsSlice = createSlice({
  name: PROCESSORS_SLICE_NAME,
  initialState,
  extraReducers: builder => {
    // get phones
    builder.addCase(getProcessorsThunk.pending, state => {
      state.isFetching = true;
      state.error = null;
    });

    builder.addCase(getProcessorsThunk.fulfilled, (state, { payload }) => {
      state.processors = payload;
      state.isFetching = false;
    });

    builder.addCase(getProcessorsThunk.rejected, (state, { payload }) => {
      state.isFetching = false;
      state.error = payload;
    });
  },
});

const { reducer } = processorsSlice;

export default reducer;