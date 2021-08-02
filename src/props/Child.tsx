interface ChildProps { 
    color: string;
    onClick: () => void; //can use void to show it's not going to return any usable value
    children: 'this is how you could have used children';
}

//Component option 1:
// Using interface with typescript prop that throws error on default optional props
export const Child = ({ color, onClick, children } : ChildProps) =>{
    return (
        <div>
            {color}
            {children}
            Hi there, I'm a child of the Parent file.
            <button onClick={onClick}>This is me again</button>
        </div>
    );
}

//Component option 2:
// This way of writing is tells us 3 things
// 1. This is a React Function Component
// 2. Can use all of the values that a React Function Component has
// 3. Explicitly, this Child comp will recieve a props object of ChildProps
export const ChildAsFC: React.FunctionComponent<ChildProps> =({ color, onClick }) => {
    return (
    <div>
        {color}
        <button onClick={onClick}>Click Me</button>
    </div>
    );
};


// ChildAsFC.displayName => This was supposed to not show an error :/


// Child.displayName 
// This is an example of the 
// default props that comes with all react components, 
// but because of the way we are interfacing with the 
// component, it doesn't realize that we are using React 
// library and no longer associates the component with 
// the React's default properties. 
// See https://docs.google.com/document/d/10-CAAPM8s_ojlUSvjcKKZIbobNaxIe05LCVHYpGRWuw/edit