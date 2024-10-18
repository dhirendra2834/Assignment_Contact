# Contact page Form Project

This project is a simple contact form built with React and Redux, allowing users to submit their information and project details. The form validates input fields and handles submission with error and success messages.



## Features

- Form validation for required fields and email format
- User-friendly error messages for validation issues
- Loading state while submitting the form
- Success and error messages displayed after form submission
- Responsive design for better user experience

## Technologies Used

- **React**: For building the user interface
- **Redux Toolkit**: For state management
- **Axios**: For making HTTP requests
- **Tailwind CSS**: For styling the components


## Setup Instructions

npm init
npm install
npm run dev



1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/contact-form.git
   cd contact-form
## Note

I did not use a real API in this project; instead, I utilized a mock API for testing. However, 
I found that using fake APIs like JSONPlaceholder and Mocky did not yield the desired results, as submissions were made but the outputs were not displayed as expected.
Given my current experience level with APIs and backend development, I encountered challenges in this area. Therefore,
I recommend implementing a real API for actual data submission and retrieval to fully demonstrate the functionality of the contact form. 
Please understand that this task has been completed to the best of my abilities, considering the limitations faced with the testing APIs.

*#Conclusion**: I made the form responsive, hiding the image on mobile devices. After submitting the data, the submitted information is displayed below the form.
