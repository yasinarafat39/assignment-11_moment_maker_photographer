import React from 'react';

const BlogPage = () => {
    return (
        <div className='max-w-screen-xl lg:mx-auto grid lg:grid-cols-2 md:grid-cols-2 gap-4 m-4 lg:m-0'>
            <div>
                <h3 className='text-xl font-semibold'>Difference between SQL and NoSQL</h3>
                <p className='text-gray-600'>When it comes to choosing a database the biggest decisions is picking a relational (SQL) or non-relational (NoSQL) data structure. While both the databases are viable options still there are certain key differences between the two that users must keep in mind when making a decision.</p>
                <p className='text-md font-bold mt-2'>The Main Differences: </p>
                <p className='text-gray-600'>Type – <br />
                    SQL databases are primarily called as Relational Databases (RDBMS); whereas NoSQL database are primarily called as non-relational or distributed database.
                </p>
                <p className='text-gray-600'>
                    Language –  <br />
                    SQL databases defines and manipulates data based structured query language (SQL). Seeing from a side this language is extremely powerful. SQL is one of the most versatile and widely-used options available which makes it a safe choice especially for great complex queries. But from other side it can be restrictive. SQL requires you to use predefined schemas to determine the structure of your data before you work with it. Also all of your data must follow the same structure. This can require significant up-front preparation which means that a change in the structure would be both difficult and disruptive to your whole system.
                    <br /> A NoSQL database has dynamic schema for unstructured data. Data is stored in many ways which means it can be document-oriented, column-oriented, graph-based or organized as a KeyValue store. This flexibility means that documents can be created without having defined structure first. Also each document can have its own unique structure. The syntax varies from database to database, and you can add fields as you go.
                </p>
                <p className='text-gray-600'>
                    Structure – <br />
                    SQL databases are table-based on the other hand NoSQL databases are either key-value pairs, document-based, graph databases or wide-column stores. This makes relational SQL databases a better option for applications that require multi-row transactions such as an accounting system or for legacy systems that were built for a relational structure.
                </p>

            </div>

            <div>
                <h3 className='text-xl font-semibold'>What is JWT (JSON Web Token)?</h3>
                <p className='text-gray-600'>JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object.</p>
                <p className='text-gray-600'>It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP). So the integrity and authenticity of the token can be verified by other parties involved.</p>
                <p className='text-gray-600'>The purpose of using JWT is not to hide data but to ensure the authenticity of the data. JWT is signed and encoded, not encrypted.</p>
                <p className='text-gray-600'>JWT is a token based stateless authentication mechanism. Since it is a client-side based stateless session, server doesn't have to completely rely on a datastore(database) to save session information.</p>
                <h4 className='text-xl font-bold'>How it works?</h4>
                <p className='text-gray-600'>Basically the identity provider(IdP) generates a JWT certifying user identity and Resource server decodes and verifies the authenticity of the token using secret salt / public key.</p>

                <li className='text-gray-600'>User sign-in using username and password or google/facebook.</li>
                <li className='text-gray-600'>Authentication server verifies the credentials and issues a jwt </li>
                <li className='text-gray-600'>signed using either a secret salt or a private key.</li>
                <li className='text-gray-600'>User's Client uses the JWT to access protected resources by passing the JWT in HTTP Authorization header.</li>
                <li className='text-gray-600'>Resource server then verifies the authenticity of the token using the secret salt/ public key.</li>
            </div>



            <div>
                <h3 className='text-xl font-semibold'>What is the difference between javascript and NodeJS?</h3>
                <p className='text-gray-600'><span className='font-bold'>1. NodeJS :</span> <br />
                    NodeJS is a cross-platform and opensource Javascript runtime environment that allows the javascript to be run on the server-side. Nodejs allows Javascript code to run outside the browser. Nodejs comes with a lot of modules and mostly used in web development.
                </p>
                <p className='text-gray-600'><span className='font-bold'>2. JavaScript : </span> <br />
                    Javascript is a Scripting language. It is mostly abbreviated as JS. It can be said that Javascript is the updated version of the ECMA script. Javascript is a high-level programming language that uses the concept of Oops but it is based on prototype inheritance.
                </p>

            </div>
            <div>
                <h3 className='text-xl font-semibold'>How does NodeJS handle multiple requests at the same time?</h3>
                <p className='text-gray-600'>NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue. </p>
                <p className='text-gray-600'>If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module.</p>
            </div>
        </div>
    );
};

export default BlogPage;