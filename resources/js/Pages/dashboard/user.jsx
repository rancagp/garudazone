import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { useState } from 'react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function User({ users: initialUsers }) {
    const [users, setUsers] = useState(initialUsers); // Gunakan props untuk inisialisasi
    const [search, setSearch] = useState('');

     const handleDeleteUser = (id) => {
          if (confirm("Yakin akan menghapus user ini?")) {
              axios.delete(route('user.delete', id))
                 .then(response => {
                      toast.success("User Berhasil Dihapus", {
                         position: toast.POSITION.TOP_RIGHT,
                     });
                     window.location.reload();
                 })
                 .catch(error => {
                     toast.error("Gagal Menghapus User", {
                        position: toast.POSITION.TOP_RIGHT,
                      });
                 })
         }
    }
      const handleExportPDF = () => {
          const doc = new jsPDF();
        doc.text('User Report', 10, 10);
         doc.autoTable({
              head: [['ID', 'Name', 'Email', 'Role']],
             body: users.map(user => [user.id, user.name, user.email, user.role]),
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
                    USERS MANAGEMENT
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
                                        <th className="border border-gray-300 px-4 py-2">Role</th>
                                        <th className="border border-gray-300 px-4 py-2">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredUsers.map(user => (
                                        <tr key={user.id}>
                                            <td className="border border-gray-300 px-4 py-2 text-center">
                                                <img src={user.avatar ? user.avatar : "https://via.placeholder.com/50"} alt="Profile" className="w-12 h-12 rounded-full mx-auto" />
                                            </td>
                                            <td className="border border-gray-300 px-4 py-2">{user.id}</td>
                                            <td className="border border-gray-300 px-4 py-2">{user.name}</td>
                                            <td className="border border-gray-300 px-4 py-2">{user.email}</td>
                                            <td className="border border-gray-300 px-4 py-2">{user.role}</td>
                                            <td className="border border-gray-300 px-4 py-2">
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