'use client'

import React from 'react'
import { getPostsFetcher } from '../api/api'
import useSWR from 'swr'
import { Posts } from '../models/posts'
import Link from 'next/link'
import AddPosts from '../components/AddPosts/AddPosts'

export default function Posts() {
    const { data: posts, error, isLoading } = useSWR<Posts>('/posts', getPostsFetcher)

    switch(true) {
        case isLoading:
            return <>Loading. Please wait....</>;
        case error:
            return <>{error}</>
        case !!posts:
            return <>
            <AddPosts></AddPosts>
            <ul>{posts?.map(({ id, title, body }, index) => {
                return <div key={id}>
                            <li>
                                <Link href={`/posts/${id}`} key={index}>
                                    <b>{title}</b>
                                </Link>
                            </li>
                            <p>{body}</p>
                        </div>
            })}</ul>
            </>

    }
    return (
        <div>
            <br />
            <h2>Posts</h2>
        </div>
    )
}