import { StudentDetails } from './student-details';

export interface UserData {
    name_ar: string;
    name_en: string;
    stdName: string;
    sex: string;
    coll: string;
    major: string;
    level: string;
    id: string;
    PIDM: string;
    ssn: string;
    camp: string;
    student_details_ug: StudentDetails;
    student_details_gr: StudentDetails;
    student_details_ud: StudentDetails;

    username: string;
    role: string;
    email: string;
    act_as_student: boolean;
    activeRole: string;
    STD_RIGHTS: number;
    DATA_CLEANED: number;
    SEU_STRUCTURE_EMP: number;
    OTP: number;
    FEES_UD: number;
    DATA_CLEANED_STD: number;
    COMMITTE_CONFIRM: number;
    COMMITTE_CONFIRM_DATA: any;
    CHANGE_MAJOR_SURVEY: number;
    SHOW_POLICY: number;
    CHANGE_MAJOR_SURVEY_DATA: any;
}
