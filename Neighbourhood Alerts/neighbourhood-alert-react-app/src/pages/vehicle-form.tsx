
import Header from '../Header.tsx'

function VehiclehtmlForm() {

    return (
        <>
            <Header />
            <section>
                <form>

                    <fieldset>
                        <h4>Crime &amp; Status</h4>

                        <label htmlFor="crimeDocumentType">Crime Document Type</label>
                        <select id="crimeDocumentType" name="crimeDocumentType">
                            <option value="NO_DOCUMENT">No Document</option>
                            <option value="AFFIDAVIT">Affidavit</option>
                            <option value="POLICE_REPORT">Police Report</option>
                            <option value="COURT_ORDER">Court Order</option>
                        </select>

                        <label htmlFor="vehicleStatus">Vehicle Status</label>
                        <select id="vehicleStatus" name="vehicleStatus">
                            <option value="WANTED" selected>Wanted</option>
                            <option value="RECOVERED">Recovered</option>
                            <option value="STOLEN">Stolen</option>
                            <option value="HIJACKED">Hijacked</option>
                        </select>
                    </fieldset>

                    <fieldset>
                        <h4>Core Vehicle Info</h4>

                        <label htmlFor="numberPlate">Number Plate</label>
                        <input type="text" id="numberPlate" name="numberPlate" value="GP 12 3456" placeholder="e.g. GP 12 3456" />

                        <label htmlFor="color">Color</label>
                        <input type="text" id="color" name="color" value="Black" placeholder="e.g. Black" />

                        <label htmlFor="make">Make</label>
                        <input type="text" id="make" name="make" value="Toyota" placeholder="e.g. Toyota" />

                        <label htmlFor="model">Model</label>
                        <input type="text" id="model" name="model" value="htmlFortuner" placeholder="e.g. htmlFortuner" />

                        <label htmlFor="year">Year</label>
                        <input type="number" id="year" name="year" value="2022" min="1900" max="2100" placeholder="e.g. 2022" />

                        <label htmlFor="vehicleType">Vehicle Type</label>
                        <select id="vehicleType" name="vehicleType">
                            <option value="SUV" selected>SUV</option>
                            <option value="SEDAN">Sedan</option>
                            <option value="HATCHBACK">Hatchback</option>
                            <option value="BAKKIE">Bakkie</option>
                            <option value="MINIBUS">Minibus</option>
                            <option value="TRUCK">Truck</option>
                            <option value="MOTORCYCLE">Motorcycle</option>
                            <option value="OTHER">Other</option>
                        </select>

                        <label htmlFor="area">Area</label>
                        <input type="text" id="area" name="area" value="Sandton, Johannesburg" placeholder="e.g. Sandton, Johannesburg" />
                    </fieldset>

                    <fieldset>
                        <h4>Registration Details</h4>

                        <label htmlFor="registrationProvince">Registration Province</label>
                        <select id="registrationProvince" name="registrationProvince">
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

                        <label htmlFor="vin">VIN (17 characters)</label>
                        <input type="text" id="vin" name="vin" value="1HGBH41JXMN109186" placeholder="17-character VIN" />

                        <label htmlFor="engineNumber">Engine Number</label>
                        <input type="text" id="engineNumber" name="engineNumber" value="ENG-987654321" placeholder="e.g. ENG-987654321" />
                    </fieldset>

                    <fieldset>
                        <h4>Visual Description</h4>

                        <label htmlFor="bodyStyle">Body Style</label>
                        <input type="text" id="bodyStyle" name="bodyStyle" value="SUV" placeholder="e.g. SUV, Sedan" />

                        <label htmlFor="additionalColors">Additional Colors</label>
                        <input type="text" id="additionalColors" name="additionalColors" value="Black roof, tinted windows" placeholder="e.g. White roof, red stripe" />

                        <label htmlFor="condition">Condition</label>
                        <select id="condition" name="condition">
                            <option value="EXCELLENT">Excellent</option>
                            <option value="GOOD" selected>Good</option>
                            <option value="FAIR">Fair</option>
                            <option value="POOR">Poor</option>
                            <option value="DAMAGED">Damaged</option>
                        </select>

                        <label htmlFor="distinctiveFeatures">Distinctive Features</label>
                        <input type="text" id="distinctiveFeatures" name="distinctiveFeatures" value="Roof rack, tow bar, aftermarket rims" placeholder="e.g. Roof rack, custom rims" />
                    </fieldset>

                    <fieldset>
                        <h4>Incident Details</h4>

                        <label htmlFor="incidentTimestamp">Incident Date &amp; Time</label>
                        <input type="datetime-local" id="incidentTimestamp" name="incidentTimestamp" value="2026-03-14T10:30" />

                        <label htmlFor="lastSeenDirection">Last Seen Direction</label>
                        <input type="text" id="lastSeenDirection" name="lastSeenDirection" value="Northbound on N1 highway" placeholder="e.g. Northbound on N1" />

                        <label htmlFor="numberOfOccupants">Number of Occupants</label>
                        <input type="number" id="numberOfOccupants" name="numberOfOccupants" value="2" min="0" placeholder="e.g. 2" />

                        <label htmlFor="suspectDescription">Suspect Description</label>
                        <textarea id="suspectDescription" name="suspectDescription" rows={3} placeholder="Describe suspect(s)...">Male, approximately 30-40 years old, wearing a red hoodie</textarea>
                    </fieldset>

                    <fieldset>
                        <h4>Tracking</h4>

                        <label htmlFor="trackingDeviceInstalled">Tracking Device Installed</label>
                        <select id="trackingDeviceInstalled" name="trackingDeviceInstalled">
                            <option value="true" selected>Yes</option>
                            <option value="false">No</option>
                        </select>

                        <label htmlFor="trackingProvider">Tracking Provider</label>
                        <input type="text" id="trackingProvider" name="trackingProvider" value="Tracker SA" placeholder="e.g. Tracker SA, Netstar" />
                    </fieldset>

                    <fieldset>
                        <h4>Additional Notes</h4>

                        <label htmlFor="customDescription">Custom Description</label>
                        <textarea id="customDescription" name="customDescription" rows={4} placeholder="Any additional inhtmlFormation...">Vehicle was last seen exiting Sandton City parking lot</textarea>
                    </fieldset>

                    <button type="submit">Submit Report</button>
                    <button type="reset">Clear htmlForm</button>

                </form>
            </section>
        </>
    );

}

export default VehiclehtmlForm;