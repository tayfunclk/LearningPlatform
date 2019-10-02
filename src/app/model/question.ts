//This class should be generic 
//soru havuzu bağımsız olmalı.
export class Question {
    _id: number;
    question_id: number;
    category: Category;//Enum Eş anlamlı,Matris
    duration: number;// sorunun süresi
    point: number;   //sorunun değeri
    options: Image[];//çoktan seçmeli imageler
    rightAnswer: number; //which option is the right answer
}

export enum Category {
    MATRIS="MATRIS", BENZESME="BENZESME", KUPLER="KUPLER"
}

/*export namespace Category {
    export function values() {
        return Object.keys(Category).filter(
            (type) => isNaN(<any>type) && type !== 'values'
        );
    }
}*/



export class Image {
    id: number;
    path: string;
}

//Öğrenci üzerine soru paketleri satın alıyor.
//Paketlerialmaya başlayınce bu paketler listeleniyor.
//
export class Student {
    studentId: number;
    name: string;
    lastname: string;
    class: number;//which class
    packages: QuestionPackage[];//bought packages
}

//Bu paketler içerisinde sorular ve her soru için de öğrenci cevabı olmalıdır.
// bu bilgiler de StudentAnswer a saklanmalıdır.
//Hiçbir şekilde Soru paketi içinde öğrenci bilgisi olmayacak.
export class QuestionPackage {//paket satın alınacak
    questionPackageId: number;
    questionList: Question[];
    price: number;
}
//doğru yanlış hesaplaması yapılır Question listesi içerisinde doğru cevabı kontrol edilerek.
// öğrenci doğru cevap vermiş ise isCorrect true olacaktır.
//soru cevaplanırken bulunduğu soru ve öğrencinin verdiği cevap bu classa kayıt edilir.
//Hangi öğrenci hangi soruya ne cevap vermiş ,doğru mu yanlışmı
export class StudentAnswer {
    studentId: number;
    questionId: number;
    answer: string;//will be checked later
    isCorrect: boolean;//will be calculated
    answerTime: Date; //ne zaman cevap vermiş
}




