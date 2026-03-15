/**
 * Enum representing the legally recognised documents that crime victims
 * in South Africa can access and share publicly to substantiate a reported crime.
 *
 * These document types are accepted on the platform as proof that a crime
 * occurred and that the relevant authorities have been made aware.
 *
 * Legal basis: SAPS Act, Criminal Procedure Act, Domestic Violence Act,
 * Victims of Crime Survey guidelines, and POPIA compliance requirements.
 */
export enum CrimeDocumentType {

    NO_DOCUMENT = 'NO_DOCUMENT',
  /**
   * SAPS Case Reference Number (CAS Number)
   * Issued by SAPS when a crime is officially reported.
   * Serves as the foundational proof that a case exists in the system.
   */
  CASE_NUMBER = 'CASE_NUMBER',

  /**
   * Affidavit / Sworn Statement
   * A victim's own sworn statement made before a commissioner of oaths.
   * First-person account of events submitted to the police.
   */
  AFFIDAVIT_SWORN_STATEMENT = 'AFFIDAVIT_SWORN_STATEMENT',

  /**
   * J88 Medical Examination Form
   * Medico-legal form completed by a doctor following assault or sexual offences.
   * Documents injuries and is the property of the victim.
   */
  J88_MEDICAL_EXAMINATION_FORM = 'J88_MEDICAL_EXAMINATION_FORM',

  /**
   * Protection Order / Interdict
   * Court-issued protection order under the Domestic Violence Act or similar.
   * Proves a court formally recognised a threat against the victim.
   */
  PROTECTION_ORDER = 'PROTECTION_ORDER',

  /**
   * Bail Notice / Bail Conditions Document
   * Issued when an accused is released on bail.
   * Confirms the accused has been arrested and is known to the authorities.
   */
  BAIL_NOTICE = 'BAIL_NOTICE',

  /**
   * Court Summons / Charge Sheet
   * Public court document confirming charges laid against an accused.
   * Part of the official public court record once proceedings commence.
   */
  CHARGE_SHEET = 'CHARGE_SHEET',

  /**
   * Restraining Order / Civil Interdict
   * Civil court order legally prohibiting the accused from contact with the victim.
   * Warns the public that a named individual poses a recognised legal threat.
   */
  RESTRAINING_ORDER = 'RESTRAINING_ORDER',

  /**
   * Victim Impact Statement
   * Personal statement submitted by the victim during the sentencing stage.
   * Documents how the crime affected the victim physically, emotionally, and financially.
   */
  VICTIM_IMPACT_STATEMENT = 'VICTIM_IMPACT_STATEMENT',

  /**
   * Insurance / Loss Assessor Report
   * Third-party verified report of material loss from theft, fraud, or property damage.
   * Substantiates the financial impact of the crime.
   */
  INSURANCE_LOSS_ASSESSOR_REPORT = 'INSURANCE_LOSS_ASSESSOR_REPORT',

  /**
   * Written Communication from SAPS / NPA
   * Official correspondence regarding case status, e.g. nolle prosequi letters,
   * case withdrawal notices, or prosecution decisions.
   * Documents whether authorities acted or declined to act on the case.
   */
  SAPS_NPA_CORRESPONDENCE = 'SAPS_NPA_CORRESPONDENCE',
}

