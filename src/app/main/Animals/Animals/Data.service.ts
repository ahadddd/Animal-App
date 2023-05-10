import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  animals = [
    {
      "name": "Meowsy",
      "species": "cat",
      "foods": {
        "likes": ["tuna", "catnip"],
        "dislikes": ["ham", "zucchini"]
      }
    },
    {
      "name": "Barky",
      "species": "dog",
      "foods": {
        "likes": ["bones", "carrots"],
        "dislikes": ["tuna"]
      }
    },
    {
      "name": "Purrpaws",
      "species": "cat",
      "foods": {
        "likes": ["mice"],
        "dislikes": ["cookies"]
      }
    },
    {
      "name": "Selina",
      "species": "cat",
      "foods": {
        "likes": ["tuna"],
        "dislikes": ["ham", "zucchini"]
      }
    },

    {
      "name": "Oscar",
      "species": "dog",
      "foods": {
        "likes": ["belly rubs"],
        "dislikes": ["being outside"]
      }
    },
    {
      "name": "Cracker",
      "species": "cat",
      "foods": {
        "likes": ["chicken"],
        "dislikes": ["kittens"]
      }
    },
    {
      "name": "Bruno",
      "species": "cat",
      "foods": {
        "likes": ["playing"],
        "dislikes": ["being indoors"]
      }
    },
    {
      "name": "Betsy",
      "species": "dog",
      "foods": {
        "likes": ["liver", "carrots"],
        "dislikes": ["guests"]
      }
    },
    {
      "name": "Cheese",
      "species": "cat",
      "foods": {
        "likes": ["chicken"],
        "dislikes": ["nothing"]
      }
    }
  ]

  constructor() { }

  getData() {
    return this.animals;
  }

}
