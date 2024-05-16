// src/utils/api.js
import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000'
});

export const getMembers = async () => {
    try {
        const response = await api.get('/members');
        return response.data;
    } catch (error) {
        console.error("Error fetching members:", error);
        throw error;
    }
};

export const createMember = async (memberData) => {
    try {
        const response = await api.post('/members', memberData);
        return response.data;
    } catch (error) {
        console.error("Error creating member:", error);
        throw error;
    }
};

export const deleteMember = async (memberId) => {
    try {
        const response = await api.delete(`/members/${memberId}`);
        return response.data;
    } catch (error) {
        console.error("Error deleting member:", error);
        throw error;
    }
};

export const updateMember = async (memberId, memberData) => {
    try {
        const response = await api.put(`/members/${memberId}`, memberData);
        return response.data;
    } catch (error) {
        console.error("Error updating member:", error);
        throw error;
    }
};

export const uploadImage = async (formData) => {
    try {
        const response = await axios.post('http://localhost:5000/upload', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error uploading image:', error);
        throw error;
    }
};

