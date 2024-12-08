import { createSlice } from "@reduxjs/toolkit";

export interface IHabit{
    id: string,
    name: string,
    frequency: 'daily' | 'weekly',
    completedDates: string[],
    createdAt: string,
}

interface HabitState{
    habits: IHabit[];
}

const initialState: HabitState = {
    habits:[],
}

const habitSlice = createSlice({
    name: 'habits',
    initialState,
    reducers:{
        addHabit: () => {},
    }

});

export const {addHabit} = habitSlice.actions;
export default habitSlice.reducer;