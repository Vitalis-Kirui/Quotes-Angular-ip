export class QuotesConstructor {

    showDetails : boolean;

    constructor(public id: number, public quotes: string, public authorName: string, public details: string, public upvote: number, public downvote: number, public completeDate : Date ){

        this.showDetails = false;

    };
    
}
