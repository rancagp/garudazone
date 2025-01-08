import Modal from '@/Components/Modal';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm, usePage } from '@inertiajs/react';
import { useState } from 'react';
import axios from 'axios';

export default function Match({ matches }) {
    const [openModalAdd, setOpenModalAdd] = useState(false);
    const [openModalEdit, setOpenModalEdit] = useState(false);
    const { auth } = usePage().props;
    const [dataMatch, setDataMatch] = useState([]);
    const [author, setAuthor] = useState('');

    const { data: dataAdd, setData: setDataAdd, post: postAdd, reset: resetAdd } = useForm({
        competition: '',
        home_team_name: '',
        home_team_flag: null,
        away_team_name: '',
        away_team_flag: null,
        match_date: '',
        match_time: '',
        stadium: '',
        location: '',
        status: 'scheduled'
    });

    const handleSubmitAdd = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('competition', dataAdd.competition);
        formData.append('home_team_name', dataAdd.home_team_name);
        if (dataAdd.home_team_flag) {
            formData.append('home_team_flag', dataAdd.home_team_flag);
        }
        formData.append('away_team_name', dataAdd.away_team_name);
        if (dataAdd.away_team_flag) {
            formData.append('away_team_flag', dataAdd.away_team_flag);
        }
        formData.append('match_date', dataAdd.match_date);
        formData.append('match_time', dataAdd.match_time);
        formData.append('stadium', dataAdd.stadium);
        formData.append('location', dataAdd.location);
        formData.append('status', dataAdd.status)


        try {
            const response = await axios.post(route('match.store'), formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            if (response.status === 200) {
                setOpenModalAdd(false);
                resetAdd();
                window.location.reload();
            }

        } catch (errors) {
            console.log(errors);
        }
    };

    const handleDelete = (id) => {
        if (confirm('Are you sure you want to delete this match?')) {
            axios.delete(route('match.destroy', id))
                .then(() => {
                    window.location.reload();
                });
        }
    };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    MATCH MANAGEMENT
                </h2>
            }
        >
            <Head title="Match Management" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <div className="mb-4 flex items-center">
                                <input
                                    type="text"
                                    placeholder="Search Matches..."
                                    className="px-4 py-2 border border-gray-300 rounded mr-4"
                                />
                                <button
                                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                                    onClick={() => setOpenModalAdd(true)}
                                >
                                    Add Match
                                </button>
                            </div>

                            <Modal show={openModalAdd} onClose={() => setOpenModalAdd(false)}>
                                <div className="p-6">
                                    <h2 className="text-2xl font-semibold mb-4">Create Match</h2>
                                    <form encType='multipart/form-data' onSubmit={handleSubmitAdd}>
                                        <div className="mb-4">
                                            <label htmlFor="competition" className="block text-sm font-medium text-gray-700">
                                                Competition
                                            </label>
                                            <input
                                                type="text"
                                                id="competition"
                                                name="competition"
                                                value={dataAdd.competition}
                                                onChange={(e) => setDataAdd('competition', e.target.value)}
                                                required
                                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                            />
                                        </div>
                                        <div className="mb-4">
                                            <label htmlFor="home_team_name" className="block text-sm font-medium text-gray-700">
                                                Home Team Name
                                            </label>
                                            <input
                                                type="text"
                                                id="home_team_name"
                                                name="home_team_name"
                                                value={dataAdd.home_team_name}
                                                onChange={(e) => setDataAdd('home_team_name', e.target.value)}
                                                required
                                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                            />
                                        </div>
                                        <div className="mb-4">
                                            <label htmlFor="home_team_flag" className="block text-sm font-medium text-gray-700">
                                                Home Team Flag
                                            </label>
                                            <input
                                                id="home_team_flag"
                                                name="home_team_flag"
                                                type='file'
                                                onChange={(e) => setDataAdd('home_team_flag', e.target.files[0])}
                                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                            />
                                        </div>
                                        <div className="mb-4">
                                            <label htmlFor="away_team_name" className="block text-sm font-medium text-gray-700">
                                                Away Team Name
                                            </label>
                                            <input
                                                type="text"
                                                id="away_team_name"
                                                name="away_team_name"
                                                value={dataAdd.away_team_name}
                                                onChange={(e) => setDataAdd('away_team_name', e.target.value)}
                                                required
                                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                            />
                                        </div>
                                        <div className="mb-4">
                                            <label htmlFor="away_team_flag" className="block text-sm font-medium text-gray-700">
                                                Away Team Flag
                                            </label>
                                            <input
                                                id="away_team_flag"
                                                name="away_team_flag"
                                                type='file'
                                                onChange={(e) => setDataAdd('away_team_flag', e.target.files[0])}
                                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                            />
                                        </div>
                                        <div className="mb-4">
                                            <label htmlFor="match_date" className="block text-sm font-medium text-gray-700">
                                                Match Date
                                            </label>
                                            <input
                                                type="date"
                                                id="match_date"
                                                name="match_date"
                                                value={dataAdd.match_date}
                                                onChange={(e) => setDataAdd('match_date', e.target.value)}
                                                required
                                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                            />
                                        </div>
                                        <div className="mb-4">
                                            <label htmlFor="match_time" className="block text-sm font-medium text-gray-700">
                                                Match Time
                                            </label>
                                            <input
                                                type="time"
                                                id="match_time"
                                                name="match_time"
                                                value={dataAdd.match_time}
                                                onChange={(e) => setDataAdd('match_time', e.target.value)}
                                                required
                                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                            />
                                        </div>
                                        <div className="mb-4">
                                            <label htmlFor="stadium" className="block text-sm font-medium text-gray-700">
                                                Stadium
                                            </label>
                                            <input
                                                type="text"
                                                id="stadium"
                                                name="stadium"
                                                value={dataAdd.stadium}
                                                onChange={(e) => setDataAdd('stadium', e.target.value)}
                                                required
                                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                            />
                                        </div>
                                        <div className="mb-4">
                                            <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                                                Location
                                            </label>
                                            <input
                                                type="text"
                                                id="location"
                                                name="location"
                                                value={dataAdd.location}
                                                onChange={(e) => setDataAdd('location', e.target.value)}
                                                required
                                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                            />
                                        </div>
                                        <div className="mb-4">
                                            <label htmlFor="status" className="block text-sm font-medium text-gray-700">
                                                Status
                                            </label>
                                            <select
                                                id="status"
                                                name="status"
                                                value={dataAdd.status}
                                                onChange={(e) => setDataAdd('status', e.target.value)}
                                                required
                                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                            >
                                                <option value="scheduled">Scheduled</option>
                                                <option value="live">Live</option>
                                                <option value="completed">Completed</option>
                                            </select>
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
                                        <th className="border border-gray-300 px-4 py-2">Competition</th>
                                        <th className="border border-gray-300 px-4 py-2">Home Team</th>
                                        <th className="border border-gray-300 px-4 py-2">Home Flag</th>
                                        <th className="border border-gray-300 px-4 py-2">Away Team</th>
                                        <th className="border border-gray-300 px-4 py-2">Away Flag</th>
                                        <th className="border border-gray-300 px-4 py-2">Match Date</th>
                                        <th className="border border-gray-300 px-4 py-2">Match Time</th>
                                        <th className="border border-gray-300 px-4 py-2">Stadium</th>
                                        <th className="border border-gray-300 px-4 py-2">Location</th>
                                        <th className="border border-gray-300 px-4 py-2">Status</th>
                                        <th className="border border-gray-300 px-4 py-2">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {matches.map((match) => (
                                        <tr key={match.id}>
                                            <td className="border border-gray-300 px-4 py-2">{match.id}</td>
                                            <td className="border border-gray-300 px-4 py-2">{match.competition}</td>
                                            <td className="border border-gray-300 px-4 py-2">{match.home_team_name}</td>
                                            <td className="border border-gray-300 px-4 py-2 text-center">
                                                <img src={match.home_team_flag ?  match.home_team_flag.replace('/storage', '/storage') : '/images/no-image.png'} alt="Home Flag" className="w-12 h-12 mx-auto" />
                                            </td>
                                            <td className="border border-gray-300 px-4 py-2">{match.away_team_name}</td>
                                            <td className="border border-gray-300 px-4 py-2 text-center">
                                                <img src={match.away_team_flag ? match.away_team_flag.replace('/storage', '/storage') : '/images/no-image.png'} alt="Away Flag" className="w-12 h-12 mx-auto" />
                                            </td>
                                            <td className="border border-gray-300 px-4 py-2">{match.match_date}</td>
                                            <td className="border border-gray-300 px-4 py-2">{match.match_time}</td>
                                            <td className="border border-gray-300 px-4 py-2">{match.stadium}</td>
                                            <td className="border border-gray-300 px-4 py-2">{match.location}</td>
                                            <td className="border border-gray-300 px-4 py-2">{match.status}</td>
                                            <td className="border border-gray-300 px-4 py-2">
                                                <button
                                                    className="px-2 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600 mr-2"
                                                    onClick={() => {
                                                        setOpenModalEdit(true);
                                                        setDataMatch(match);
                                                        setAuthor('');
                                                    }}
                                                >
                                                    Edit
                                                </button>
                                                <button
                                                    className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                                                    onClick={() => handleDelete(match.id)}
                                                >
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    ))}

                                    <ModalEdit open={openModalEdit} setOpen={() => setOpenModalEdit(false)} match={dataMatch} />
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

function ModalEdit({ open, setOpen, match }) {
    const { data: dataEdit, setData: setDataEdit, match: matchEdit, reset } = useForm({
        competition: match?.competition,
        home_team_name: match?.home_team_name,
        home_team_flag: null,
        away_team_name: match?.away_team_name,
        away_team_flag: null,
        match_date: match?.match_date,
        match_time: match?.match_time,
        stadium: match?.stadium,
        location: match?.location,
        status: match?.status,
    });

    const handleSubmitEdit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('competition', dataEdit.competition);
        formData.append('home_team_name', dataEdit.home_team_name);
        if (dataEdit.home_team_flag) {
            formData.append('home_team_flag', dataEdit.home_team_flag);
        }
        formData.append('away_team_name', dataEdit.away_team_name);
        if (dataEdit.away_team_flag) {
            formData.append('away_team_flag', dataEdit.away_team_flag);
        }
        formData.append('match_date', dataEdit.match_date);
        formData.append('match_time', dataEdit.match_time);
        formData.append('stadium', dataEdit.stadium);
        formData.append('location', dataEdit.location);
        formData.append('status', dataEdit.status);

        try {
            const response = await axios.post(route('match.update', match.id), formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            if (response.status === 200) {
                setOpen(false);
                reset();
                window.location.reload();
            }
        } catch (errors) {
            console.log(errors);
        }
    };

    return (
        <Modal show={open} onClose={setOpen}>
            <div className="p-6">
                <h2 className="text-2xl font-semibold mb-4">Edit Match</h2>
                <form encType='multipart/form-data' onSubmit={handleSubmitEdit}>
                    <div className="mb-4">
                        <label htmlFor="competition" className="block text-sm font-medium text-gray-700">
                            Competition
                        </label>
                        <input
                            type="text"
                            id="competition"
                            name="competition"
                            value={dataEdit.competition}
                            onChange={(e) => setDataEdit('competition', e.target.value)}
                            required
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="home_team_name" className="block text-sm font-medium text-gray-700">
                            Home Team Name
                        </label>
                        <input
                            type="text"
                            id="home_team_name"
                            name="home_team_name"
                            value={dataEdit.home_team_name}
                            onChange={(e) => setDataEdit('home_team_name', e.target.value)}
                            required
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="home_team_flag" className="block text-sm font-medium text-gray-700">
                            Home Team Flag
                        </label>
                        <input
                            id="home_team_flag"
                            name="home_team_flag"
                            type='file'
                            onChange={(e) => setDataEdit('home_team_flag', e.target.files[0])}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="away_team_name" className="block text-sm font-medium text-gray-700">
                            Away Team Name
                        </label>
                        <input
                            type="text"
                            id="away_team_name"
                            name="away_team_name"
                            value={dataEdit.away_team_name}
                            onChange={(e) => setDataEdit('away_team_name', e.target.value)}
                            required
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="away_team_flag" className="block text-sm font-medium text-gray-700">
                            Away Team Flag
                        </label>
                        <input
                            id="away_team_flag"
                            name="away_team_flag"
                            type='file'
                            onChange={(e) => setDataEdit('away_team_flag', e.target.files[0])}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="match_date" className="block text-sm font-medium text-gray-700">
                            Match Date
                        </label>
                        <input
                            type="date"
                            id="match_date"
                            name="match_date"
                            value={dataEdit.match_date}
                            onChange={(e) => setDataEdit('match_date', e.target.value)}
                            required
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="match_time" className="block text-sm font-medium text-gray-700">
                            Match Time
                        </label>
                        <input
                            type="time"
                            id="match_time"
                            name="match_time"
                            value={dataEdit.match_time}
                            onChange={(e) => setDataEdit('match_time', e.target.value)}
                            required
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="stadium" className="block text-sm font-medium text-gray-700">
                            Stadium
                        </label>
                        <input
                            type="text"
                            id="stadium"
                            name="stadium"
                            value={dataEdit.stadium}
                            onChange={(e) => setDataEdit('stadium', e.target.value)}
                            required
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                            Location
                        </label>
                        <input
                            type="text"
                            id="location"
                            name="location"
                            value={dataEdit.location}
                            onChange={(e) => setDataEdit('location', e.target.value)}
                            required
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="status" className="block text-sm font-medium text-gray-700">
                            Status
                        </label>
                        <select
                            id="status"
                            name="status"
                            value={dataEdit.status}
                            onChange={(e) => setDataEdit('status', e.target.value)}
                            required
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        >
                            <option value="scheduled">Scheduled</option>
                            <option value="live">Live</option>
                            <option value="completed">Completed</option>
                        </select>
                    </div>
                    <div className="flex justify-end">
                        <button
                            type="button"
                            className="mr-4 px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
                            onClick={() => setOpen(false)}
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
    );
}