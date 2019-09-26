import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../question.service';
import { ActivatedRoute } from '@angular/router';
import { Question } from 'src/app/model/question';

@Component({
  selector: 'app-editquestion',
  templateUrl: './editquestion.component.html',
  styleUrls: ['./editquestion.component.css']
})
export class EditquestionComponent implements OnInit {
  question: Question;

  constructor(private route: ActivatedRoute, private questionService: QuestionService) {
    this.question = new Question();
  }

  ngOnInit() {
    this.route.params.subscribe(params => {

      if (params['id']) {
        this.questionService.editQuestion(params['id']).subscribe((res: Question) => {
          this.question = res;
        });
      }

    });
  }

  updateQuestion() {
    this.questionService.updateQuestion(this.question);
  }

  addQuestion() {
    this.questionService.addQuestion(this.question);
  }
}
