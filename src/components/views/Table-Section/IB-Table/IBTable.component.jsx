import { useState } from 'react';
import { FaCheck, FaTimes, FaInfoCircle } from 'react-icons/fa';
import './IBTable.styles.css';

export default function IBTable({ initialData }) {
    const [tableData] = useState(initialData);

    const serviceTypes = ['IA/EE Package', 'Bootcamp', 'Regular Course', 'Essay/IO'];

    const serviceDescriptions = {
        'Regular Course': 'Master IB success with our regular courses, where comprehensive content review meets consistent practice of exam-style problems for unparalleled results.',
        'IA/EE Package': 'Excel in IA and EE with our expert guidance on topic selection, research, structure, and writing to meet criteria and achieve top marks.',
        'Bootcamp': 'Accelerate your IB preparation in our focused Bootcamps, mastering paper question types and optimizing answering strategies for peak performance.',
        'Essay/IO': 'Help with essays and Individual Orals'
    };

    const renderServiceOverlay = (service, courseName) => {
        if (!service || typeof service === 'boolean') return null;

        const renderLevelInfo = (level, levelType) => {
            if (!level) return null;

            return (
                <div className="level-info">
                    <strong>{levelType}:</strong>
                    <div className="pricing-info">
                        {level.individual && (
                            <div>
                                Individual: {level.individual.available ? (
                                    <span>{level.individual.price} BGN</span>
                                ) : <FaTimes />}
                            </div>
                        )}
                        {level.group && (
                            <div>
                                Group: {level.group.available ? (
                                    <span>{level.group.price} BGN</span>
                                ) : <FaTimes />}
                            </div>
                        )}
                    </div>
                </div>
            );
        };

        return (
            <div className="service-overlay">
                {service.HL && renderLevelInfo(service.HL, 'HL')}
                {service.SL && renderLevelInfo(service.SL, 'SL')}
            </div>
        );
    };

    const isServiceAvailable = (service) => {
        if (!service || service === false) return false;
        if (service === true) return true;
        return service.HL || service.SL;
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

    const renderServiceTypeHeader = (service) => {
        return (
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
        );
    };

    if (!tableData || !tableData.length) return <div>No courses available</div>;

    const sortedCourses = [...tableData].sort((a, b) => a.order - b.order);

    return (
        <div className="ib-table-container">
            <table className="ib-table">
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