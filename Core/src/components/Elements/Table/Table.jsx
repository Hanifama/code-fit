import React, { useEffect, useState } from 'react';
import {
    Card,
    CardHeader,
    Input,
    Typography,
    Button,
    CardBody,
    Chip,
    CardFooter,
    Tabs,
    TabsHeader,
    Tab,
    Avatar,
    IconButton,
    Tooltip,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    Alert
} from "@material-tailwind/react";
import { MagnifyingGlassIcon, PencilIcon, UserPlusIcon, TrashIcon } from "@heroicons/react/24/outline";
import { useNavigate } from 'react-router-dom';
import { TABS, TABLE_HEAD } from '../../../utils/data';
import { getMembers, deleteMember, updateMember, uploadImage } from '../../../utils/api';

export function MembersTable() {
    const navigate = useNavigate();
    const [members, setMembers] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage] = useState(5);
    const [selectedTab, setSelectedTab] = useState('all');
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [memberToDelete, setMemberToDelete] = useState(null);
    const [memberToEdit, setMemberToEdit] = useState(null);
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [selectedFile, setSelectedFile] = useState(null);

    useEffect(() => {
        fetchMembers();
    }, []);

    const fetchMembers = async () => {
        try {
            const membersData = await getMembers();
            setMembers(membersData);
        } catch (error) {
            console.error("Error fetching members:", error);
        }
    };

    const handleTabChange = (value) => {
        setSelectedTab(value);
        setCurrentPage(1);
    };

    const filterRows = () => {
        return members.filter((member) => {
            const fullName = `${member.name} ${member.email}`.toLowerCase();
            return fullName.includes(searchTerm.toLowerCase()) && (selectedTab === 'all' || member.job === selectedTab);
        });
    };

    const indexOfLastRow = currentPage * rowsPerPage;
    const indexOfFirstRow = indexOfLastRow - rowsPerPage;

    const currentRows = filterRows().slice(indexOfFirstRow, indexOfLastRow);

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
        setCurrentPage(1);
    };

    const handlePreviousPage = () => {
        setCurrentPage(currentPage - 1);
    };

    const handleNextPage = () => {
        setCurrentPage(currentPage + 1);
    };

    const handleDelete = async () => {
        try {
            await deleteMember(memberToDelete);
            const updatedMembers = members.filter(member => member.id !== memberToDelete);
            setMembers(updatedMembers);
            setShowDeleteModal(false);
            setMemberToDelete(null);
            setSuccessMessage('Member deleted successfully!');
            setErrorMessage('');
            setTimeout(() => {
                setSuccessMessage('');
            }, 2000);
        } catch (error) {
            console.error('Error deleting member:', error);
            setErrorMessage('Failed to delete member.');
            setSuccessMessage('');
        }
    };

    const handleClickAdd = () => {
        navigate('/create');
    };

    const handleEdit = (member) => {
        setMemberToEdit(member);
        setShowEditModal(true);
    };

    const handleEditSubmit = async () => {
        try {
            let updatedMember = { ...memberToEdit };
            if (selectedFile) {
                const formData = new FormData();
                formData.append('file', selectedFile);
                const imageData = await uploadImage(formData);
                updatedMember.img = imageData.url;
            }
            await updateMember(updatedMember.id, updatedMember);
            fetchMembers();
            setShowEditModal(false);
            setMemberToEdit(null);
            setSelectedFile(null);
            setSuccessMessage('Member updated successfully!');
            setErrorMessage('');
            setTimeout(() => {
                setSuccessMessage('');
            }, 2000);
        } catch (error) {
            console.error('Error updating member:', error);
            setErrorMessage('Failed to update member.');
            setSuccessMessage('');
        }
    };


    const handleEditChange = (e) => {
        const { name, value } = e.target;
        setMemberToEdit({ ...memberToEdit, [name]: value });
    };

    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0]);
    };

    return (
        <Card className="h-full w-full">
            {successMessage && <Alert color="green">{successMessage}</Alert>}
            {errorMessage && <Alert color="red">{errorMessage}</Alert>}
            <CardHeader floated={false} shadow={false} className="rounded-none">
                <div className="mb-8 flex items-center justify-between gap-8">
                    <div>
                        <Typography variant="h5" color="blue-gray">
                            Members list
                        </Typography>
                        <Typography color="gray" className="mt-1 font-normal">
                            See information about all members
                        </Typography>
                    </div>
                    <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
                        <Button
                            className="flex items-center gap-3"
                            size="sm"
                            onClick={handleClickAdd}
                        >
                            <UserPlusIcon strokeWidth={2} className="h-4 w-4" /> Add member
                        </Button>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                    <Tabs value={selectedTab} className="w-full md:w-max">
                        <TabsHeader>
                            {TABS.map(({ label, value }) => (
                                <Tab key={value} value={value} onClick={() => handleTabChange(value)}>
                                    &nbsp;&nbsp;{label}&nbsp;&nbsp;
                                </Tab>
                            ))}
                        </TabsHeader>
                    </Tabs>
                    <div className="w-full md:w-72">
                        <Input
                            label="Search"
                            icon={<MagnifyingGlassIcon className="h-5 w-5" />}
                            onChange={handleSearch}
                            value={searchTerm}
                        />
                    </div>
                </div>
            </CardHeader>
            <CardBody className="overflow-scroll px-0">
                <table className="mt-4 w-full min-w-max table-auto text-left">
                    <thead>
                        <tr>
                            {TABLE_HEAD.map((head) => (
                                <th
                                    key={head}
                                    className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                                >
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="font-normal leading-none opacity-70"
                                    >
                                        {head}
                                    </Typography>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {currentRows.map(({ id, img, name, email, job, org, online, date }) => (
                            <tr key={id}>
                                <td className="p-4 border-b border-blue-gray-50">
                                    <div className="flex items-center gap-3">
                                        <Avatar src={img} alt={name} size="sm" />
                                        <div className="flex flex-col">
                                            <Typography variant="small" color="blue-gray" className="font-normal">
                                                {name}
                                            </Typography>
                                            <Typography variant="small" color="blue-gray" className="font-normal opacity-70">
                                                {email}
                                            </Typography>
                                        </div>
                                    </div>
                                </td>
                                <td className="p-4 border-b border-blue-gray-50">
                                    <div className="flex flex-col">
                                        <Typography variant="small" color="blue-gray" className="font-normal">
                                            {job}
                                        </Typography>
                                        <Typography variant="small" color="blue-gray" className="font-normal opacity-70">
                                            {org}
                                        </Typography>
                                    </div>
                                </td>
                                <td className="p-4 border-b border-blue-gray-50">
                                    <div className="w-max">
                                        <Chip
                                            variant="ghost"
                                            size="sm"
                                            value={online ? "online" : "offline"}
                                            color={online ? "green" : "blue-gray"}
                                        />
                                    </div>
                                </td>
                                <td className="p-4 border-b border-blue-gray-50">
                                    <Typography variant="small" color="blue-gray" className="font-normal">
                                        {date}
                                    </Typography>
                                </td>
                                <td className="p-4 border-b border-blue-gray-50">
                                    <Tooltip content="Edit User">
                                        <IconButton variant="text" onClick={() => handleEdit({ id, img, name, email, job, org, online, date })}>
                                            <PencilIcon className="h-4 w-4" />
                                        </IconButton>
                                    </Tooltip>
                                    <Tooltip content="Delete User">
                                        <IconButton variant="text" onClick={() => { setShowDeleteModal(true); setMemberToDelete(id); }}>
                                            <TrashIcon className="h-4 w-4" />
                                        </IconButton>
                                    </Tooltip>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </CardBody>
            <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
                <Typography variant="small" color="blue-gray" className="font-normal">
                    Page {currentPage} of {Math.ceil(filterRows().length / rowsPerPage)}
                </Typography>
                <div className="flex gap-2">
                    <Button
                        variant="outlined"
                        size="sm"
                        onClick={handlePreviousPage}
                        disabled={currentPage === 1}
                    >
                        Previous
                    </Button>
                    <Button
                        variant="outlined"
                        size="sm"
                        onClick={handleNextPage}
                        disabled={indexOfLastRow >= filterRows().length}
                    >
                        Next
                    </Button>
                </div>
            </CardFooter>
            <Dialog open={showDeleteModal} handler={() => setShowDeleteModal(false)}>
                <DialogHeader>Confirm Deletion</DialogHeader>
                <DialogBody>
                    Are you sure you want to delete this member?
                </DialogBody>
                <DialogFooter>
                    <Button variant="text" color="red" onClick={() => setShowDeleteModal(false)}>
                        Cancel
                    </Button>
                    <Button variant="gradient" color="green" onClick={handleDelete}>
                        Confirm
                    </Button>
                </DialogFooter>
            </Dialog>

            <Dialog open={showEditModal} handler={() => setShowEditModal(false)}>
                <DialogHeader>Edit Member</DialogHeader>
                <DialogBody>
                    <div className="mb-4">
                        <Input
                            label="Name"
                            name="name"
                            value={memberToEdit?.name || ''}
                            onChange={handleEditChange}
                        />
                    </div>
                    <div className="mb-4">
                        <Input
                            label="Email"
                            name="email"
                            value={memberToEdit?.email || ''}
                            onChange={handleEditChange}
                        />
                    </div>
                    <div className="mb-4">
                        <Input
                            label="Job"
                            name="job"
                            value={memberToEdit?.job || ''}
                            onChange={handleEditChange}
                        />
                    </div>
                    <div className="mb-4">
                        <Input
                            label="Organization"
                            name="org"
                            value={memberToEdit?.org || ''}
                            onChange={handleEditChange}
                        />
                    </div>
                    <div className="mt-4 mb-4">
                        <Typography variant="small" color="blue-gray" className="mb-2">Online Status</Typography>
                        <div className="flex gap-2">
                            <label className="inline-flex items-center">
                                <input
                                    type="radio"
                                    name="online"
                                    value={true}
                                    checked={memberToEdit?.online === true}
                                    onChange={() => setMemberToEdit({ ...memberToEdit, online: true })}
                                />
                                <span className="ml-2">Online</span>
                            </label>
                            <label className="inline-flex items-center">
                                <input
                                    type="radio"
                                    name="online"
                                    value={false}
                                    checked={memberToEdit?.online === false}
                                    onChange={() => setMemberToEdit({ ...memberToEdit, online: false })}
                                />
                                <span className="ml-2">Offline</span>
                            </label>
                        </div>
                    </div>
                    <div className="mt-4">
                        <Typography variant="small" color="blue-gray" className="mb-2">Profile Image</Typography>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleFileChange}
                        />
                    </div>
                </DialogBody>
                <DialogFooter>
                    <Button variant="text" color="red" onClick={() => setShowEditModal(false)}>
                        Cancel
                    </Button>
                    <Button variant="gradient" color="green" onClick={handleEditSubmit}>
                        Save
                    </Button>
                </DialogFooter>
            </Dialog>

        </Card>
    );
}

