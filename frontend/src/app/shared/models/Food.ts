export class Food{
  id!:string;//required items are defined by using ! mark
  name!:string;
  price!:number;
  tags?:string[];
  favorite!:boolean;
  stars!: number;
  imageUrl! :string;
  origins! :string[];
  cookTime!:string;
}
