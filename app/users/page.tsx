// convention: file name should be in lowercases
// everything here will be render at "/users" page

import React from 'react'
import UserTable from './UserTable';
import Link from 'next/link';

interface Props {
  searchParams: {sortOrder: string}; // query string in the browser address 
}

const UsersPage = async({searchParams: {sortOrder}}: Props) => {

  return (
    <>
      <h1>Users</h1>
      <Link href="/users/new" className='btn'> NEW USER </Link>
      <UserTable sortOrder={sortOrder}/>
    </>
  )
}

export default UsersPage

