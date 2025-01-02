import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { useState } from 'react';

export default function Post({ posts }) {
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
                                    placeholder="Search Posts..."
                                    // value={postSearch}
                                    // onChange={(e) => setPostSearch(e.target.value)}
                                    className="px-4 py-2 border border-gray-300 rounded mr-4"
                                />
                                <button
                                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                                // onClick={handleAddPost}
                                >
                                    Add Post
                                </button>
                            </div>

                            <table className="min-w-full border-collapse border border-gray-200 mb-8">
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
                                    {posts.map((post) => (
                                        <tr key={post.id}>
                                            <td className="border border-gray-300 px-4 py-2">{post.id}</td>
                                            <td className="border border-gray-300 px-4 py-2">{post.title}</td>
                                            <td className="border border-gray-300 px-4 py-2">{post.author.name}</td>
                                            <td className="border border-gray-300 px-4 py-2 text-center">
                                                <img src={post.image} alt="Post" className="w-12 h-12 mx-auto" />
                                            </td>
                                            <td className="border border-gray-300 px-4 py-2">{post.content}</td>
                                            <td className="border border-gray-300 px-4 py-2">{post.created_at}</td>
                                            <td className="border border-gray-300 px-4 py-2">
                                                <button
                                                    className="px-2 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600 mr-2"
                                                    onClick={() => { }}
                                                >
                                                    Edit
                                                </button>
                                                <button
                                                    className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                                                    onClick={() => { }}
                                                >
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>

                            {/* Bagian Hasil Pertandingan */}
                            {/* <div className="mb-4 flex items-center">
                                <input
                                    type="text"
                                    placeholder="Search Matches..."
                                    value={matchSearch}
                                    onChange={(e) => setMatchSearch(e.target.value)}
                                    className="px-4 py-2 border border-gray-300 rounded mr-4"
                                />
                                <button
                                    className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                                    onClick={handleAddMatch}
                                >
                                    Add Match
                                </button>
                            </div>

                            <table className="min-w-full border-collapse border border-gray-200">
                                <thead>
                                    <tr>
                                        <th className="border border-gray-300 px-4 py-2">No</th>
                                        <th className="border border-gray-300 px-4 py-2">Team 1</th>
                                        <th className="border border-gray-300 px-4 py-2">Team 2</th>
                                        <th className="border border-gray-300 px-4 py-2">Score</th>
                                        <th className="border border-gray-300 px-4 py-2">Date</th>
                                        <th className="border border-gray-300 px-4 py-2">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredMatches.map((match, index) => (
                                        <tr key={match.id}>
                                            <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
                                            <td className="border border-gray-300 px-4 py-2">{match.team1}</td>
                                            <td className="border border-gray-300 px-4 py-2">{match.team2}</td>
                                            <td className="border border-gray-300 px-4 py-2">{match.score}</td>
                                            <td className="border border-gray-300 px-4 py-2">{match.date}</td>
                                            <td className="border border-gray-300 px-4 py-2">
                                                <button
                                                    className="px-2 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600 mr-2"
                                                    onClick={() => handleEditMatch(match.id)}
                                                >
                                                    Edit
                                                </button>
                                                <button
                                                    className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                                                    onClick={() => handleDeleteMatch(match.id)}
                                                >
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table> */}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
