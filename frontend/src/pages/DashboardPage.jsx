import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import DashboardHeader from '../components/DashboardHeader';
import Sidebar from '../components/Sidebar';
import Stats from '../components/Stats';
import PerformanceScoreCard from '../components/PerformanceScoreCard';
import CustomersByDevice from '../components/CustomersByDevice';
import CommunityFeedback from '../components/CommunityFeedback';
import ComparisonChart from '../components/ComparisonChart';
import ProductTable from '../components/ProductTable';

const DashboardPage = () => {
    
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/login');
        }
    }, [navigate]);

    useEffect(() => {
        const button = document.querySelector('[data-drawer-toggle="default-sidebar"]');
        const sidebar = document.getElementById('default-sidebar');
        
        if (button && sidebar) {
            const toggleSidebar = () => {
                sidebar.classList.toggle('-translate-x-full');
            };
            
            button.addEventListener('click', toggleSidebar);
            
            return () => {
                button.removeEventListener('click', toggleSidebar);
            };
        }
    }, []);

    return (
        <div className='bg-gray-50'>
            
            <button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                <span className="sr-only">Open sidebar</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                </svg>
            </button>
            <aside id="default-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
                <Sidebar dashboard={'Dashboard'}></Sidebar>
            </aside>

            <div className="p-4 sm:ml-64">
                <div className='p-6 flex flex-wrap lg:flex-nowrap 0 gap-4'>
                    
                   <div className='w-full lg:w-3/4'>
                        <div className="w-full grid grid-cols-3 gap-4 ">
                            <DashboardHeader />
                            <Stats />
                        </div>
                        <div className="mt-6 w-full  gap-4">
                            <ProductTable />
                        </div> 
                        
                        <div className="mt-6   gap-4">
                            <ComparisonChart />
                        </div> 
                        
                        
                   </div>

                    <div className="w-full lg:w-1/4 flex flex-col gap-4">
                        <div>
                            <PerformanceScoreCard score={90} />
                        </div>
                        
                        <div>
                            <CommunityFeedback />
                        </div>
                    </div>
                    
                    
                </div>
            </div>
        </div>
    );
};

export default DashboardPage;