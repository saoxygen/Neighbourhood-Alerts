
import Header from '../Header.tsx'
import { submitForm } from "../services/api.tsx";
import { useState } from 'react'
import type { ICreateVehicleForm } from '../interface/ICreateVehicleForm'
import { VehicleStatus, VehicleType, VehicleCondition } from '/Portfolio/Neighbourhood Alerts/shared/vehicle.enums'
import { CrimeDocumentType } from '/Portfolio/Neighbourhood Alerts/shared/document.enums'


export default function VehicleHtmlForm() {
    const [formData, setFormData] = useState<ICreateVehicleForm>({
        // Crime & Status
        crimeDocumentType: CrimeDocumentType.NO_DOCUMENT,
        vehicleStatus: VehicleStatus.STOLEN,

        // Core Vehicle Info
        numberPlate: 'GP 12 3456',
        color: 'Black',
        make: 'Toyota',
        model: 'Fortuner',
        year: '2022',
        vehicleType: VehicleType.SUV,
        area: 'Sandton, Johannesburg',

        // Registration Details
        registrationProvince: 'Gauteng',
        vin: '1HGBH41JXMN109186',
        engineNumber: 'ENG-987654321',

        // Visual Description
        bodyStyle: '',
        additionalColors: 'Black roof, tinted windows',
        condition: VehicleCondition.GOOD,
        distinctiveFeatures: 'Roof rack, tow bar, aftermarket rims',

        // Incident Details
        incidentTimestamp: new Date('2026-03-14T10:30'),
        lastSeenDirection: 'Northbound on N1 highway',
        numberOfOccupants: '2',
        suspectDescription: 'Male, approximately 30-40 years old, wearing a red hoodie',

        // Tracking
        trackingDeviceInstalled: 'true',
        trackingProvider: 'Tracker SA',

        // Additional Notes
        customDescription: 'Vehicle was last seen exiting Sandton City parking lot',
    });

    // const [status, setStatus] = useState("idle");

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        await submitForm(formData); // ← called exactly the same way
    };

    return (
        <>
            <Header />
            <section id='vehicle-form' className='flex-center main-form'>
                <form onSubmit={handleSubmit}>
                    <h1>Vehicle Form</h1>

                    <div className='form-section'>
                        <h4>Crime &amp; Status</h4>
                        <div className="fieldset">

                            <div className="label_data">
                                <label htmlFor="crimeDocumentType">Crime Document Type</label>
                                <select id="crimeDocumentType" value={formData.crimeDocumentType} onChange={handleChange} className='input-style dropdown-arrow' name="crimeDocumentType">
                                    <option value={CrimeDocumentType.NO_DOCUMENT}>No Document</option>
                                    <option value={CrimeDocumentType.CASE_NUMBER}>Case Number</option>
                                    <option value={CrimeDocumentType.AFFIDAVIT_SWORN_STATEMENT}>Affidavit</option>
                                    <option value={CrimeDocumentType.J88_MEDICAL_EXAMINATION_FORM}>J88 Medical Examination</option>
                                    <option value={CrimeDocumentType.PROTECTION_ORDER}>Protection Order</option>
                                    <option value={CrimeDocumentType.BAIL_NOTICE}>Bail Notice</option>
                                    <option value={CrimeDocumentType.CHARGE_SHEET}>Charge Sheet</option>
                                    <option value={CrimeDocumentType.RESTRAINING_ORDER}>Restraining Order</option>
                                    <option value={CrimeDocumentType.VICTIM_IMPACT_STATEMENT}>Victim Impact Statement</option>
                                    <option value={CrimeDocumentType.INSURANCE_LOSS_ASSESSOR_REPORT}>Insurance Loss Assessor</option>
                                    <option value={CrimeDocumentType.SAPS_NPA_CORRESPONDENCE}>SAPS/NPA Correspondence</option>
                                </select>
                            </div>
                            <div className="label_data">
                                <label htmlFor="vehicleStatus">Vehicle Status</label>
                                <select id="vehicleStatus" value={formData.vehicleStatus} onChange={handleChange} className='input-style dropdown-arrow' name="vehicleStatus">
                                    <option value={VehicleStatus.STOLEN}>Stolen</option>
                                    <option value={VehicleStatus.WANTED}>Wanted</option>
                                    <option value={VehicleStatus.INVOLVED_IN_CRIME}>Involved in Crime</option>
                                    <option value={VehicleStatus.FOUND}>Found</option>
                                    <option value={VehicleStatus.ACTIVE}>Active</option>
                                    <option value={VehicleStatus.MISSING}>Missing</option>
                                    <option value={VehicleStatus.ABANDONED}>Abandoned</option>
                                    <option value={VehicleStatus.ACCIDENT_INVOLVED}>Accident Involved</option>
                                    <option value={VehicleStatus.IMPOUNDED}>Impounded</option>
                                    <option value={VehicleStatus.SEIZED}>Seized</option>
                                    <option value={VehicleStatus.UNDER_INVESTIGATION}>Under Investigation</option>
                                    <option value={VehicleStatus.IN_REPAIR}>In Repair</option>
                                    <option value={VehicleStatus.WRITTEN_OFF}>Written Off</option>
                                    <option value={VehicleStatus.DECOMMISSIONED}>Decommissioned</option>
                                    <option value={VehicleStatus.RECOVERED}>Recovered</option>
                                    <option value={VehicleStatus.HIJACKED}>Hijacked</option>
                                    <option value={VehicleStatus.UNKNOWN}>Unknown</option>
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
                                <select id="vehicleType" value={formData.vehicleType} onChange={handleChange} className='input-style dropdown-arrow' name="vehicleType">
                                    <optgroup label="Passenger Vehicles">
                                        <option value={VehicleType.SEDAN}>Sedan</option>
                                        <option value={VehicleType.HATCHBACK}>Hatchback</option>
                                        <option value={VehicleType.COUPE}>Coupe</option>
                                        <option value={VehicleType.CONVERTIBLE}>Convertible</option>
                                        <option value={VehicleType.WAGON}>Wagon</option>
                                        <option value={VehicleType.SUV}>SUV</option>
                                        <option value={VehicleType.CROSSOVER}>Crossover</option>
                                        <option value={VehicleType.MPV}>MPV (People Carrier)</option>
                                    </optgroup>
                                    <optgroup label="Light Commercial">
                                        <option value={VehicleType.BAKKIE}>Bakkie</option>
                                        <option value={VehicleType.MINIBUS}>Minibus</option>
                                        <option value={VehicleType.MINIBUS_TAXI}>Minibus Taxi</option>
                                        <option value={VehicleType.VAN}>Van</option>
                                        <option value={VehicleType.MICROBUS}>Microbus</option>
                                    </optgroup>
                                    <optgroup label="Heavy Commercial">
                                        <option value={VehicleType.TRUCK}>Truck</option>
                                        <option value={VehicleType.FLATBED_TRUCK}>Flatbed Truck</option>
                                        <option value={VehicleType.TIPPER_TRUCK}>Tipper Truck</option>
                                        <option value={VehicleType.TANKER}>Tanker</option>
                                        <option value={VehicleType.SEMI_TRUCK}>Semi Truck</option>
                                        <option value={VehicleType.BOX_TRUCK}>Box Truck</option>
                                    </optgroup>
                                    <optgroup label="Buses">
                                        <option value={VehicleType.BUS}>Bus</option>
                                        <option value={VehicleType.COACH}>Coach</option>
                                    </optgroup>
                                    <optgroup label="Two / Three Wheelers">
                                        <option value={VehicleType.MOTORBIKE}>Motorbike</option>
                                        <option value={VehicleType.SCOOTER}>Scooter</option>
                                        <option value={VehicleType.TRIKE}>Trike</option>
                                        <option value={VehicleType.QUAD_BIKE}>Quad Bike</option>
                                    </optgroup>
                                    <optgroup label="Specialised">
                                        <option value={VehicleType.AMBULANCE}>Ambulance</option>
                                        <option value={VehicleType.FIRE_TRUCK}>Fire Truck</option>
                                        <option value={VehicleType.ARMOURED_VEHICLE}>Armoured Vehicle</option>
                                        <option value={VehicleType.TRACTOR}>Tractor</option>
                                        <option value={VehicleType.FORKLIFT}>Forklift</option>
                                        <option value={VehicleType.GOLF_CART}>Golf Cart</option>
                                    </optgroup>
                                    <option value={VehicleType.OTHER}>Other</option>
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
                                    <option value={VehicleCondition.GOOD} selected>Good</option>
                                    <option value={VehicleCondition.OKAY}>Okay</option>
                                    <option value={VehicleCondition.BAD}>Bad</option>
                                    <option value={VehicleCondition.DAMAGED}>Damaged</option>
                                    <option value="DAMAGED">Damaged</option>
                                </select>
                            </div>
                            <div className="label_data">
                            </div>
                            <div className="label_data">
                                <label htmlFor="distinctiveFeatures">Distinctive Features</label>
                                <textarea id="distinctiveFeatures" className='input-style' name="distinctiveFeatures" rows={3} placeholder="e.g. Roof rack, custom rims">Roof rack, tow bar, aftermarket rims</textarea>
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

// export default MyForm.VehiclehtmlForm;