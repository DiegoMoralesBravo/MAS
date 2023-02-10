import React from 'react'
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { History } from '../components/History/History';
import { Index } from '../components/Index'
import { Footer } from './../components/Layout/Footer'
import { Navbar } from './../components/Layout/Navbar'
import { useContext } from "react";
import { context } from './../context/context'
import { Report } from '../components/Report/Report';

export const Router = () => {
  const { user } = useContext(context);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {user != '' ? (
          <>
            <Route path="/report" element={<Report />} />
            <Route path="/history" element={<History />} />
          </>
        ) :
          ''
        }
        <Route path="/" element={<Index />} />
        <Route path="/*" element={<Navigate to='/' />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
