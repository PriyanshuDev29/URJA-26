import React from 'react';
import './Team.css';

// Updated team data with one entry per person
const supercoreTeamData = [
    {
        post: 'Sports Secretary',
        name: 'Harshit Raj',
        regNo: '2022UGPI032',
        image: 'harshit_raj.jpg'
    },
    {
        post: 'Joint Sports Secretary',
        name: 'Mrinal Ayush Raj',
        regNo: '2022UGMM052',
        image: 'mrinal.jpg'
    },
    {
        post: 'Joint Sports Secretary',
        name: 'Sunita Diggi',
        regNo: '2022UGCE052',
        image: 'sunita.jpg'
    },
    {
        post: 'Sports Team Coordinator',
        name: 'Abhishek Bhoutkar',
        regNo: '2022UGPI037',
        image: 'abhishek_bhoutkar.jpg'
    },
    {
        post: 'General Secretary',
        name: 'Niraj Raj',
        regNo: '2022UGCE071',
        image: 'niraj_raj.jpg'
    },
    {
        post: 'General Secretary',
        name: 'Jyoti Kumari',
        regNo: '2022UGPI001',
        image: 'jyoti.jpg'
    },
    {
        post: 'Joint Secretary',
        name: 'Sahil Raj',
        regNo: '2022UGCE062',
        image: 'sahil_raj.jpg'
    },
    {
        post: 'Joint Secretary',
        name: 'Anand Yadav',
        regNo: '2022UGME010',
        image: 'anand.jpg'
    },
    {
        post: 'Event Head',
        name: 'Ritik Kumar',
        regNo: '2022UGCS021',
        image: 'ritik.jpg'
    },
    {
        post: 'Event Head',
        name: 'Aditya Kumar',
        regNo: '2022UGME098',
        image: 'aditya.jpg'
    },
    {
        post: 'Executive Head',
        name: 'Risabh Kumar',
        regNo: '2022UGPI084',
        image: 'risabh.jpg'
    },
    {
        post: 'Executive Head',
        name: 'Gaurav Dubey',
        regNo: '2022UGPI046',
        image: 'gaurav_dubey.jpg'
    },
    {
        post: 'Logistics Head',
        name: 'Priyanshu Raj',
        regNo: '2022UGCE081',
        image: 'priyanshu_raj.jpg'
    },
    {
        post: 'Logistics Head',
        name: 'Prabhat Gour',
        regNo: '2022UGPI029',
        image: 'prabhat_gour.jpg'
    },
    {
        post: 'Planning & Development Head',
        name: 'Abhishek Kumar Gupta',
        regNo: '2022UGCE004',
        image: 'abhishek.jpg'
    },
    {
        post: 'Planning & Development Head',
        name: 'Adarsh Tiwari',
        regNo: '2022UGCS089',
        image: 'adarsh.jpg'
    },
    {
        post: 'Public Relations Head',
        name: 'Aryan Patole',
        regNo: '2022UGCS011',
        image: 'patole.jpg'
    },
    {
        post: 'Public Relations Head',
        name: 'Sagar Gupta',
        regNo: '2022UGCE007',
        image: 'sagar.jpg'
    },
    {
        post: 'Creative Head',
        name: 'Chandan Chatterjee',
        regNo: '2022UGPI039',
        image: 'chandan.jpg'
    },
    {
        post: 'Creative Head',
        name: 'Neeraj Jha',
        regNo: '2022UGPI044',
        image: 'neeraj_jha.jpg'
    },
    {
        post: 'Medical Head',
        name: 'Karan Raj',
        regNo: '2022UGCM012',
        image: 'karan.jpg'
    },
    {
        post: 'Medical Head',
        name: 'Kriti Pandey',
        regNo: '2022UGMM050',
        image: 'kriti.jpg'
    },
    {
        post: 'Corporate Affairs Head',
        name: 'Mrigendra Pratap Singh',
        regNo: '2022UGPI036',
        image: 'mrigendra.jpg'
    },
    {
        post: 'Corporate Affairs Head',
        name: 'Paras Parimal',
        regNo: '2022UGCM007',
        image: 'paras.jpg'
    },
    {
        post: 'App & Web Head',
        name: 'Harshit Srivastava',
        regNo: '2022UGCS097',
        image: 'harshit_srivastava.jpg'
    },
    {
        post: 'App & Web Head',
        name: 'Priyanshu Dev',
        regNo: '2022UGCE021',
        image: 'priyanshu_dev.jpg'
    },
    {
        post: 'Content Head',
        name: 'Priyanshu Jha',
        regNo: '2022UGPI022',
        image: 'priyanshu_jha.jpg'
    },
    {
        post: 'Content Head',
        name: 'Paripoorna',
        regNo: '2022UGCS113',
        image: 'paripoorna.jpg'
    },
    {
        post: 'Executive Head',
        name: 'Nainish Singh',
        regNo: '2022UGMM043',
        image: 'nainish.jpg'
    }
];

function Team() {
    return (
        <div className="team-page-content">
            <h1 className="main-team-heading">URJA'26 SUPERCORE</h1>
            <div className="team-cards-container">
                {supercoreTeamData.map((member, index) => (
                    <div className="team-card" key={index}>
                        <div className="card-image-container">
                            <img
                                src={`/supercore/${member.image}`}
                                alt={member.name}
                                className="member-image"
                            />
                            <div className="card-overlay"></div>
                        </div>
                        <div className="card-details">
                            <p className="card-post">{member.post}</p>
                            <h2 className="card-name">{member.name}</h2>
                            <p className="card-regno">{member.regNo}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Team;