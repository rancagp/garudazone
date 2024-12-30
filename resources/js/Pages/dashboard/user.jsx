import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { useState } from 'react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

export default function User() {
    const [users, setUsers] = useState([
        { id: 1, name: 'Rifki', email: 'Rifki@gmail.com', profile: 'https://via.placeholder.com/50' },
        { id: 2, name: 'Fikri', email: 'Fikri@example.com', profile: 'https://via.placeholder.com/50' },
    ]);
    const [search, setSearch] = useState('');

    const handleAddUser = () => {
        const newUser = { id: Date.now(), name: 'New User', email: 'agus@gmail.com', profile: 'https://via.placeholder.com/50' };
        setUsers([...users, newUser]);
    };

    const handleEditUser = (id) => {
        const updatedUsers = users.map(user =>
            user.id === id ? { ...user, name: 'Updated User' } : user
        );
        setUsers(updatedUsers);
    };

    const handleDeleteUser = (id) => {
        const updatedUsers = users.filter(user => user.id !== id);
        setUsers(updatedUsers);
    };

    const handleExportPDF = () => {
        const doc = new jsPDF();
        doc.text('User Report', 10, 10);
        doc.autoTable({
            head: [['ID', 'Name', 'Email']],
            body: users.map(user => [user.id, user.name, user.email]),
        });
        doc.save('user-report.pdf');
    };

    const filteredUsers = users.filter(user =>
        user.name.toLowerCase().includes(search.toLowerCase()) ||
        user.email.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    USER MANAGEMENT
                </h2>
            }
        >
            <Head title="User Management" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <div className="mb-4 flex items-center">
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                    className="px-4 py-2 border border-gray-300 rounded mr-4"
                                />
                                <button
                                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                                    onClick={handleAddUser}
                                >
                                    Add User
                                </button>
                                <button
                                    className="ml-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                                    onClick={handleExportPDF}
                                >
                                    Export PDF
                                </button>
                            </div>

                            <table className="min-w-full border-collapse border border-gray-200">
                                <thead>
                                    <tr>
                                        <th className="border border-gray-300 px-4 py-2">Profile</th>
                                        <th className="border border-gray-300 px-4 py-2">ID</th>
                                        <th className="border border-gray-300 px-4 py-2">Name</th>
                                        <th className="border border-gray-300 px-4 py-2">Email</th>
                                        <th className="border border-gray-300 px-4 py-2">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredUsers.map(user => (
                                        <tr key={user.id}>
                                            <td className="border border-gray-300 px-4 py-2 text-center">
                                                <img src={user.profile} alt="Profile" className="w-12 h-12 rounded-full mx-auto" />
                                            </td>
                                            <td className="border border-gray-300 px-4 py-2">{user.id}</td>
                                            <td className="border border-gray-300 px-4 py-2">{user.name}</td>
                                            <td className="border border-gray-300 px-4 py-2">{user.email}</td>
                                            <td className="border border-gray-300 px-4 py-2">
                                                <button
                                                    className="px-2 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600 mr-2"
                                                    onClick={() => handleEditUser(user.id)}
                                                >
                                                    Edit
                                                </button>
                                                <button
                                                    className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                                                    onClick={() => handleDeleteUser(user.id)}
                                                >
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
