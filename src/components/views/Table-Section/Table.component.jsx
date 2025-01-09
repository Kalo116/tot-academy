import { useRef, useState, useEffect } from 'react';
import {
    getIBCourses,
    getMYPCourses,
    getIGCSECourses,
    getBGCourses,
} from '../../../utils/firebase';
import IBTable from './IB-Table/IBTable.component';
import MYPTable from './MYP-Table/MYPTable.component';
import IGCSETable from './IGCSE-Table/IGCSETable.component';
import BGTable from './BG-Table/BGTable.component';

import './Table.styles.css';

export default function FinalTable() {
    const [isLoading, setIsLoading] = useState(true);
    const [tablesData, setTablesData] = useState({
        IB: null,
        MYP: null,
        IGCSE: null,
        BG: null,
    });

    const ibRef = useRef(null);
    const mypRef = useRef(null);
    const igcseRef = useRef(null);
    const bgRef = useRef(null);

    const TableLoader = () => <div className="table-loader"></div>;

    useEffect(() => {
        const loadAllData = async () => {
            try {
                setIsLoading(true);
                const [ibData, mypData, igcseData, bgData] = await Promise.all([
                    getIBCourses(),
                    getMYPCourses(),
                    getIGCSECourses(),
                    getBGCourses(),
                ]);

                setTablesData({
                    IB: ibData,
                    MYP: mypData,
                    IGCSE: igcseData,
                    BG: bgData,
                });
                setIsLoading(false);
            } catch (error) {
                console.error('Error loading table data:', error);
            }
        };

        loadAllData();
    }, []);

    const scrollToTable = (type) => {
        const refs = {
            'IB': ibRef,
            'MYP': mypRef,
            'IGCSE': igcseRef,
            'BG': bgRef,
        };

        refs[type]?.current?.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    };

    return (
        <div className="final-table-container">
            <div className="table-navigation">
                {['IB', 'MYP', 'IGCSE', 'BG'].map((type) => (
                    <button
                        key={type}
                        className="table-button"
                        onClick={() => scrollToTable(type)}
                    >
                        {type}
                    </button>
                ))}
            </div>

            {isLoading ? <TableLoader /> : <div className="tables-wrapper">
                <section ref={ibRef} className="table-section">
                    <h2>IB</h2>
                    <p>We provide comprehensive support for students preparing for the IB Diploma Programme.</p>
                    {tablesData.IB && <IBTable initialData={tablesData.IB} />}
                </section>

                <section ref={mypRef} className="table-section">
                    <h2>MYP</h2>
                    <p>Our tutoring makes the MYP easier to navigate, helping students grow into confident, global thinkers.</p>
                    {tablesData.MYP && <MYPTable initialData={tablesData.MYP} />}
                </section>

                <section ref={igcseRef} className="table-section">
                    <h2>IGCSE</h2>
                    <p>We provide expert guidance to help students achieve excellent results in their IGCSE exams.</p>
                    {tablesData.IGCSE && <IGCSETable initialData={tablesData.IGCSE} />}
                </section>

                <section ref={bgRef} className="table-section">
                    <h2>BG</h2>
                    <p>We help students succeed in the Bulgarian curriculum with focused and personalized support.</p>
                    {tablesData.BG && <BGTable initialData={tablesData.BG} />}
                </section>
            </div>}
        </div>
    );
}
