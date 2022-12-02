import React, { useEffect, useState } from 'react'
import AdminTable from '../../components/Table';
import { useGenreIndex } from './useGenreIndex';

const HomePage = () => {
    const genres = useGenreIndex()
    
    
    return (
      <AdminTable request={'user'}/>
);
}
export default HomePage
