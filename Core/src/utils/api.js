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
        throw error; // Melempar error agar bisa ditangani di tempat lain
    }
};

export const createMember = async (memberData) => {
    try {
        const response = await api.post('/members', memberData);
        return response.data;
    } catch (error) {
        console.error("Error creating member:", error);
        throw error; // Melempar error agar bisa ditangani di tempat lain
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

