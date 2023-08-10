import { useEffect, useRef } from "react";
import {motion } from "framer-motion";

const TestCase = () => {

  const inputRef:any = useRef(null);

  useEffect(()=>{
    inputRef.current.value = '[1,2,3,4,5]'
  },[])


  return (
    <motion.div
    initial={{x:200}}
    animate={{x:0}}
    transition={{ duration: 0.5 }}
    className="px-1">
      <>
        {/*Tabs navigation*/}
        <ul
          className="mb-5 flex list-none flex-row flex-wrap border-b-0 pl-0"
          role="tablist"
          data-te-nav-ref=""
        >
          <li role="presentation">
            <a
              href="#tabs-home"
              className="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[te-nav-active]:border-dark1 data-[te-nav-active]:text-dark1 dark:data-[te-nav-active]:text-primary dark:data-[te-nav-active]:border-primary dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400"
              data-te-toggle="pill"
              data-te-target="#tabs-home"
              data-te-nav-active=""
              role="tab"
              aria-controls="tabs-home"
              aria-selected="true"
            >
              Testcase
            </a>
          </li>
          <li role="presentation">
            <a
              href="#tabs-profile"
              className="focus:border-transparen my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400"
              data-te-toggle="pill"
              data-te-target="#tabs-profile"
              role="tab"
              aria-controls="tabs-profile"
              aria-selected="false"
            >
              Result
            </a>
          </li>
        </ul>
        {/*Tabs content*/}
        <div className="mb-6">
          <div
            className="hidden opacity-100 transition-opacity duration-150 ease-linear data-[te-tab-active]:block px-2"
            id="tabs-home"
            role="tabpanel"
            aria-labelledby="tabs-home-tab"
            data-te-tab-active=""
          >
            <h1 className="dark:text-white m-1 text-sm font-semibold">Example Testcase</h1>
            <input placeholder="Enter Testcase" className='border-none w-full h-12 my-1 p-3 bg-black font-bold dark:bg-dark5 bg-opacity-10 text-gray-600 dark:text-gray-200 rounded-lg text-sm' ref={inputRef} />
            <div className="flex justify-end p-2 text-black dark:text-gray-300">
              <button className="bg-dark5 bg-opacity-30  dark:bg-opacity-100 dark:hover:bg-dark4 hover:bg-slate-400 rounded-md px-4 py-2 font-semibold mx-2">Run</button>
              <button className="bg-dark5 bg-opacity-30 dark:bg-opacity-100 dark:hover:bg-dark4 hover:bg-slate-400 rounded-md px-4 py-2 font-semibold">Submit</button>
            </div>
          </div>
        </div>
      </>
    </motion.div>
  );
};

export default TestCase;
