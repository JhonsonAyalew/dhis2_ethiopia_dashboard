import StatusBadge from "./StatusBadge";

export default function JobTable({ jobs, runJob, loading }) {
  return (
    <div className="job-table card">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {jobs.map((job) => (
            <tr key={job.id}>
              <td>{job.id}</td>
              <td>{job.name}</td>
              <td><StatusBadge status={job.status || "pending"} /></td>
              <td>
                <button onClick={() => runJob(job.id)} disabled={loading}>
                  {loading ? "Running..." : "Run Job"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
