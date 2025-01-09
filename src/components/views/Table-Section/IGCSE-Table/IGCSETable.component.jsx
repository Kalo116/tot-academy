import { useState } from 'react';
import { FaCheck, FaTimes, FaInfoCircle } from 'react-icons/fa';
import './IGCSETable.styles.css';

export default function IGCSETable({ initialData }) {
    const [tableData] = useState(initialData);

    const serviceTypes = [ 'Regular Course', 'Bootcamp',];

    const serviceDescriptions = {
        'Regular Course': 'Master IGCSE success with our regular courses, featuring comprehensive content review and practice.',
        'Bootcamp': 'Accelerate your IGCSE preparation with focused bootcamps.',
    };

    const renderServiceOverlay = (service, courseName) => {
        if (!service || typeof service === 'boolean') return null;

        return (
            <div className="service-overlay">
                <div className="pricing-info">
                    {service.individual && (
                        <div>
                            Individual: {service.individual.available ? (
                                <span>{service.individual.price} BGN</span>
                            ) : <FaTimes />}
                        </div>
                    )}
                    {service.group && (
                        <div>
                            Group: {service.group.available ? (
                                <span>{service.group.price} BGN</span>
                            ) : <FaTimes />}
                        </div>
                    )}
                </div>
            </div>
        );
    };

    const isServiceAvailable = (service) => {
        if (!service || service === false) return false;
        if (service === true) return true;
        return service.individual || service.group;
    };

    const handleCellMouseEnter = (event) => {
        const cell = event.currentTarget;
        const overlay = cell.querySelector('.service-overlay');
        if (overlay) {
            const cellRect = cell.getBoundingClientRect();
            overlay.style.left = `${cellRect.left + (cellRect.width / 2)}px`;
            overlay.style.top = `${cellRect.top - overlay.offsetHeight - 10}px`;
        }
    };

    if (!tableData || !tableData.length) return <div>No courses available</div>;

    const sortedCourses = [...tableData].sort((a, b) => a.order - b.order);

    return (
        <div className="igcse-table-container">
            <table className="igcse-table">
                <thead>
                    <tr>
                        <th>Course Name</th>
                        {serviceTypes.map(service => (
                            <th key={service}>
                                <div className="service-header">
                                    <span>{service}</span>
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
                                        {isServiceAvailable(course.services[serviceType]) ? 
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
    );
} 