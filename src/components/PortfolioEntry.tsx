import React from 'react'
import { NavLink } from 'react-router-dom';

interface PortfolioEntryProp{
    title: string;
    date: Date;
    link: string;
}

const PortfolioEntry = (props: PortfolioEntryProp) => {
    const dateString = props.date.toLocaleDateString();
  return (
    <>
    <div>PortfolioEntry</div>
    <p>Title: {props.title}</p>
    <p>Date: {dateString}</p>
    <NavLink to={props.link}>Link</NavLink>
</>
  )
}

export default PortfolioEntry