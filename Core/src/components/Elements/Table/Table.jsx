// src/components/MembersTable.js
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
} from "@material-tailwind/react";
import { MagnifyingGlassIcon, PencilIcon, UserPlusIcon, TrashIcon } from "@heroicons/react/24/outline";
import { TABS, TABLE_HEAD } from '../../../utils/data';
import { getMembers, deleteMember } from '../../../utils/api'; // Import deleteMember from API utils

export function MembersTable() {
    const [members, setMembers] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage] = useState(5);
    const [selectedTab, setSelectedTab] = useState('all');
    
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

    // Fungsi untuk menghapus anggota
    const handleDelete = async (id) => {
        try {
            await deleteMember(id); // Panggil fungsi deleteMember dari API
            const updatedMembers = members.filter(member => member.id !== id); // Filter anggota yang tidak dihapus
            setMembers(updatedMembers); // Perbarui state dengan anggota yang diperbarui
        } catch (error) {
            console.error('Error deleting member:', error);
        }
    };

    return (
        <Card className="h-full w-full">
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
                                        <IconButton variant="text">
                                            <PencilIcon className="h-4 w-4" />
                                        </IconButton>
                                    </Tooltip>
                                    {/* Button untuk menghapus member */}
                                    <Tooltip content="Delete User">
                                        <IconButton variant="text" onClick={() => handleDelete(id)}>
                                            <TrashIcon className="h-4 w-4"/>
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
        </Card>
    );
}
