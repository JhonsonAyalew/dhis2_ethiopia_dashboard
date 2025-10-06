export default function JobForm({ newJobName, setNewJobName, createJob }) {
  return (
    <div className="job-form card">
      <input
        type="text"
        placeholder="Job name"
        value={newJobName}
        onChange={(e) => setNewJobName(e.target.value)}
      />
      <button onClick={createJob}>Add Job</button>
    </div>
  );
}
