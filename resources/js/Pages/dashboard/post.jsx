import Modal from '@/Components/Modal';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm, usePage } from '@inertiajs/react';
import { useState } from 'react';

export default function Post({ posts }) {
    const [openModalAdd, setOpenModalAdd] = useState(false);
    const [openModalEdit, setOpenModalEdit] = useState(false);
    const { auth } = usePage().props
    const [dataPost, setDataPost] = useState([])
    const [author, setAuthor] = useState('')

    const { data: dataAdd, setData: setDataAdd, post: postAdd } = useForm({
        author: '',
        title: '',
        content: '',
        image: ''
    })


    const handleSubmitAdd = (e) => {
        e.preventDefault()

        console.log(e)
    }

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
                                    className="px-4 py-2 border border-gray-300 rounded mr-4"
                                />
                                <button
                                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                                    onClick={() => setOpenModalAdd(true)}
                                >
                                    Add Post
                                </button>
                            </div>

                            <Modal show={openModalAdd} onClose={() => setOpenModalAdd(false)}>
                                <div className="p-6">
                                    <h2 className="text-2xl font-semibold mb-4">Create Post</h2>
                                    <form encType='multipart/form-data' onSubmit={handleSubmitAdd}>
                                        <div className="mb-4">
                                            <label htmlFor="author" className="block text-sm font-medium text-gray-700">
                                                Author
                                            </label>
                                            <input
                                                type="text"
                                                id="author"
                                                name="author"
                                                value={auth.user.name}
                                                onChange={(e) => setDataAdd('author', e.target.value)}
                                                required
                                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                            />
                                        </div>
                                        <div className="mb-4">
                                            <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                                                Title
                                            </label>
                                            <input
                                                type="text"
                                                id="title"
                                                name="title"
                                                value={dataAdd.title}
                                                onChange={(e) => setDataAdd('title', e.target.value)}
                                                required
                                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                            />
                                        </div>
                                        <div className="mb-4">
                                            <label htmlFor="content" className="block text-sm font-medium text-gray-700">
                                                Content
                                            </label>
                                            <textarea
                                                id="content"
                                                name="content"
                                                rows="4"
                                                required
                                                onChange={(e) => setDataAdd('content', e.target.value)}
                                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                            >{dataAdd.content}</textarea>
                                        </div>
                                        <div className="mb-4">
                                            <label htmlFor="image" className="block text-sm font-medium text-gray-700">
                                                Image
                                            </label>
                                            <input
                                                id="image"
                                                name="image"
                                                type='file'
                                                value={dataAdd.image}
                                                onChange={(e) => setDataAdd('image', e.target.value)}
                                                required
                                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                            />
                                        </div>
                                        <div className="flex justify-end">
                                            <button
                                                type="button"
                                                className="mr-4 px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
                                                onClick={() => setOpenModalAdd(false)}
                                            >
                                                Close
                                            </button>
                                            <button
                                                type="submit"
                                                className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
                                            >
                                                Submit
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </Modal>

                            <table className="min-w-full border-collapse border border-gray-200 mb-8">
                                <thead>
                                    <tr>
                                        <th className="border border-gray-300 px-4 py-2">No</th>
                                        <th className="border border-gray-300 px-4 py-2">Title</th>
                                        <th className="border border-gray-300 px-4 py-2">Author</th>
                                        <th className="border border-gray-300 px-4 py-2">Image</th>
                                        <th className="border border-gray-300 px-4 py-2">Content</th>
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
                                            <td className="border border-gray-300 px-4 py-2">
                                                <button
                                                    className="px-2 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600 mr-2"
                                                    onClick={() => {
                                                        setOpenModalEdit(true)
                                                        setDataPost(post)
                                                        setAuthor(post.author.name)
                                                    }}
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

                                    <ModalEdit open={openModalEdit} setOpen={() => setOpenModalEdit(false)} post={dataPost} authorName={author} />
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

function ModalEdit({ open, setOpen, post, authorName }) {
    const { data: dataEdit, setData: setDataEdit, post: postEdit } = useForm({
        author: '',
        title: '',
        content: '',
        // image: ''
    })

    const handleSubmitEdit = (e) => {
        e.preventDefault()

        postEdit(route("post.update", post.id), {
            author: post.author,
            content: dataEdit.content,
            title: dataEdit.title,
            // image: dataEdit.image,
            onSuccess: setOpen(false)
        })
    }

    return (
        <Modal show={open} onClose={setOpen}>
            <div className="p-6">
                <h2 className="text-2xl font-semibold mb-4">Create Post</h2>
                <form encType='multipart/form-data' onSubmit={handleSubmitEdit}>
                    <div className="mb-4">
                        <label htmlFor="author" className="block text-sm font-medium text-gray-700">
                            Author
                        </label>
                        <input
                            type="text"
                            id="author"
                            name="author"
                            value={authorName}
                            onChange={(e) => setDataEdit('author', e.target.value)}
                            disable
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                            Title
                        </label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            value={post.title}
                            onChange={(e) => setDataEdit('title', e.target.value)}
                            required
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="content" className="block text-sm font-medium text-gray-700">
                            Content
                        </label>
                        <textarea
                            id="content"
                            name="content"
                            rows="4"
                            required
                            onChange={(e) => setDataEdit('content', e.target.value)}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        >{post.content}</textarea>
                    </div>
                    {/* <div className="mb-4">
                        <label htmlFor="image" className="block text-sm font-medium text-gray-700">
                            Image
                        </label>
                        <input
                            id="image"
                            name="image"
                            type='file'
                            // value={postEdits.image}
                            onChange={(e) => setDataEdit('image', e.target.files[0])}
                            required
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                    </div> */}
                    <div className="flex justify-end">
                        <button
                            type="button"
                            className="mr-4 px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
                            onClick={() => setOpenModalEdit(false)}
                        >
                            Close
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </Modal>
    )
}