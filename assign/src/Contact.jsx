import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { submitForm } from './formSlice';
import pic from './pic.png';

export default function Contact() {
    const [formValues, setFormValues] = useState({
        name: '',
        email: '',
        website: '',
        projectDetails: ''
    });

    const [formErrors, setFormErrors] = useState({});
    const dispatch = useDispatch();
    const { isLoading, successMessage, errorMessage, formData } = useSelector((state) => state.form);

    const validate = () => {
        const errors = {};
        
        if (!formValues.name) {
            errors.name = 'Name is required';
        }
        
        if (!formValues.email) {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
            errors.email = 'Email format is invalid';
        }
        
        // Updated regex pattern for URL validation
        if (formValues.website && !/^(https?:\/\/)?(www\.)?([a-z0-9-]+\.)+[a-z]{2,}\/?/.test(formValues.website)) {
            errors.website = 'Website URL is invalid';
        }
        
        if (formValues.projectDetails.length < 20) {
            errors.projectDetails = 'Project Details must be at least 20 characters';
        }

        return errors;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = validate();
        if (Object.keys(errors).length === 0) {
            dispatch(submitForm(formValues));
        } else {
            setFormErrors(errors);
        }
    };

    useEffect(() => {
        if (successMessage) {
            setFormValues({
                name: '',
                email: '',
                website: '',
                projectDetails: ''
            });
            setFormErrors({});
        }
    }, [successMessage]);

    return (
        <div className='flex flex-wrap justify-between w-full'>
            <div className='flex-1 mt-14 lg:mt-5 mb-1 md:mb-3 md:w-1/2 lg:w-1/2'>
                <img src={pic} alt="Contact" className='h-auto' />
            </div>
            <div className='flex-none w-full md:w-1/2 lg:w-1/2 p-5 md:p-10 mt-5'>
                <div className='text-right'>
                    <div className='text-black font-bold text-3xl'>We'd love to hear</div>
                    <div  className='text-black font-bold text-3xl'>from you</div>
                </div>
                <form className='flex flex-col' onSubmit={handleSubmit}>
                    <input
                        className='border-2 p-5 mt-4'
                        type="text"
                        name="name"
                        placeholder="Name*"
                        value={formValues.name}
                        onChange={handleChange}
                        required
                    />
                    {formErrors.name && <span className='text-red-500'>{formErrors.name}</span>}

                    <input
                        className='border-2 p-5 mt-4'
                        type="email"
                        name="email"
                        placeholder="Email*"
                        value={formValues.email}
                        onChange={handleChange}
                        required
                    />
                    {formErrors.email && <span className='text-red-500'>{formErrors.email}</span>}

                    <input
                        className='border-2 p-5 mt-4'
                        type="text"
                        name="website"
                        placeholder="Website URL*"
                        value={formValues.website}
                        onChange={handleChange}
                        required
                    />
                    {formErrors.website && <span className='text-red-500'>{formErrors.website}</span>}

                    <textarea
                        className='border-2 p-5 mt-4'
                        name="projectDetails"
                        placeholder="Project Details*"
                        rows="3"
                        value={formValues.projectDetails}
                        onChange={handleChange}
                        required
                    ></textarea>
                    {formErrors.projectDetails && <span className='text-red-500'>{formErrors.projectDetails}</span>}

                    <button className='bg-black text-white p-3 mt-12' type="submit" disabled={isLoading}>
                        {isLoading ? 'Submitting...' : 'Send Proposal'}
                    </button>

                    {successMessage && <span className='text-green-500 mt-4'>{successMessage}</span>}
                    {errorMessage && <span className='text-red-500 mt-4'>{errorMessage}</span>}
                </form>

                {successMessage && formData && (
                    <div className='mt-4'>
                        <h3 className='text-lg font-bold'>Submitted Data:</h3>
                        <p><strong>Name:</strong> {formData.name}</p>
                        <p><strong>Email:</strong> {formData.email}</p>
                        <p><strong>Website URL:</strong> {formData.website}</p>
                        <p><strong>Project Details:</strong> {formData.projectDetails}</p>
                    </div>
                )}
            </div>
        </div>
    );
}
