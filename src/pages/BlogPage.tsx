import React from 'react'
import BlogEntry from '../components/BlogEntry'


const BlogPage = () => {
  return (
    <>
    
    <div className='rounded-xl, shadow-lg m-2 p-2 w-fit'>
        BlogPage
        <BlogEntry title="testTitle" date={new Date} thumbnail={null}/>
    </div>
    </>
  )
}

export default BlogPage