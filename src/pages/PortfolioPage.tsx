import React from 'react'
import PortfolioEntry from '../components/PortfolioEntry'

const PortfolioPage = () => {
  return (
    <>
        <div className='rounded-xl, shadow-lg m-2 p-2 w-fit'>
            PortfolioPage
        <PortfolioEntry title="TestTitle" date={new Date} link='/portfolio/sentiment'/>
        </div>
    </>
  )
}

export default PortfolioPage