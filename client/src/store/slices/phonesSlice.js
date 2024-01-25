import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as API from '../../api';

const PHONES_SLICE_NAME = 'phones';

const initialState = {
  phones: [],
  isFetching: false,
  error: null,
};

export const createPhoneThunk = createAsyncThunk(
  `${PHONES_SLICE_NAME}/post`,
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await API.createPhone(payload);
      return data;
    } catch (err) {
      return rejectWithValue({ errors: err.response.data });
    }
  }
);

export const getPhonesThunk = createAsyncThunk(
  `${PHONES_SLICE_NAME}/get`,
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await API.getPhones();
      return data;
    } catch (err) {
      return rejectWithValue({ errors: err.response.data });
    }
  }
);

export const getPhoneByIdThunk = createAsyncThunk(
  `${PHONES_SLICE_NAME}/get/id`,
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await API.getPhoneById(payload);
      return data;
    } catch (err) {
      return rejectWithValue({ errors: err.response.data });
    }
  }
);

export const deletePhoneByIdThunk = createAsyncThunk(
  `${PHONES_SLICE_NAME}/delete/id`,
  async (payload, { rejectWithValue }) => {
    try {
      await API.deletePhoneById(payload);
      return payload;
    } catch (err) {
      return rejectWithValue({ errors: err.response.data });
    }
  }
);

export const updatePhoneByIdThunk = createAsyncThunk(
  `${PHONES_SLICE_NAME}/patch/id`,
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await API.updatePhoneById({
        id: payload.id,
        data: payload.data,
      });
      return data;
    } catch (err) {
      return rejectWithValue({ errors: err.response.data });
    }
  }
);

const phonesSlice = createSlice({
  name: PHONES_SLICE_NAME,
  initialState,
  extraReducers: builder => {
    // get phones
    builder.addCase(getPhonesThunk.pending, state => {
      state.isFetching = true;
      state.error = null;
    });

    builder.addCase(getPhonesThunk.fulfilled, (state, { payload }) => {
      state.phones = payload;
      state.isFetching = false;
    });

    builder.addCase(getPhonesThunk.rejected, (state, { payload }) => {
      state.isFetching = false;
      state.error = payload.errors;
    });

    // get phone by id
    builder.addCase(getPhoneByIdThunk.pending, state => {
      state.isFetching = true;
      state.error = null;
    });

    builder.addCase(getPhoneByIdThunk.fulfilled, (state, { payload }) => {
      state.phones = payload;
      state.isFetching = false;
    });

    builder.addCase(getPhoneByIdThunk.rejected, (state, { payload }) => {
      state.isFetching = false;
      state.error = payload.errors;
    });

    // post phone
    builder.addCase(createPhoneThunk.pending, state => {
      state.isFetching = true;
      state.error = null;
    });

    builder.addCase(createPhoneThunk.fulfilled, (state, { payload }) => {
      state.phones.push(payload);
      state.isFetching = false;
    });

    builder.addCase(createPhoneThunk.rejected, (state, { payload }) => {
      state.isFetching = false;
      state.error = payload.errors;
    });

    // delete phone by id
    builder.addCase(deletePhoneByIdThunk.pending, state => {
      state.isFetching = true;
      state.error = null;
    });

    builder.addCase(deletePhoneByIdThunk.fulfilled, (state, { payload }) => {
      state.phones = state.phones.filter(p => p.id !== payload);
      state.isFetching = false;
    });

    builder.addCase(deletePhoneByIdThunk.rejected, (state, { payload }) => {
      state.isFetching = false;
      state.error = payload.errors;
    });

    // patch phone by id
    builder.addCase(updatePhoneByIdThunk.pending, state => {
      state.isFetching = true;
      state.error = null;
    });

    builder.addCase(
      updatePhoneByIdThunk.fulfilled,
      (state, { payload: { id, data } }) => {
        const updatedPhoneIndex = state.phones.findIndex(p => p.id === id);
        state.phones[updatedPhoneIndex] = {
          ...state.phones[updatedPhoneIndex],
          ...data,
        };
        state.isFetching = false;
      }
    );

    builder.addCase(updatePhoneByIdThunk.rejected, (state, { payload }) => {
      state.isFetching = false;
      state.error = payload.errors;
    });
  },
});

const { reducer } = phonesSlice;

export default reducer;
