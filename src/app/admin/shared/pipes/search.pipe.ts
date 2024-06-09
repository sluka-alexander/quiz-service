import {Pipe, PipeTransform} from '@angular/core'
import {Quiz} from "../../../shared/interfaces";

@Pipe({
  name: 'SearchQuiz'
})

export class SearchPipe implements PipeTransform {
    transform(quizzez: Quiz[], search = ''): Quiz[] {
        if (!search.trim()) {
          return quizzez;
        }

        return quizzez.filter(quiz => {
          return quiz.name.toLowerCase().includes(search.toLowerCase());
        });
    }
}
