import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { useState } from 'react';

export default function Post() {
    const [posts, setPosts] = useState([
        { id: 1, title: 'Berita A', author: 'Penulis A', image: 'https://via.placeholder.com/50', content: 'Konten A', created_at: '2024-12-01' },
        { id: 2, title: 'Berita B', author: 'Penulis B', image: 'https://via.placeholder.com/50', content: 'Konten B', created_at: '2024-12-02' },
    ]);
    const [search, setSearch] = useState('');

    const handleAddPost = () => {
        const newPost = {
            id: Date.now(),
            title: 'Postingan Baru',
            author: 'Penulis Baru',
            image: 'https://via.placeholder.com/50',
            content: 'Konten baru',
            created_at: new Date().toISOString().split('T')[0],
        };
        setPosts([...posts, newPost]);
    };

    const handleEditPost = (id) => {
        const updatedPosts = posts.map(post =>
            post.id === id ? { ...post, title: 'Updated Post' } : post
        );
        setPosts(updatedPosts);
    };

    const handleDeletePost = (id) => {
        const updatedPosts = posts.filter(post => post.id !== id);
        setPosts(updatedPosts);
    };

    const filteredPosts = posts.filter(post =>
        post.title.toLowerCase().includes(search.toLowerCase()) ||
        post.content.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    POST MANAGEMENT
                </h2>
            }
        >
            <Head title="Post Management" />

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
                                    onClick={handleAddPost}
                                >
                                    Add Post
                                </button>
                            </div>

                            <table className="min-w-full border-collapse border border-gray-200">
                                <thead>
                                    <tr>
                                        <th className="border border-gray-300 px-4 py-2">No</th>
                                        <th className="border border-gray-300 px-4 py-2">Title</th>
                                        <th className="border border-gray-300 px-4 py-2">Author</th>
                                        <th className="border border-gray-300 px-4 py-2">Image</th>
                                        <th className="border border-gray-300 px-4 py-2">Content</th>
                                        <th className="border border-gray-300 px-4 py-2">Created At</th>
                                        <th className="border border-gray-300 px-4 py-2">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredPosts.map((post, index) => (
                                        <tr key={post.id}>
                                            <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
                                            <td className="border border-gray-300 px-4 py-2">{post.title}</td>
                                            <td className="border border-gray-300 px-4 py-2">{post.author}</td>
                                            <td className="border border-gray-300 px-4 py-2 text-center">
                                                <img src={post.image} alt="Post" className="w-12 h-12 mx-auto" />
                                            </td>
                                            <td className="border border-gray-300 px-4 py-2">{post.content}</td>
                                            <td className="border border-gray-300 px-4 py-2">{post.created_at}</td>
                                            <td className="border border-gray-300 px-4 py-2">
                                                <button
                                                    className="px-2 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600 mr-2"
                                                    onClick={() => handleEditPost(post.id)}
                                                >
                                                    Edit
                                                </button>
                                                <button
                                                    className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                                                    onClick={() => handleDeletePost(post.id)}
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