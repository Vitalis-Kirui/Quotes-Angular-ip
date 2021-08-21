export class QuotesConstructor {

    showDetails : boolean;

    constructor(public id: number, public quotes: string, public authorName: string, public details: string ){

        this.showDetails = false;

    };
    
}
