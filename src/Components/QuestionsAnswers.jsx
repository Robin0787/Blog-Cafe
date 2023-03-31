import React from 'react';

const QuestionsAnswers = () => {
    return (
        <footer className='grid grid-cols-1 md:grid-cols-3 gap-5 mb-6'>
            {/* First Question : Props Vs State */}
            <div className='shadow-lg rounded-lg'>
                <h2 className="text-xl p-6 bg-green-500 text-white font-semibold rounded-t-lg text-center">Props Vs State</h2>
                <p className="text-md my-6 px-4 text-justify"><span className='font-semibold'>Props</span> are a type of object that is used to send data from parent to child components. Props are always passed from the parent component and the child component always uses it inside. <br /> On the other hand, a <span className='font-semibold'>State</span> is also a type of object used inside any component. The state is the component's own property whereas props don't. <br />Whenever props or state changes react re-render the components.</p>
            </div>
            {/* Second Question : How does useState work */}
            <div className='shadow-lg rounded-lg'>
                <h2 className="text-xl p-6 bg-green-500 text-white font-semibold rounded-t-lg text-center">How does useState work?</h2>
                <p className="text-md my-6 px-4 text-justify"><span className="font-semibold">useState</span> is a built-in function or hook in react. useState function receives two inputs as arguments and returns an array of two elements one is for receiving its value and another is for updating its value. Whenever we update the value of state by using useState then react re-render the component.</p>
            </div>
            {/* Third Question : Purpose of useEffect other than fetching data */}
            <div className='shadow-lg rounded-lg'>
                <h2 className="text-xl p-6 bg-green-500 text-white font-semibold rounded-t-lg text-center">Purpose of useEffect other than fetching data.</h2>
                <p className="text-md my-6 px-4 text-justify">The <span className="font-semibold">useEffect</span> allows us to perform all the side effects in our components. Examples of side effects are retrieving data, updating DOM, timers, etc.The <span className="font-semibold">useEffect</span> takes two arguments one is a callback function and another one is an array.
                The array mainly contains dependencies. And the callback function performs some tasks based on the need of the programmer. The useEffect function can be used multiple times on a component.</p>
            </div>
        </footer>
    );
};

export default QuestionsAnswers;