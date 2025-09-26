import React from 'react';
import './Pool.css';

// Reusable Table component (title prop removed, only handles the scrollable table)
function PoolTable({ headings, data }) {
    return (
        // The container now *only* wraps the scrollable table
        <div className="pool-table-container">
            <table>
                <thead>
                    <tr>
                        {headings.map((heading, index) => (
                            <th key={index}>{heading}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {row.map((cell, cellIndex) => (
                                <td key={cellIndex}>{cell}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

function Pool() {
    const boysData = [
        ['ME', 'CSE'],
        ['PG', 'CE'],
        ['ECE', 'EE'],
        ['MME', 'PIE']
    ];

    const girlsData = [
        // Note: Data for a single pool must still be an array of arrays
        ['PG + ME'],
        ['CE + PIE'],
        ['EE + CSE'],
        ['ME + ECE']
    ];

    return (
        <div className="pool-page-content">
            <h1 className="main-pool-heading">Pool</h1>
            <div className="pool-container">

                <div className="pool-section boys-section">
                    {/* The heading is now placed *outside* the PoolTable component's scroll container */}
                    <h3>Boys</h3>
                    <PoolTable
                        headings={['Pool A', 'Pool B']}
                        data={boysData}
                    />
                </div>

                <div className="pool-section girls-section">
                    {/* The heading is now placed *outside* the PoolTable component's scroll container */}
                    <h3>Girls</h3>
                    <PoolTable
                        headings={['Pool']}
                        data={girlsData}
                    />
                </div>
            </div>
        </div>
    );
}

export default Pool;