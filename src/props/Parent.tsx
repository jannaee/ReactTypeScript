import { Child } from './Child';

const Parent = () => {
    return (
        <Child color='red' children='this is how you could have used children' onClick={()=> console.log('clicked')}/>
    );
};

export default Parent;