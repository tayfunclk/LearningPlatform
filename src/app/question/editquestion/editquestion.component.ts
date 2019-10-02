import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../question.service';
import { ActivatedRoute } from '@angular/router';
import { Question, Category } from 'src/app/model/question';

@Component({
  selector: 'app-editquestion',
  templateUrl: './editquestion.component.html',
  styleUrls: ['./editquestion.component.css']
})
export class EditquestionComponent implements OnInit {
  question: Question;
  keys = Object.keys;
  categories = Category;
  deneme: any;
  constructor(private route: ActivatedRoute, private questionService: QuestionService) {
    this.question = new Question();

  }

  ngOnInit() {
    this.route.params.subscribe(params => {

      if (params['id']) {
        this.questionService.editQuestion(params['id']).subscribe((res: Question) => {
          this.question = res;
          this.question.category = Category.BENZESME;
        });
      }

    });
  }

  updateQuestion() {
    console.log(this.deneme);
    this.questionService.updateQuestion(this.question);
  }

  addQuestion() {
    this.questionService.addQuestion(this.question);
  }
}
