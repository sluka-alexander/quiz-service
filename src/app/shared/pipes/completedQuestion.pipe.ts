import {Pipe, PipeTransform} from '@angular/core'

@Pipe({
  name: 'CompletedQuestionPipe'
})

export class CompletedQuestionPipe implements PipeTransform {
    transform(quizzez: Quiz[], search = ''): Quiz[] {
        if (!search.trim()) {
          return quizzez;
        }

        return quizzez.filter(quiz => {
          return quiz.name.toLowerCase().includes(search.toLowerCase());
        });
    }
}
