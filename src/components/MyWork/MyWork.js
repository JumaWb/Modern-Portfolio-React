import React from "react";
import './MyWork.css';
import mywork_data from "../../assets/mywork_data";
import arrow_icon from '../../assets/arrow_icon.jpeg';

function MyWork() {
    return (
        <div id="work" className="mywork">
            <div className="mywork-title">
                <h1>My Latest Work</h1>
                {/* Optional decorative image here if needed */}
            </div>

            <div className="mywork-container">
                {mywork_data.map((work, index) => (
                    <div key={index} className="mywork-item">
                        <img src={work.w_img} alt={work.w_name} className="mywork-image" />
                        <h2 className="mywork-name">{work.w_name}</h2>
                        <p className="mywork-desc">{work.w_desc}</p>

                        {work.w_link && (
                        <a
                        href={work.w_link}
                        className="mywork-link"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        View Project
                        </a>
                    )}
                    </div>
                ))}
            </div>

            <div className="mywork-showmore">
                <p>Show More</p>
                <img src={arrow_icon} alt="Show more arrow" />
            </div>
        </div>
    );
}

export default MyWork;
