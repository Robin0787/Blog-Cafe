import React from 'react';

const QuestionsAnswers = () => {
    return (
        <footer className='grid grid-cols-1 md:grid-cols-2  gap-5 mb-6'>
            {/* First Question : Props Vs State */}
            <div className='shadow-lg rounded-lg'>
                <h2 className="text-xl p-4 bg-green-500 text-white font-semibold rounded-t-lg text-center">Props Vs State</h2>
                <p className="text-md my-6 px-4 text-justify"><span className='font-semibold'>Props</span> are a type of object that is used to send data from parent to child components. Props are always passed from the parent component and the child component always uses it inside. <br /> On the other hand, a <span className='font-semibold'>State</span> is also a type of object used inside any component. The state is the component's own property whereas props don't. <br />Whenever props or state changes react re-render the components.</p>
            </div>
            {/* Second Question : How does useState work */}
            <div className='shadow-lg rounded-lg'>
                <h2 className="text-xl p-4 bg-green-500 text-white font-semibold rounded-t-lg text-center">How does useState work?</h2>
                <p className="text-md my-6 px-4 text-justify"><span className="font-semibold">useState</span> is a built-in function or hook in react. useState function receives two inputs as arguments and returns an array of two elements one is for receiving its value and another is for updating its value. Whenever we update the value of state by using useState then react re-render the component.</p>
            </div>
            {/* Third Question : Purpose of useEffect other than fetching data */}
            <div className='shadow-lg rounded-lg'>
                <h2 className="text-xl p-4 bg-green-500 text-white font-semibold rounded-t-lg text-center">Purpose of useEffect other than fetching data.</h2>
                <p className="text-md my-6 px-4 text-justify">The <span className="font-semibold">useEffect</span> allows us to perform all the side effects in our components. Examples of side effects are retrieving data, updating DOM, timers, etc.The <span className="font-semibold">useEffect</span> takes two arguments one is a callback function and another one is an array.
                    The array mainly contains dependencies. And the callback function performs some tasks based on the need of the programmer. The useEffect function can be used multiple times on a component. The useEffect function runs when changes the value of its dependency. If we put an empty array as its dependency it will run one time after the component is rendered. If we don't put any dependency it will run every render.</p>
            </div>
            {/* Fourth Question : How does react work? */}
            <div className='shadow-lg rounded-lg'>
                <h2 className="text-xl p-4 bg-green-500 text-white font-semibold rounded-t-lg text-center">How does React work?</h2>
                <p className="text-md my-6 px-4 text-justify"><span className="font-semibold">React</span> works by using a virtual DOM and a component-based architecture to efficiently render and update UI components. The basic terms involved in how react works are as follows.<br />
                    1. When a user interacts with react components, the state of the components may be updated. <br />
                    2. When the state changes, react creates a new virtual DOM tree that represents the new UI component based on the updated state. <br />
                    3. Then react compares the new virtual DOM tree with the old to identify the differences between them. <br />
                    4. After identifying the differences between them, React simply updates only the components that need to be changed in actual DOM, rather than re-rendering the entire web page. It is only possible because of reacts virtual DOM and component base architecture. <br />
                    5. The updated UI is then rendered to the webpage. </p>
            </div>
        </footer>
    );
};

export default QuestionsAnswers;