type Props = { onContinue: () => void };

export function AgencyDetailsStep({ onContinue }: Props) {
  return (
    <>
      <h3 style={{ color: 'var(--navy)', fontSize: 16 }}>Agency Details</h3>
      <p style={{ color: 'var(--gray-500)', fontSize: 12.5, marginBottom: 6 }}>
        Tell us about your ambulance agency.
      </p>
      <div className="wiz-sec-h">Agency Information</div>
      <div className="form-grid">
        <div className="field">
          <label>Agency Name <span className="req">*</span></label>
          <input placeholder="e.g. Rapid Aid Pvt Ltd" />
        </div>
        <div className="field">
          <label>Registration Number <span className="req">*</span></label>
          <input placeholder="MH/AMB/2021/0457" />
        </div>
        <div className="field">
          <label>GSTIN <span className="req">*</span></label>
          <input placeholder="27AABCR1234M1Z5" />
        </div>
        <div className="field">
          <label>Year of Establishment</label>
          <input placeholder="2021" type="number" />
        </div>
        <div className="field">
          <label>Total Ambulances</label>
          <input placeholder="6" type="number" />
        </div>
      </div>
      <div className="wiz-sec-h">Location</div>
      <div className="form-grid">
        <div className="field full">
          <label>Business Address <span className="req">*</span></label>
          <input placeholder="Street, building, area" />
        </div>
        <div className="field">
          <label>City <span className="req">*</span></label>
          <input placeholder="Mumbai" />
        </div>
        <div className="field">
          <label>State <span className="req">*</span></label>
          <select>
            <option>Maharashtra</option>
            <option>Delhi</option>
            <option>Karnataka</option>
            <option>Gujarat</option>
          </select>
        </div>
      </div>
      <div className="wiz-sec-h">Contact Information</div>
      <div className="form-grid">
        <div className="field">
          <label>Contact Person <span className="req">*</span></label>
          <input placeholder="Full name" />
        </div>
        <div className="field">
          <label>Designation</label>
          <input placeholder="Operations Manager" />
        </div>
        <div className="field">
          <label>Email <span className="req">*</span></label>
          <input type="email" placeholder="admin@agency.in" />
        </div>
        <div className="field">
          <label>Mobile <span className="req">*</span></label>
          <input placeholder="+91 ..." />
        </div>
      </div>
      <div className="wiz-actions end">
        <button className="btn btn-primary" onClick={onContinue}>
          Continue →
        </button>
      </div>
    </>
  );
}
