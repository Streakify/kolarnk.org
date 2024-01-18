import React from 'react';

const Team = () => {
    return (
        <>
            <div className="container " style={{marginTop:50}}>
                <div className="row text-center text-white">
                    <div className="col-lg-8 mx-auto">
                    <div className="section-header">
          <h2>Governing Body</h2>
          <p>Aperiam dolorum et et wuia molestias qui eveniet numquam nihil porro incidunt dolores placeat sunt id nobis omnis tiledo stran delop</p>
        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row text-center">

                    {/* Team item */}
                    <div className="col-xl-3 col-sm-6 mb-5" data-aos="fade-up">
                        <div className="bg-white rounded shadow-sm py-5 px-4">
                            <img src="https://bootstrapious.com/i/snippets/sn-team/teacher-4.jpg" alt="" width="100" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                            <h5 className="mb-0">Manuella Nevoresky</h5><span className="small text-uppercase text-muted">CEO - Founder</span>
                        </div>
                    </div>{/* End */}

                    {/* Repeat the above structure for each team member */}

                </div>
            </div>
        </>
    );
}

export default Team;
