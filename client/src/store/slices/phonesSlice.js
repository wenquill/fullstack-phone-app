import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import * as API from '../../api';

const PHONES_SLICE_NAME = 'users';

const initialState = {
  phones: [],
  isFetching: false,
  error: null,
};

// export const createUserThunk = createAsyncThunk(
//   `${USERS_SLICE_NAME}/post`,
//   async (payload, { rejectWithValue }) => {
//     try {
//       const {
//         data: { data },
//       } = await API.createUser(payload);

//       return data;
//     } catch (err) {
//       console.log(err)
//       return rejectWithValue({ errors: err.response.data });
//     }
//   }
// );

// export const getUsersThunk = createAsyncThunk(
//   `${USERS_SLICE_NAME}/get`,
//   async (payload, { rejectWithValue }) => {
//     try {
//       const {
//         data: { data },
//       } = await API.getUsers();

//       return data;
//     } catch (err) {
//       return rejectWithValue({});
//     }
//   }
// );

// export const deleteUserThunk = createAsyncThunk(
//   `${USERS_SLICE_NAME}/delete`,
//   async (payload, { rejectWithValue }) => {
//     try {
//       await API.deleteUser(payload);
//       return payload;
//     } catch (err) {
//       return rejectWithValue({ errors: err.response.data });
//     }
//   }
// );

const phonesSlice = createSlice({
  name: PHONES_SLICE_NAME,
  initialState,
});

const { reducer } = phonesSlice;

export default reducer;
