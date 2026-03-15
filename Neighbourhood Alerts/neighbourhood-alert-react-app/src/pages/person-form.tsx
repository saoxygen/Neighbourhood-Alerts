import Header from '../Header.tsx'

function PersonHtmlForm() {

    return (
        <>
            <Header />
            <section id='person-form' className='flex-center main-form'>
                <form>
                    <h1>Person / Suspect Report Form</h1>

                    <div className='form-section'>
                        <h4>Crime &amp; Document</h4>
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
                                <label htmlFor="crimeType">Crime Committed</label>
                                <select id="crimeType" className='input-style dropdown-arrow' name="crimeType">
                                    <option value="SEXUAL_ASSAULT">Sexual Assault</option>
                                    <option value="PHYSICAL_ASSAULT">Physical Assault</option>
                                    <option value="ROBBERY">Robbery</option>
                                    <option value="ARMED_ROBBERY">Armed Robbery</option>
                                    <option value="HIJACKING">Hijacking</option>
                                    <option value="MURDER">Murder</option>
                                    <option value="ATTEMPTED_MURDER">Attempted Murder</option>
                                    <option value="BURGLARY">Burglary</option>
                                    <option value="FRAUD">Fraud</option>
                                    <option value="KIDNAPPING">Kidnapping</option>
                                    <option value="DOMESTIC_VIOLENCE">Domestic Violence</option>
                                    <option value="DRUG_RELATED">Drug-Related Offence</option>
                                    <option value="VANDALISM">Vandalism</option>
                                    <option value="OTHER">Other</option>
                                </select>
                            </div>
                            <div className="label_data">
                                <label htmlFor="suspectStatus">Suspect Status</label>
                                <select id="suspectStatus" className='input-style dropdown-arrow' name="suspectStatus">
                                    <option value="WANTED" selected>Wanted</option>
                                    <option value="ARRESTED">Arrested</option>
                                    <option value="IN_CUSTODY">In Custody</option>
                                    <option value="RELEASED_ON_BAIL">Released on Bail</option>
                                    <option value="CONVICTED">Convicted</option>
                                    <option value="AT_LARGE">At Large</option>
                                    <option value="UNKNOWN">Unknown</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className='form-section'>
                        <h4>Incident Location</h4>
                        <div className="fieldset">
                            <div className="label_data">
                                <label htmlFor="incidentProvince">Province</label>
                                <select id="incidentProvince" className='input-style dropdown-arrow' name="incidentProvince">
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
                                <label htmlFor="suburb">Suburb</label>
                                <input type="text" id="suburb" className='input-style' name="suburb" placeholder="e.g. Sandton" />
                            </div>
                            <div className="label_data">
                                <label htmlFor="incidentTimestamp">Incident Date &amp; Time</label>
                                <input type="datetime-local" id="incidentTimestamp" className='input-style' name="incidentTimestamp" />
                            </div>
                        </div>
                    </div>

                    <div className='form-section'>
                        <h4>Suspect Identity</h4>
                        <div className="fieldset">
                            <div className="label_data">
                                <label htmlFor="firstName">First Name</label>
                                <input type="text" id="firstName" className='input-style' name="firstName" placeholder="e.g. John" />
                            </div>
                            <div className="label_data">
                                <label htmlFor="lastName">Last Name / Surname</label>
                                <input type="text" id="lastName" className='input-style' name="lastName" placeholder="e.g. Doe" />
                            </div>
                            <div className="label_data">
                                <label htmlFor="alias">Alias / Nickname</label>
                                <input type="text" id="alias" className='input-style' name="alias" placeholder="e.g. 'Big Mike'" />
                            </div>
                            <div className="label_data">
                                <label htmlFor="idNumber">ID Number (if known)</label>
                                <input type="text" id="idNumber" className='input-style' name="idNumber" placeholder="13-digit SA ID number" />
                            </div>
                        </div>
                    </div>

                    <div className='form-section'>
                        <h4>Suspect Description</h4>
                        <div className="fieldset">
                            <div className="label_data">
                                <label htmlFor="gender">Gender</label>
                                <select id="gender" className='input-style dropdown-arrow' name="gender">
                                    <option value="MALE" selected>Male</option>
                                    <option value="FEMALE">Female</option>
                                    <option value="UNKNOWN">Unknown</option>
                                </select>
                            </div>
                            <div className="label_data">
                                <label htmlFor="estimatedAge">Estimated Age</label>
                                <input type="number" id="estimatedAge" className='input-style' name="estimatedAge" min="0" max="120" placeholder="e.g. 30" />
                            </div>
                            <div className="label_data">
                                <label htmlFor="race">Race</label>
                                <select id="race" className='input-style dropdown-arrow' name="race">
                                    <option value="UNKNOWN" selected>Unknown</option>
                                    <option value="BLACK_AFRICAN">Black African</option>
                                    <option value="COLOURED">Coloured</option>
                                    <option value="INDIAN_ASIAN">Indian / Asian</option>
                                    <option value="WHITE">White</option>
                                    <option value="OTHER">Other</option>
                                </select>
                            </div>
                            <div className="label_data">
                                <label htmlFor="build">Build</label>
                                <select id="build" className='input-style dropdown-arrow' name="build">
                                    <option value="SLIM">Slim</option>
                                    <option value="MEDIUM" selected>Medium</option>
                                    <option value="STOCKY">Stocky</option>
                                    <option value="HEAVY">Heavy</option>
                                    <option value="MUSCULAR">Muscular</option>
                                </select>
                            </div>
                            <div className="label_data">
                                <label htmlFor="heightCm">Height (cm)</label>
                                <input type="number" id="heightCm" className='input-style' name="heightCm" min="50" max="250" placeholder="e.g. 175" />
                            </div>
                            <div className="label_data">
                                <label htmlFor="clothingDescription">Clothing Description</label>
                                <input type="text" id="clothingDescription" className='input-style' name="clothingDescription" placeholder="e.g. Red hoodie, black jeans" />
                            </div>
                            <div className="label_data">
                                <label htmlFor="distinctiveFeatures">Distinctive Features</label>
                                <textarea id="distinctiveFeatures" className='input-style' name="distinctiveFeatures" rows={3} placeholder="e.g. Tattoo on left arm, scar on cheek, gold tooth"></textarea>
                            </div>
                        </div>
                    </div>

                    <div className='form-section'>
                        <h4>Incident Details</h4>
                        <div className="fieldset">
                            <div className="label_data">
                                <label htmlFor="numberOfSuspects">Number of Suspects</label>
                                <input type="number" id="numberOfSuspects" className='input-style' name="numberOfSuspects" min="1" placeholder="e.g. 2" />
                            </div>
                            <div className="label_data">
                                <label htmlFor="weaponUsed">Weapon Used</label>
                                <select id="weaponUsed" className='input-style dropdown-arrow' name="weaponUsed">
                                    <option value="NONE" selected>None</option>
                                    <option value="FIREARM">Firearm</option>
                                    <option value="KNIFE">Knife / Blade</option>
                                    <option value="BLUNT_OBJECT">Blunt Object</option>
                                    <option value="OTHER">Other</option>
                                    <option value="UNKNOWN">Unknown</option>
                                </select>
                            </div>
                            <div className="label_data">
                                <label htmlFor="lastSeenLocation">Last Seen Location</label>
                                <input type="text" id="lastSeenLocation" className='input-style' name="lastSeenLocation" placeholder="e.g. Northbound on N1 highway" />
                            </div>
                            <div className="label_data">
                                <label htmlFor="incidentDescription">Description of What Happened</label>
                                <textarea id="incidentDescription" className='input-style' name="incidentDescription" rows={4} placeholder="Describe the incident in detail..."></textarea>
                            </div>
                        </div>
                    </div>

                    <div className='form-section'>
                        <h4>Arrest &amp; Case Info</h4>
                        <div className="fieldset">
                            <div className="label_data">
                                <label htmlFor="caseNumber">Case / SAP Number</label>
                                <input type="text" id="caseNumber" className='input-style' name="caseNumber" placeholder="e.g. CAS 123/03/2026" />
                            </div>
                            <div className="label_data">
                                <label htmlFor="policeStation">Reporting Police Station</label>
                                <input type="text" id="policeStation" className='input-style' name="policeStation" placeholder="e.g. Sandton SAPS" />
                            </div>
                            <div className="label_data">
                                <label htmlFor="arrestLocation">Where Caught / Arrested (if applicable)</label>
                                <input type="text" id="arrestLocation" className='input-style' name="arrestLocation" placeholder="e.g. Midrand, Gauteng" />
                            </div>
                        </div>
                    </div>

                    <div className='form-section'>
                        <h4>Additional Notes</h4>
                        <div className="fieldset">
                            <div className="label_data">
                                <label htmlFor="customDescription">Custom Description</label>
                                <textarea id="customDescription" className='input-style' name="customDescription" rows={4} placeholder="Any additional information..."></textarea>
                            </div>
                        </div>
                    </div>

                    <div className='form-section'>
                        <button className='btn' id='person-submit-btn' type="submit">Submit Report</button>
                    </div>

                </form>
            </section>
        </>
    );

}

export default PersonHtmlForm;