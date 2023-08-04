'use client'
import { getPostsFetcher } from "@/app/api/api";

import { Post } from "@/app/models/posts";
import Link from "next/link";
import useSWR from "swr";

type Props = {
    params: { id: string }
}

export default function Page({ params }: Props) {
    const { data: post } = useSWR<Post>(`/posts/${params.id}`, getPostsFetcher)
    return (
        <div>
            <h1>{post?.title}</h1>
            {post?.body}
        </div>
    )
}
