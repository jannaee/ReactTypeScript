interface RepositoriesState {
    loading: boolean;
    error: string | null;
    data: string[];
  }

// // Every action is an obj with a mandatory Type property
//   interface Action {
//     type: string;
//     payload?: any; //we don't want to use any so let's see how we can fix this below with the following interfaces
//   }

  
interface SearchRepositoriesAction {
    type:  'search_repositories'
}

interface SearchRepositoriesSuccessAction {
    type: 'search_repositories_success';
    payload: string[];
}

interface SearchRepositoriesErrorAction {
    type: 'search_repositories_error';
    payload: string;
}

//Can use this property below instead for the action property
type Action = | SearchRepositoriesAction | SearchRepositoriesSuccessAction | SearchRepositoriesErrorAction;

//The purpose of adding state tot he function reducer is to ensure that all of the data is 
//  const reducer = (state: RepositoriesState, action: any) => { 
    const reducer = (
        //state: RepositoriesState, action: any): RepositoriesState => {
        //instead of using any we can access the individual interfaces to handle the search Repositories
        state: RepositoriesState, 
        action: 
        // Action (Or you can just state Action ... see 'type Action')
        // A union type or "|" describes a value that can be one of several types.
            | SearchRepositoriesAction 
            | SearchRepositoriesSuccessAction 
            | SearchRepositoriesErrorAction ): RepositoriesState => {
        switch (action.type) {
            case 'search_repositories':
                return { loading: true, error: null, data: [] };
            case 'search_repositories_success':
                return { loading: false, error: null, data: action.payload };
            case 'search_repositories_error':
                return { loading: false, error: action.payload, data: [] };
            
            default:
                return state;
    }
  };
  


  
  export default reducer;
  