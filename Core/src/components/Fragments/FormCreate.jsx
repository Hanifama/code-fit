import React, { useEffect, useState } from 'react';
import { Input, Button, Typography, Alert } from "@material-tailwind/react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const MemberFormCreate = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        id: '',
        name: '',
        email: '',
        job: '',
        org: '',
        date: '',
        img: '',
        online: false
    });

    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);
    const [shouldNavigate, setShouldNavigate] = useState(false);


    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            setFormData({
                ...formData,
                img: reader.result
            });
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.id || !formData.name || !formData.email || !formData.job || !formData.org || !formData.date || !formData.img) {
            setError('All fields are required.');
            return;
        }

        try {
            const response = await axios.post('http://localhost:5000/members', formData);
            console.log('Data successfully submitted:', response.data);

            if (response.data.id) {
                setSuccess(true);
                setTimeout(() => {
                    setShouldNavigate(true);
                }, 3000);
            } else {
                console.error('Invalid server response:', response.data);
                setError('Invalid server response.');
            }
        } catch (error) {
            if (error.response && error.response.data) {
                console.error('Error submitting data:', error.response.data);
            } else {
                console.error('Error submitting data:', error);
            }
        }
    };

    useEffect(() => {
        if (shouldNavigate) {
            navigate('/member');
        }
    }, [shouldNavigate, navigate]);

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 mx-auto max-w-lg mt-8">
            <Typography variant="h6" color="blue-gray" className="text-center">
                Add Member
            </Typography>
            {error && <Alert color="red">{error}</Alert>}
            {success && <Alert color="green">Data successfully submitted!</Alert>}
            <div className="grid grid-cols-2 gap-4">
                <Input label="ID" name="id" value={formData.id} onChange={handleChange} />
                <Input label="Name" name="name" value={formData.name} onChange={handleChange} required />
                <Input label="Email" name="email" value={formData.email} onChange={handleChange} type="email" required />
                <Input label="Job" name="job" value={formData.job} onChange={handleChange} required />
                <Input label="Organization" name="org" value={formData.org} onChange={handleChange} required />
                <Input label="Date" name="date" type="date" value={formData.date} onChange={handleChange} required />
                <Input label="Image URL" name="img" type="file" accept="image/*" onChange={handleImageChange} required />
            </div>
            <Button type="submit" className="mx-auto">Add</Button>
        </form>

    );
};

export default MemberFormCreate;
