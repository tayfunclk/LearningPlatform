import { Component, OnInit } from '@angular/core';
import { Question } from 'src/app/model/question';
import { QuestionService } from '../question.service';

@Component({
  selector: 'app-getquestion',
  templateUrl: './getquestion.component.html',
  styleUrls: ['./getquestion.component.css']
})
export class GetquestionComponent implements OnInit {
  questions: Question[]=[];
  constructor(private questionService: QuestionService) { }

  ngOnInit() {
    this.getQuestion();
  }
  deleteProduct(id) {
    this.questionService.deleteQuestion(id).subscribe(res => {
      this.getQuestion();
    });
  }

  getQuestion() {
    this.questionService.getQuestion().subscribe((data: Question[]) => {
      this.questions = data;
    }, err => {
      console.error(err);
    });
  }

} 