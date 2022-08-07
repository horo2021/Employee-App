import { createSlice, current } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { employee } from "./components/employeeList/EmployeeList";

export interface DataState {
  list: employee[];
  deletedList: employee[];
  selectedEmployeeId: string | null;
  listCount: string;
  deletedListCount: string;
}

const initialState: DataState = {
  list: [
    {
      dateOfBirth: "",
      dateOfEmployment: "",
      deletedAt: null,
      email: "",
      homeAddress: {
        addressLine2: "",
        addressLine1: "",
        ZIPCode: "",
        city: "",
        _id: "",
      },
      isDeleted: false,
      name: "",
      phoneNumber: "",
      _id: "",
    },
  ],
  deletedList: [],
  selectedEmployeeId: null,
  listCount: "",
  deletedListCount: "",
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    listHandler: (state, action: PayloadAction<Array<employee>>) => {
      state.list = action.payload;
    },
    deleteEmployeeHandler: (state, action: PayloadAction<string>) => {
      fetch(
        `http://142.132.229.249:3000/employees/soft-delete/${action.payload}`,
        {
          method: "DELETE",
          headers: {
            accept: "*/*",
          },
        }
      );
      state.list = state.list.filter((item) => {
        return action.payload !== item._id;
      });
    },
    deletedEmployeeList: (state, action: PayloadAction<Array<employee>>) => {
      state.deletedList = action.payload;
    },
    selectedEmployeeIdHandler: (state, action: PayloadAction<string>) => {
      state.selectedEmployeeId = action.payload;
    },
    listCountHandler: (state, action: PayloadAction<string>) => {
      state.listCount = action.payload;
    },
    deletedEmployeeListCount: (state, action: PayloadAction<string>) => {
      state.deletedListCount = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  listHandler,
  deleteEmployeeHandler,
  deletedEmployeeList,
  selectedEmployeeIdHandler,
  listCountHandler,
  deletedEmployeeListCount,
} = dataSlice.actions;

export default dataSlice.reducer;
