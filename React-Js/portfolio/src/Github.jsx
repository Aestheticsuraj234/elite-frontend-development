import React, { useState } from 'react'
import Loader from './components/Loader'
import { useGithubStore } from './store'

const Github = () => {
    const { githubUser, loading, error, setGithubUser } = useGithubStore()
    const [username, setUsername] = useState('')

    return (
        <section className='h-screen px-4 py-4 flex flex-col items-center justify-start'>
            <h1 className='text-3xl font-bold text-center text-orange-700 uppercase'>
                Username Finder
            </h1>

            <form className='w-full max-w-sm mt-4'>
                <div className='flex items-center border-b border-orange-700 py-2'>
                    <input
                        type='text'
                        className='appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none'
                        placeholder='Username'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <button
                        className='flex-shrink-0 bg-orange-700 hover:bg-orange-900 border-orange-700 hover:border-orange-900 text-sm border-4 text-white py-1 px-2 rounded'
                        type='button'
                        onClick={() => setGithubUser(username)}
                    >
                        Search
                    </button>
                </div>
            </form>

            <div className="mt-10 flex flex-col items-center justify-center">
    {
        !loading && !githubUser && !error && <EmptyState />
    }

    {
        loading ? (
            <Loader />
        ) : githubUser ? (
            <div className="bg-white h-[20rem] w-[30rem] shadow-md border rounded-md px-4 py-4">
                <div className="flex flex-col items-center justify-center">
                    <img
                        src={githubUser.avatar_url}
                        alt="profile"
                        className="w-32 h-32 rounded-full"
                    />
                    <h1 className="text-2xl font-bold mt-4">{githubUser.name}</h1>
                    <div className="flex mt-4 justify-between items-center gap-6 w-full">
                        <div className="flex items-center justify-center">
                            <p className="text-lg font-bold">Followers</p>
                            <p className="text-lg ml-2">{githubUser.followers}</p>
                        </div>
                        <div className="flex items-center justify-center">
                            <p className="text-lg font-bold">Following</p>
                            <p className="text-lg ml-2">{githubUser.following}</p>
                        </div>
                        <div className="flex items-center justify-center">
                            <p className="text-lg font-bold">Repos</p>
                            <p className="text-lg ml-2">{githubUser.public_repos}</p>
                        </div>
                    </div>
                </div>
            </div>
        ) : error ? (
            <div className="text-red-500">
                <p>Error: {error}</p>
            </div>
        ) : null
    }
</div>

        </section>
    )
}

export default Github



const EmptyState = () => {

    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-3xl font-bold text-center text-orange-700">No user found</h1>
            <p className="text-lg text-center text-orange-700">Please search for a user</p>
        </div>
    )
}