
import Header from '../Header.tsx'

function VehiclehtmlForm() {

    return (
        <>
            <Header />
            <section id='vehicle-form' className='flex-center main-form'>
                <form>
                    <h1>Vehicle Form</h1>

                    <div className='form-section'>
                        <h4>Crime &amp; Status</h4>
                        <div className="fieldset">

                            <div className="label_data">
                                <label htmlFor="crimeDocumentType">Crime Document Type</label>
                                <select id="crimeDocumentType" className='input-style dropdown-arrow' name="crimeDocumentType">
                                    <option value="NO_DOCUMENT">No Document</option>
                                    <option value="AFFIDAVIT">Affidavit</option>
                                    <option value="POLICE_REPORT">Police Report</option>
                                    <option value="COURT_ORDER">Court Order</option>
                                </select>
                            </div>
                            <div className="label_data">
                                <label htmlFor="vehicleStatus">Vehicle Status</label>
                                <select id="vehicleStatus" className='input-style dropdown-arrow' name="vehicleStatus">
                                    <option value="WANTED" selected>Wanted</option>
                                    <option value="RECOVERED">Recovered</option>
                                    <option value="STOLEN">Stolen</option>
                                    <option value="HIJACKED">Hijacked</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className='form-section'>
                        <h4>Core Vehicle Info</h4>
                        <div className="fieldset">
                            <div className="label_data">

                                <label htmlFor="numberPlate">Number Plate</label>
                                <input type="text" id="numberPlate" className='input-style' name="numberPlate" value="GP 12 3456" placeholder="e.g. GP 12 3456" />
                            </div>
                            <div className="label_data">
                                <label htmlFor="color">Color</label>
                                <input type="text" id="color" className='input-style' name="color" value="Black" placeholder="e.g. Black" />
                            </div>
                            <div className="label_data">
                                <label htmlFor="make">Make</label>
                                <input type="text" id="make" className='input-style' name="make" value="Toyota" placeholder="e.g. Toyota" />
                            </div>
                            <div className="label_data">
                                <label htmlFor="model">Model</label>
                                <input type="text" id="model" className='input-style' name="model" value="htmlFortuner" placeholder="e.g. htmlFortuner" />
                            </div>
                            <div className="label_data">
                                <label htmlFor="year">Year</label>
                                <input type="number" id="year" className='input-style' name="year" value="2022" min="1900" max="2100" placeholder="e.g. 2022" />
                            </div>
                            <div className="label_data">
                                <label htmlFor="vehicleType">Vehicle Type</label>
                                <select id="vehicleType" className='input-style dropdown-arrow' name="vehicleType">
                                    <option value="SUV" selected>SUV</option>
                                    <option value="SEDAN">Sedan</option>
                                    <option value="HATCHBACK">Hatchback</option>
                                    <option value="BAKKIE">Bakkie</option>
                                    <option value="MINIBUS">Minibus</option>
                                    <option value="TRUCK">Truck</option>
                                    <option value="MOTORCYCLE">Motorcycle</option>
                                    <option value="OTHER">Other</option>
                                </select>
                            </div>
                            <div className="label_data">
                                <label htmlFor="area">Area</label>
                                <input type="text" id="area" className='input-style' name="area" value="Sandton, Johannesburg" placeholder="e.g. Sandton, Johannesburg" />
                            </div>
                        </div>
                    </div>

                    <div className='form-section'>
                        <h4>Registration Details</h4>
                        <div className="fieldset">
                            <div className="label_data">
                                <label htmlFor="registrationProvince">Registration Province</label>
                                <select id="registrationProvince" className='input-style dropdown-arrow' name="registrationProvince">
                                    <option value="Gauteng" selected>Gauteng</option>
                                    <option value="Western Cape">Western Cape</option>
                                    <option value="Eastern Cape">Eastern Cape</option>
                                    <option value="KwaZulu-Natal">KwaZulu-Natal</option>
                                    <option value="Limpopo">Limpopo</option>
                                    <option value="Mpumalanga">Mpumalanga</option>
                                    <option value="North West">North West</option>
                                    <option value="Free State">Free State</option>
                                    <option value="Northern Cape">Northern Cape</option>
                                </select>
                            </div>
                            <div className="label_data">
                                <label htmlFor="vin">VIN (17 characters)</label>
                                <input type="text" id="vin" className='input-style' name="vin" value="1HGBH41JXMN109186" placeholder="17-character VIN" />
                            </div>
                            <div className="label_data">
                                <label htmlFor="engineNumber">Engine Number</label>
                                <input type="text" id="engineNumber" className='input-style' name="engineNumber" value="ENG-987654321" placeholder="e.g. ENG-987654321" />
                            </div>
                        </div>
                    </div>

                    <div className='form-section'>
                        <h4>Visual Description</h4>
                        <div className="fieldset">
                            <div className="label_data">
                                <label htmlFor="additionalColors">Additional Colors</label>
                                <input type="text" id="additionalColors" className='input-style' name="additionalColors" value="Black roof, tinted windows" placeholder="e.g. White roof, red stripe" />
                            </div>
                            <div className="label_data">
                                <label htmlFor="condition">Vehicle Condition</label>
                                <select id="condition" className='input-style dropdown-arrow' name="condition">
                                    <option value="EXCELLENT">Excellent</option>
                                    <option value="GOOD" selected>Good</option>
                                    <option value="FAIR">Fair</option>
                                    <option value="POOR">Poor</option>
                                    <option value="DAMAGED">Damaged</option>
                                </select>
                            </div>
                            <div className="label_data">
                            </div>
                            <div className="label_data">
                                <label htmlFor="distinctiveFeatures">Distinctive Features</label>
                                <textarea id="distinctiveFeatures" className='input-style' name="suspectDescription" rows={3} placeholder="e.g. Roof rack, custom rims">Roof rack, tow bar, aftermarket rims</textarea>
                            </div>
                        </div>
                    </div>

                    <div className='form-section'>
                        <h4>Incident Details</h4>
                        <div className="fieldset">
                            <div className="label_data">
                                <label htmlFor="incidentTimestamp">Incident Date &amp; Time</label>
                                <input type="datetime-local" id="incidentTimestamp" className='input-style' name="incidentTimestamp" value="2026-03-14T10:30" />
                            </div>
                            <div className="label_data">
                                <label htmlFor="lastSeenDirection">Last Seen Direction</label>
                                <input type="text" id="lastSeenDirection" className='input-style' name="lastSeenDirection" value="Northbound on N1 highway" placeholder="e.g. Northbound on N1" />
                            </div>
                            <div className="label_data">
                                <label htmlFor="numberOfOccupants">Number of Occupants</label>
                                <input type="number" id="numberOfOccupants" className='input-style' name="numberOfOccupants" value="2" min="0" placeholder="e.g. 2" />
                            </div>
                            <div className="label_data">
                                <label htmlFor="suspectDescription">Suspect Description</label>
                                <textarea id="suspectDescription" className='input-style' name="suspectDescription" rows={3} placeholder="Describe suspect(s)...">Male, approximately 30-40 years old, wearing a red hoodie</textarea>
                            </div>
                        </div>
                    </div>

                    <div className='form-section'>
                        <h4>Tracking</h4>
                        <div className="fieldset">
                            <div className="label_data">
                                <label htmlFor="trackingDeviceInstalled">Tracking Device Installed</label>
                                <select id="trackingDeviceInstalled" className='input-style dropdown-arrow' name="trackingDeviceInstalled">
                                    <option value="true" selected>Yes</option>
                                    <option value="false">No</option>
                                </select>
                            </div>
                            <div className="label_data">
                                <label htmlFor="trackingProvider">Tracking Provider</label>
                                <input type="text" id="trackingProvider" className='input-style' name="trackingProvider" value="Tracker SA" placeholder="e.g. Tracker SA, Netstar" />
                            </div>
                        </div>
                    </div>

                    <div className='form-section'>
                        <h4>Additional Notes</h4>
                        <div className="fieldset">
                            <div className="label_data">
                                <label htmlFor="customDescription">Custom Description</label>
                                <textarea id="customDescription" className='input-style' name="customDescription" rows={4} placeholder="Any additional inhtmlFormation...">Vehicle was last seen exiting Sandton City parking lot</textarea>
                            </div>
                        </div>
                    </div>

                    <div className='form-section'>
                        <button className='btn' id='vehicle-submit-btn' type="submit">Submit Report</button>
                    </div>

                </form>
            </section>
        </>
    );

}

export default VehiclehtmlForm;