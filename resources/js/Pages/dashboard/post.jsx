import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import Button from '@/Components/Button';
import { createContext } from 'react';

export default function Post({ posts }) {

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Berita
                </h2>
            }
        >
            <Head title="post" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <h3 className="mb-4 text-lg font-bold">Daftar Postingan Berita</h3>
                            <table className="min-w-full divide-y divide-gray-200 border">
                                <thead className="bg-gray-100">
                                    <tr>
                                        <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">No</th>
                                        <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Judul</th>
                                        <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Penulis</th>
                                        <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Gambar</th>
                                        <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Konten</th>
                                        <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Aksi</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    {posts.map((post, index) => (
                                        <tr key={post.id}>
                                            <td className="px-4 py-2 text-sm text-gray-800">{post.id}</td>
                                            <td className="px-4 py-2 text-sm text-gray-800">{post.title}</td>
                                            <td className="px-4 py-2 text-sm text-gray-800">Penulis</td>
                                            <td className="px-4 py-2 text-sm text-gray-800">
                                                <img src={post.image} alt={post.image} />
                                            </td>
                                            <td className="px-4 py-2 text-sm text-gray-800">{post.content}</td>
                                            <td className="px-4 py-2 text-sm text-gray-800">{post.created_at}</td>
                                            <td className="px-4 py-2 text-sm space-x-2">
                                                <Button>Edit</Button>
                                                <Button variant='danger'>Delete</Button>
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
