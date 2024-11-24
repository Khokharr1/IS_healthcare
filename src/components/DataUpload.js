// import React, { useState } from 'react';
// import axios from 'axios';
// import '../styles/DataUpload.css';
// const DataUpload = () => {
//     const [file, setFile] = useState(null);

//     const handleFileChange = (e) => {
//         setFile(e.target.files[0])
//     }

//     const handleUpload = async () => {
//         const formData = new FormData()
//         formData.append('file', file)

//         try {
//             const response = await axios.post('/api/upload', formData)
//             alert('File uploaded and encrypted successfully')
//         } catch (error) {
//             console.error('File upload failed', error)
//         }
//     }

//     return (
//         <div className="upload-form">
//             <h2>Upload Healthcare Data</h2>
//             <input type="file" onChange={handleFileChange} />
//             <button onClick={handleUpload}>Upload & Encrypt</button>
//         </div>
//     );
// }
// export default DataUpload

import React, { useState } from 'react';
import '../styles/DataUpload.css';

const DataUpload = () => {
    // Define states for each input field
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [treatment, setTreatment] = useState('');
    const [additionalInfo, setAdditionalInfo] = useState('');

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Log data or send it to the server
        const patientData = { name, age, gender, treatment, additionalInfo };
        console.log('Patient Data Submitted:', patientData);
        alert('Patient details submitted successfully!');
    };

    return (
        <div className="data-upload">
            <div className="upload-card">
                <h2>Enter Patient Details</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Name</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter patient name"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Age</label>
                        <input
                            type="number"
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                            placeholder="Enter patient age"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Gender</label>
                        <select value={gender} onChange={(e) => setGender(e.target.value)} required>
                            <option value="">Select gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Medical Treatment</label>
                        <input
                            type="text"
                            value={treatment}
                            onChange={(e) => setTreatment(e.target.value)}
                            placeholder="Enter medical treatment details"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Additional Information</label>
                        <textarea
                            value={additionalInfo}
                            onChange={(e) => setAdditionalInfo(e.target.value)}
                            placeholder="Enter any additional information"
                        />
                    </div>
                    <button type="submit" className="submit-btn">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default DataUpload;
