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

export const getProcessorByIdThunk = createAsyncThunk(
  `${PROCESSORS_SLICE_NAME}/get/id`,
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await API.getProcessorById(payload);
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
    // get processors
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
      state.error = payload.errors;
    });

     // get processor by id
     builder.addCase(getProcessorByIdThunk.pending, state => {
      state.isFetching = true;
      state.error = null;
    });

    builder.addCase(getProcessorByIdThunk.fulfilled, (state, { payload }) => {
      state.processors = payload;
      state.isFetching = false;
    });

    builder.addCase(getProcessorByIdThunk.rejected, (state, { payload }) => {
      state.isFetching = false;
      state.error = payload.errors;
    });
  },
});

const { reducer } = processorsSlice;

export default reducer;