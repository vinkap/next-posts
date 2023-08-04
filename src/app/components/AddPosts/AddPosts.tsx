'use client'
import { createNewPost } from '@/app/api/api'
import { Post } from '@/app/models/posts'
import React, { FormEvent, useState } from 'react'
import { useSWRConfig } from 'swr'
import { useParams } from "next/navigation"

export default function AddPosts() {
    const [newPost, setNewPost] = useState<Omit<Post, "id">>({
                                                                title: '', 
                                                                body: ''
                                                            });
    const { mutate } = useSWRConfig();

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        
        await createNewPost(newPost);
        //tells swr to re-fetch. this is revalidation
        mutate('/posts');
    }
    return (
        <>
            <h2>Make a new Post</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor='title'>Title:</label>
                <input
                    type="text"
                    name="title"
                    onChange={(e) => setNewPost((prev) => ({ ...prev, title: e.target.value }))} />
                <br />
                <label htmlFor='body'>Body:</label>
                <input
                    type="text"
                    name="body"
                    onChange={(e) => setNewPost((prev) => ({ ...prev, body: e.target.value }))} />
                <button type="submit">Submit</button>
            </form>
        </>
    )
}
