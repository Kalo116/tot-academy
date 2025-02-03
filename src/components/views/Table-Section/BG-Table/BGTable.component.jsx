import { useState } from 'react';
import { FaCheck, FaTimes, FaInfoCircle } from 'react-icons/fa';
import './BGTable.styles.css';

export default function BGTable({ initialData }) {
    const [tableData] = useState(initialData);

    const serviceTypes = ['Regular Course', 'Bootcamp'];
    const gradeTypes = ['5,6,7', '8,9,10', '11,12'];

    const serviceDescriptions = {
        'Regular Course': 'Master your subjects with our regular courses, featuring comprehensive content review and consistent practice.',
        'Bootcamp': 'Accelerate your preparation with focused bootcamps for optimal performance.',
    };

    const renderServiceOverlay = (service, courseName) => {
        if (!service || typeof service === 'boolean') return null;

        const renderPricingInfo = (levelData) => {
            if (!levelData) return null;

            return (
                <div className="pricing-info">
                    {levelData.individual && (
                        <div>
                            Individual: {levelData.individual.available ? (
                                <span>{levelData.individual.price} BGN</span>
                            ) : <FaTimes />}
                        </div>
                    )}
                    {levelData.group && (
                        <div>
                            Group: {levelData.group.available ? (
                                <span>{levelData.group.price} BGN</span>
                            ) : <FaTimes />}
                        </div>
                    )}
                </div>
            );
        };

        const grades = service.grades || {};

        if (courseName === 'Custom courses') {
            const allGradeData = grades.all;
            return (
                <div className="bg-service-overlay">
                    <div className="level-info">
                        {renderPricingInfo(allGradeData)}
                    </div>
                </div>
            );
        }

        return (
            <div className="bg-service-overlay">
                {gradeTypes.map(gradeType => (
                    grades[gradeType] && (
                        <div key={gradeType} className="level-info">
                            <strong>Grade: {gradeType}</strong>
                            {renderPricingInfo(grades[gradeType])}
                        </div>
                    )
                ))}
            </div>
        );
    };

    const renderServiceTypeHeader = (service) => {
        return (
            <div className="service-header">
                {service}
                <div className="info-icon-wrapper"
                    onMouseEnter={(e) => {
                        const overlay = e.currentTarget.querySelector('.info-overlay');
                        if (overlay) {
                            const rect = e.currentTarget.getBoundingClientRect();
                            overlay.style.top = `${rect.bottom + 5}px`;
                            overlay.style.left = `${rect.left + (rect.width / 2)}px`;
                            overlay.style.transform = 'translateX(-50%)';
                        }
                    }}
                >
                    <FaInfoCircle className="info-icon" />
                    <div className="info-overlay">
                        {serviceDescriptions[service]}
                    </div>
                </div>
            </div>
        );
    };

    const handleCellMouseEnter = (event) => {
        const cell = event.currentTarget;
        const overlay = cell.querySelector('.bg-service-overlay');
        if (overlay) {
            const cellRect = cell.getBoundingClientRect();
            overlay.style.left = `${cellRect.right + 20}px`;
            overlay.style.top = `${cellRect.top + (cellRect.height / 2)}px`;
            overlay.style.transform = 'translateY(-50%)';
        }
    };

    const isServiceAvailable = (service, courseName) => {
        if (!service || service === false) return false;
        if (service === true) return true;

        const grades = service.grades || {};

        if (courseName === 'Custom courses') {
            const allGradeData = grades.all;
            return allGradeData && (allGradeData.individual?.available || allGradeData.group?.available);
        }

        return gradeTypes.some(grade => {
            const gradeData = grades[grade];
            return gradeData && (gradeData.individual?.available || gradeData.group?.available);
        });
    };

    if (!tableData || !tableData.length) return <div>No courses available</div>;

    const sortedCourses = [...tableData].sort((a, b) => a.order - b.order);

    return (
        <div className="bg-table-wrapper">
            <div className="bg-table-container">
                <table className="bg-table">
                    <thead>
                        <tr>
                            <th>Course Name</th>
                            {serviceTypes.map(service => (
                                <th key={service}>
                                    {renderServiceTypeHeader(service)}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {sortedCourses.map((course, index) => (
                            <tr key={`${course.name}-${index}`}>
                                <td className="course-name">
                                    <div>{course.name}</div>
                                </td>
                                {serviceTypes.map(serviceType => (
                                    <td
                                        key={`${course.name}-${serviceType}`}
                                        className="service-cell"
                                        onMouseEnter={handleCellMouseEnter}
                                    >
                                        <div className="service-indicator">
                                            {isServiceAvailable(course.services[serviceType], course.name) ?
                                                <FaCheck className="available" /> :
                                                <FaTimes className="unavailable" />
                                            }
                                        </div>
                                        {renderServiceOverlay(course.services[serviceType], course.name)}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
} 