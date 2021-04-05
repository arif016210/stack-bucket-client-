import React from 'react';


import Nav from '../../components/nav/Nav';
import Create from '../../components/create/Create';
import Table from '../../components/table/Table';

const Index = () => {
    return (
        <div>

            {/* Navigation Bar  */}

            <Nav />

            {/* Main Page Content  */}
            <main className="container __margin--ylg">
                {/* Add New Bucket  */}

                <Create label="Create New Bucket" />

                {/* Bucket List Table */}
                <div className="section table __shadow--sm">
                    <Table />
                </div>
            </main>

        </div>
    );
};

export default Index;