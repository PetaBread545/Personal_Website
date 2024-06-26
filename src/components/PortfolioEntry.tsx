import React from 'react'

interface PortfolioEntryProp{
    title: string;
    date: Date;
}

const PortfolioEntry = (props: PortfolioEntryProp) => {
    const dateString = props.date.toLocaleDateString();
  return (
    <>
    <div>PortfolioEntry</div>
    <p>Title: {props.title}</p>
    <p>Date: {dateString}</p>
</>
  )
}

export default PortfolioEntry