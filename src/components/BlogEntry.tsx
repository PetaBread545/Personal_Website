import React from 'react'

interface BlogEntryProp{
    title: string;
    date: Date;
    thumbnail: File | null;
};

const BlogEntry = (props: BlogEntryProp) => {
    const dateString = props.date.toLocaleDateString();

  return (
    <>
        <div>BlogEntry</div>
        <p>Title: {props.title}</p>
        <p>Date: {dateString}</p>
    </>
  )
}

export default BlogEntry