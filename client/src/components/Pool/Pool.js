import React from 'react';
import './Pool.css';

// Reusable Table component (same as before)
function PoolTable({ title, headings, data }) {
    return (
        <div className="pool-table-container">
            <h3>{title}</h3>
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
                    <PoolTable
                        title="Boys"
                        headings={['Pool A', 'Pool B']}
                        data={boysData}
                    />
                </div>
                <div className="pool-section girls-section">
                    <PoolTable
                        title="Girls"
                        headings={['Pool']}
                        data={girlsData}
                    />
                </div>
            </div>
        </div>
    );
}

export default Pool;