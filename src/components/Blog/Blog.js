import React from 'react';

const Blog = () => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="mb-10 border-t border-b divide-y">
        <div className="grid py-8 sm:grid-cols-4">
          <div className="mb-4 sm:mb-0">            
          </div>
          <div className="sm:col-span-3 lg:col-span-2">
            <div className="mb-3">
              <h2
               
                aria-label="Article"
                className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
              >
                <p className="text-3xl font-bold leading-none sm:text-4xl xl:text-4xl">
                 what is cors?
                </p>
              </h2>
            </div>
            <p className="text-gray-700">
              Ans:CORS stands for Cross-Origin Resource Sharing . It allows us to relax the security applied to an API. This is done by bypassing the Access-Control-Allow-Origin headers, which specify which origins can access the API,that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources.
            </p>
          </div>
        </div>
        <div className="grid py-8 sm:grid-cols-4">
          <div className="mb-4 sm:mb-0">
           
          </div>
          <div className="sm:col-span-3 lg:col-span-2">
            <div className="mb-3">
              <h2
               
                aria-label="Article"
                className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
              >
                <p className="text-3xl font-bold leading-none sm:text-4xl xl:text-4xl">
                   Why are you using firebase? What other options do you have to implement authentication?
                </p>
              </h2>
            </div>
            <p className="text-gray-700">
                            Ans:Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.
                            On this page.
                            Add and initialize the Authentication SDK.
                            (Optional) Prototype and test with Firebase Local Emulator Suite.
                            Sign up new users.
                            Sign in existing users.
                            Set an authentication state observer and get user data.
                            Next steps.Firebase provides a number of ways to sign users into your application, from anonymous users, password authentication, phone authentication and using OAuth/social providers.
            </p>
          </div>
        </div>
        <div className="grid py-8 sm:grid-cols-4">
          <div className="mb-4 sm:mb-0">
            
          </div>
          <div className="sm:col-span-3 lg:col-span-2">
            <div className="mb-3">
              <h2
                href="/"
                aria-label="Article"
                className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
              >
                <p className="text-3xl font-bold leading-none sm:text-4xl xl:text-4xl">
                 How does the private route work?
                </p>
              </h2>
            </div>
            <p className="text-gray-700">
            The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If we are authenticated (Logged in)
            </p>
          </div>
        </div>
        <div className="grid py-8 sm:grid-cols-4">
          <div className="mb-4 sm:mb-0">
            
          </div>
          <div className="sm:col-span-3 lg:col-span-2">
            <div className="mb-3">
              <h2
                href="/"
                aria-label="Article"
                className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
              >
                <p className="text-3xl font-bold leading-none sm:text-4xl xl:text-4xl">
                   What is Node? How does Node work?
                </p>
              </h2>
            </div>
            <p className="text-gray-700">
             Node. js is a JavaScript runtime environment that achieves low latency and high throughput by taking a “non-blocking” approach to serving requests. In other words, Node. js wastes no time or resources on waiting for I/O requests to return.It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.
            </p>
          </div>
        </div>
      </div>
     
    </div>
    );
};

export default Blog;