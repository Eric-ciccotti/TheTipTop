import React from 'react';
import '../../css/section.css';

const Section = ({ children, backgroundImagePath }) => {
  return (
    <section
      className="section"
      style={{ backgroundImage: `url(${backgroundImagePath})` }}
    >
      <div className="container h-100">
        <div className="row h-100 align-items-center">
          <div className="col-12 text-center">
            <div className="bloc-content position-relative top-50 start-50 translate-middle">
              {children}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section;
