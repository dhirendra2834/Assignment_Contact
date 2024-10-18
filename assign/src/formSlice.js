import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const submitForm = createAsyncThunk('form/submit', async (formValues) => {
    // Simulate an API call
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(formValues); // Return the form values
        }, 1000);
    });
});

const formSlice = createSlice({
    name: 'form',
    initialState: {
        isLoading: false,
        successMessage: '',
        errorMessage: '',
        formData: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(submitForm.pending, (state) => {
                state.isLoading = true;
                state.successMessage = '';
                state.errorMessage = '';
            })
            .addCase(submitForm.fulfilled, (state, action) => {
                state.isLoading = false;
                state.successMessage = 'Form submitted successfully!';
                state.errorMessage = '';
                state.formData = action.payload; // Save the submitted form data
            })
            .addCase(submitForm.rejected, (state, action) => {
                state.isLoading = false;
                state.errorMessage = 'Submission failed. Please try again.';
                state.successMessage = '';
            });
    },
});

export default formSlice.reducer;
