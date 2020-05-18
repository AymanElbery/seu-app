export interface CourseEqualMaster {
    courses: Array<{CRSE: string, Id: string, value: string}>;
    course_list: Array<{CRSE_TITLE, CRSE_PK, TRNS_HRS, TRNS_CRSE, TRNS_GRADE, TRNS_LANG}>;
    universities: any[];
    can_add_new_request;
    messages;
    PREV_UNIV: number;
    DESC_CRSE_FILE: string;
    TRANSCRIPT_FILE: string;
    notes: any;
    hourse_list:any[];
    grade_list:any[];
    attachment:any;
    year:number
    university:any;
}
