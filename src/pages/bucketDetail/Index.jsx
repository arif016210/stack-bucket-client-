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
                {/* Add Item  */}

                <Create extra label="Add New Item" />

                {/* Item Table  */}
                <section className="section table __shadow--sm">
                    <Table />
                </section>

                <section className="section table table--success __shadow--sm">
                    <Table />
                </section>
            </main>
        </div>
    );
};

export default Index;