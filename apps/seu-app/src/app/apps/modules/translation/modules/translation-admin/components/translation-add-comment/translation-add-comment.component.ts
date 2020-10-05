import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { CommentService } from '../../../../services/translation-comment';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route } from '@angular/compiler/src/core';
import { TranslationUserService } from '../../../../services/translation-user';

export interface DialogData {
  reqId: number
}

@Component({
  selector: 'app-translation-add-comment',
  templateUrl: './translation-add-comment.component.html',
  styleUrls: ['./translation-add-comment.component.css']
})

export class TranslationAddCommentComponent implements OnInit {

  isLoading = false;
  addCommentForm: FormGroup;
  submitted= false;
  commentsList;
  reqId;

  constructor(
  private fb: FormBuilder, 
  private router: Router,
  private userService: TranslationUserService,
  private commentService: CommentService,
  public dialogRef: MatDialogRef<TranslationAddCommentComponent>,
  @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {
    this.reqId = data;
    this.addCommentForm = this.fb.group({
      DETAILS: ["", [Validators.required]],
    });
  }

  ngOnInit() {
    this.getAllComments();
  }  

  getAllComments() {
    this.isLoading = true;
    this.commentService.getCommentsByReqId(this.reqId).subscribe((response) => {
      this.commentsList = response['data'];
      this.isLoading = false;
    },err=>{
      this.commentService.tryagain();
      this.isLoading = false;
    });
  }

  closeDiag(refresh = false) {
    this.dialogRef.close(refresh);
  }

  onSubmit(){
    this.submitted = true;
    if (this.addCommentForm.invalid) {
        return;
    }
    let data = this.addCommentForm.value;
    data.REQ_ID = this.reqId;
    data.INSERTED_BY = this.userService.user['USER_ID'];
    this.commentService.addComment(data).subscribe((response) => {
      this.closeDiag(true);
    },err=>{
      this.commentService.tryagain();
    });
  }
}
