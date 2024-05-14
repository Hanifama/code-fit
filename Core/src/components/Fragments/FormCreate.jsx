// src/components/MemberForm.js
import React, { useState, useEffect } from 'react';
import { Input, Button, Typography, Alert } from "@material-tailwind/react";
import axios from 'axios'; // Import axios

const MemberFormCreate = ({ onSubmit, memberToEdit, clearEdit }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        job: '',
        org: '',
        online: false,
        date: '',
        img: '' // Tambah properti img di dalam state
    });

    const [error, setError] = useState('');

    useEffect(() => {
        if (memberToEdit) {
            setFormData(memberToEdit);
        }
    }, [memberToEdit]);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    // Fungsi handleChange untuk input gambar
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            setFormData({
                ...formData,
                img: reader.result // Simpan URL gambar ke dalam state
            });
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.job || !formData.org || !formData.date || !formData.img) {
            setError('All fields are required.');
            return;
        }

        try {
            // Kirim data ke fake API menggunakan axios
            const response = await axios.post('http://localhost:5000/members', formData);
            console.log('Data successfully submitted:', response.data);
            onSubmit(formData);
            setFormData({
                name: '',
                email: '',
                job: '',
                org: '',
                online: false,
                date: '',
                img: '' // Reset nilai img setelah submit
            });
            setError('');
        } catch (error) {
            console.error('Error submitting data:', error);
            setError('An error occurred while submitting data. Please try again later.');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <Typography variant="h6" color="blue-gray">
                {memberToEdit ? 'Edit Member' : 'Add Member'}
            </Typography>
            {error && <Alert color="error">{error}</Alert>}
            <Input label="Name" name="name" value={formData.name} onChange={handleChange} required />
            <Input label="Email" name="email" value={formData.email} onChange={handleChange} type="email" required />
            <Input label="Job" name="job" value={formData.job} onChange={handleChange} required />
            <Input label="Organization" name="org" value={formData.org} onChange={handleChange} required />
            <label className="flex items-center gap-2">
                <input type="checkbox" name="online" checked={formData.online} onChange={handleChange} />
                Online
            </label>
            <Input label="Date" name="date" type="date" value={formData.date} onChange={handleChange} required />
            <Input label="Image URL" name="img" type="file" accept="image/*" onChange={handleImageChange} required />
            <Button type="submit">{memberToEdit ? 'Update' : 'Add'}</Button>
            {memberToEdit && <Button type="button" onClick={clearEdit}>Cancel</Button>}
        </form>
    );
};

export default MemberFormCreate;
