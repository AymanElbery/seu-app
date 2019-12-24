export interface ObjectExam {
    courses:Array<{CRSE:number,teacher: string}>;
    exams:Array<{CRN:string,CRSE_TITLE:string,teacher:string}>;
    reason:string;
    bank:number;
    account_number:string;
    fees_amount:string;
    attachment:string;

}
