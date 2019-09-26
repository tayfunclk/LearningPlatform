import { Injectable } from '@angular/core';
import { CommonService } from '../model/common.service';
import { Router } from '@angular/router';
import { Question } from '../model/question';


@Injectable({
    providedIn: 'root'
})
export class QuestionService {
    class = "question";
    constructor(private cs: CommonService, private router: Router) { }
    addQuestion(question: Question) {
        this.cs.post(`${this.class}/add`, question).subscribe(
            res => {
                console.log('Done');
                this.router.navigate(['getQuestions']);
            }, err => {
                console.log('something wrong');
            });
    }

    getQuestion() {
        return this.cs.get(`${this.class}`);
    }

    editQuestion(id) {
        return this.cs.get(`${this.class}/edit/${id}`);
    }

    updateQuestion(question: any) {
        this.cs.post(`${this.class}/update/${question._id}`, question).subscribe(
            res => {
                console.log('Done');
                this.router.navigate(['getQuestions']);
            });
    }

    deleteQuestion(id) {
        return this.cs.get(`${this.class}/delete/${id}`);
    }
}
