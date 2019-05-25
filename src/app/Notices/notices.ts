export class Notices {
    id:number;
    description:string;
    title:string;
    imageUrl:string;
    dateAdded:Date;
    managementCategorysId:number;
    managementCategorys:{
        id:number,
        name:string,
        notices:any;
    }
}
