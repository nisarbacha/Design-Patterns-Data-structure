import { Sort } from "./Sort";
import { CharactersCollection } from "./CharactersCollection";
import { NumberCollection } from "./NumberCollection";

const numberCollection = new NumberCollection([3, 5, 4, 2, 4]);
numberCollection.sortingMethod(); 
console.log(`==> ${numberCollection.data}`);

const charactersCollection = new CharactersCollection("fBezTx"); 
charactersCollection.sortingMethod();
console.log(`==> ${charactersCollection.data}`); 
 