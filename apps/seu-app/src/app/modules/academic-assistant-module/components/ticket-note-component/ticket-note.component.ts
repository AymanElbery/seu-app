import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { AppToasterService } from 'src/app/shared/services/app-toaster';
import { SDService } from '../../sd.service';

@Component({
  selector: 'sd-request-note',
  templateUrl: './ticket-note.component.html',
  styleUrls: ['./ticket-note.component.css']
})
export class SDRequestNoteComponent implements OnInit {

  form: FormGroup;
  submitted = false;
  @Input() ticket_id;
  @Output() newNote = new EventEmitter();
  constructor(
    private translate: TranslateService,
    private service: SDService,
    private toastr: AppToasterService,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      description: ['', [Validators.required]],
      file: ['']
    });
  }

  ngOnInit() {

  }
  handleFileInput(files: FileList) {
    this.form.controls['file'].setValue(files.item(0));
  }
  onSubmit() {
    if (this.form.invalid) {
      return;
    }
    let data = this.form.value;
    data['ticket_id'] = this.ticket_id;
    this.submitted = true;
    this.service.AddNote(data).subscribe(
      (response: any) => {
        if (response.status) {
          this.toastr.push([{
            'type': 'success',
            'body': this.translate.instant('messages.request_added')
          }]);
          this.newNote.emit(response.data);
          this.form.reset();
        } else {
          if (response['messages'].length) {
            this.toastr.push(response['messages']);
          } else {
            this.toastr.push([{
              'type': 'error',
              'body': this.translate.instant(response['res_code'])
            }]);
          }
        }
        this.submitted = false;
      },
      error => {
        this.toastr.tryagain();
        this.submitted = false;
      }
    );
  }
}
