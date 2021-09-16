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
    student_details: StudentDetails;
    student_details_gr: StudentDetails;

    username: string;
    role: string;
    email: string;
    act_as_student: boolean;
    activeRole: string;
    STD_RIGHTS: number;
}
