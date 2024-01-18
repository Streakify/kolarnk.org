import React from 'react';

const TableSection = () => {
  // Sample data for the table
  const tableData = [
    { id: 1, subject: 'Construction', fileUrl: 'https://example.com/file1.pdf' },
    { id: 2, subject: 'ABout Kolar', fileUrl: 'https://example.com/file2.pdf' },
    { id: 3, subject: 'About Nirmithi', fileUrl: 'https://example.com/file3.pdf' },
    // Add more data as needed
    // ...
  ];

  return (
    <section id="constructions" className="constructions">
      <div className="container" data-aos="fade-up">
        <div className="table-section">
          <h2 className="text-center mb-4">Downloadable Files</h2>
          <div className="table-responsive">
            <table className="table table-striped table-bordered">
              <thead>
                <tr>
                  <th>S.No</th>
                  <th>Subject</th>
                  <th>File</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((item, index) => (
                  <tr key={item.id}>
                    <td>{index + 1}</td>
                    <td>{item.subject}</td>
                    <td>
                      <a
                        href={item.fileUrl}
                        download={`File_${item.id}.pdf`}
                        className="btn btn-primary btn-sm"
                      >
                        Download
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TableSection;
