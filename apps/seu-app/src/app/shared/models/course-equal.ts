export interface CourseEqual {
    courses: Array<{TRNS_CRSE: number, TRNS_HRS: number, TRNS_GRADE: string, TRNS_LANG: string}>;
    course_list: Array<{CRSE_TITLE, CRSE_PK, TRNS_HRS, TRNS_CRSE, TRNS_GRADE, TRNS_LANG}>;
    univ_list_arr: any[];
    can_add_new_request;
    messages;
    PREV_UNIV: number;
    DESC_CRSE_FILE: string;
    TRANSCRIPT_FILE:string;
}
