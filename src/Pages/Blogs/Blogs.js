import React from 'react';

const Blogs = () => {
  return (
    <div className=''>
      <div className='grid lg:grid-cols-2 md:grid-cols-1 gap-10'>
        <div>
          <div>
            <img
              src='https://www.xenonstack.com/hubfs/xenonstack-optimizing-react-application.png'
              alt=''
            />
          </div>
          <div className='flex items-center'>
            <ul>
              <h1 className='text-xl font-bold'>
                How will you improve the performance of a React Application?
              </h1>
              <li>Use React.Fragment to Avoid Adding Extra Nodes to the DOM</li>
              <li>Use Production Build</li>
              <li>
                Use React.Suspense and React.Lazy for Lazy Loading Components
              </li>
              <li>Use React.memo for Component Memoization</li>
              <li>Virtualize a Large List Using react-window</li>
            </ul>
          </div>
        </div>
        <div>
          <div>
            <img
              src='https://www.freecodecamp.org/news/content/images/2022/03/lautaro-andreani-UYsBCu9RP3Y-unsplash.jpg'
              alt=''
            />
          </div>
          <div className='flex items-center'>
            <ul>
              <h1 className='text-xl font-bold'>
                What are the different ways to manage a state in a React
                application?
              </h1>
              <li>Local state.</li>
              <li>Global state.</li>
              <li>Server state.</li>
              <li>URL state.</li>
            </ul>
          </div>
        </div>
        <div>
          <div>
            <img
              src='https://www.javascripttutorial.net/wp-content/uploads/2022/01/JavaScript-prototypal-inheritance-inherits-from-Object.svg'
              alt=''
            />
          </div>
          <div className='flex items-center'>
            <ul>
              <h1 className='text-xl font-bold'>
                How does prototypical inheritance work?
              </h1>
              <p>
                Every object with its methods and properties contains an
                internal and hidden property known as [[Prototype]]. The
                Prototypal Inheritance is a feature in javascript used to add
                methods and properties in objects. It is a method by which an
                object can inherit the properties and methods of another object.
                Traditionally, in order to get and set the [[Prototype]] of an
                object, we use Object.getPrototypeOf and Object.setPrototypeOf.
                Nowadays, in modern language, it is being set using __proto__.
              </p>
            </ul>
          </div>
        </div>
        <div>
          <div>
            <img
              src='https://www.xenonstack.com/hubfs/xenonstack-optimizing-react-application.png'
              alt=''
            />
          </div>
          <div className='flex items-center'>
            <ul>
              <h1 className='text-xl font-bold'>
                Why you do not set the state directly in React. For example, if
                you have const [products, setProducts] = useState([]). Why you
                do not set products = [...] instead, you use the setProducts
              </h1>
              One should never update the state directly because of the
              following reasons: If you update it directly, calling the
              setState() afterward may just replace the update you made. When
              you directly update the state, it does not change this.state
              immediately. Instead, it creates a pending state transition, and
              accessing it after calling this method will only return the
              present value. You will lose control of the state across all
              components. Note: Out of all the react questions, this is one that
              actually helps the interviewer to judge your level of
              understanding in this subject. Read the answer carefully to
              understand it properly.
            </ul>
          </div>
        </div>
        <div>
          <div>
            <img
              src='https://www.softwaretestinghelp.com/wp-content/qa/uploads/2012/11/Unit-Testing.png'
              alt=''
            />
          </div>
          <div className='flex items-center'>
            <div>
              <h1 className='text-xl font-bold'>
                {' '}
                How will you improve the performance of a React Application?
              </h1>

              <p>
                A unit test is a way of testing a unit - the smallest piece of
                code that can be logically isolated in a system. In most
                programming languages, that is a function, a subroutine, a
                method or property. The isolated part of the definition is
                important. In his book "Working Effectively with Legacy Code",
                author Michael Feathers states that such tests are not unit
                tests when they rely on external systems: “If it talks to the
                database, it talks across the network, it touches the file
                system, it requires system configuration, or it can't be run at
                the same time as any other test." Modern versions of unit
                testing can be found in frameworks like JUnit, or testing tools
                like TestComplete. Look a little further and you will find
                SUnit, the mother of all unit testing frameworks created by Kent
                Beck, and a reference in chapter 5 of The Art of Software
                Testing . Before that, it's mostly a mystery. I asked Jerry
                Weinberg about his experiences with unit testing -- "We did unit
                testing in 1956. As far as I knew, it was always done, as long
                as there were computers".
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
