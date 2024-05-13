import React, { useState } from 'react';
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
import { MagnifyingGlassIcon, PencilIcon, UserPlusIcon } from "@heroicons/react/24/outline";
import { TABS, TABLE_HEAD, TABLE_ROWS } from '../../../utils/data';

export function MembersTable() {
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage] = useState(5);
    const [selectedTab, setSelectedTab] = useState('all'); // State untuk menyimpan tab yang dipilih

    // Fungsi untuk menangani perubahan tab
    const handleTabChange = (value) => {
        setSelectedTab(value); // Update selectedTab dengan nilai tab yang dipilih
        console.log("Selected Tab:", value); // Cetak nilai tab yang dipilih ke konsol
    };

    // Fungsi untuk menyaring baris data berdasarkan tab yang dipilih dan kriteria pencarian
    const filterRows = () => {
        return TABLE_ROWS.filter((row) => {
            const fullName = `${row.name} ${row.email}`.toLowerCase();            
            return fullName.includes(searchTerm.toLowerCase()) && (selectedTab === 'all' || row.job === selectedTab);
        });
    };

    const indexOfLastRow = currentPage * rowsPerPage;
    const indexOfFirstRow = indexOfLastRow - rowsPerPage;
    
    // Membuat daftar baris yang akan ditampilkan pada halaman saat ini
    const currentRows = filterRows().slice(indexOfFirstRow, indexOfLastRow);

    // Fungsi untuk menangani perubahan pencarian
    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
        setCurrentPage(1); // Kembali ke halaman pertama setelah pencarian diubah
    };

    // Fungsi untuk berpindah ke halaman sebelumnya
    const handlePreviousPage = () => {
        setCurrentPage(currentPage - 1);
    };
    
    // Fungsi untuk berpindah ke halaman berikutnya
    const handleNextPage = () => {
        setCurrentPage(currentPage + 1);
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
                        {/* Render baris data yang sudah difilter */}
                        {currentRows.map(({ img, name, email, job, org, online, date }) => (
                            <tr key={name}>
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
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </CardBody>
            <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
                <Typography variant="small" color="blue-gray" className="font-normal">
                    Page {currentPage} of {Math.ceil(filterRows().length / rowsPerPage)} {/* Menghitung jumlah halaman berdasarkan jumlah baris setelah difilter */}
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