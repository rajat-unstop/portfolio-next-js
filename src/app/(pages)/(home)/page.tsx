'use client';

import Link from 'next/link';
import codeSnippet from '../../../../public/code-snippet.svg';
import Image from 'next/image';
import './home.css';

const Home = () => {
  return (
    <div className="h-full w-full flex items-center justify-center gap-16">
      <div className="left">
        <p className="text-lg text-slate-500">{'Hi all, I am'}</p>
        <h1 className="text-6xl text-slate-50">{'Rajat Dash'}</h1>
        <h3 className="text-indigo-500 text-4xl">{'> Front-end Developer'}</h3>

        <div className="subInfo mt-18">
          <p className="text-lg text-slate-500">{'// find my profile on Github'}</p>
          <p className="text-white">
            <span className="text-indigo-500">const</span>{' '}
            <span className="text-teal-400">githubLink</span> ={' '}
            <Link
              href="https://github.com/DARKPROGRAMMER16"
              target="_blank"
              className="text-rose-300 underline"
            >
              {'"https://github.com/DARKPROGRAMMER16"'}
            </Link>
          </p>
        </div>
      </div>
      <div className="right h-full w-3xl flex flex-col justify-center items-center gap-2 overflow-y-hidden">
        <div className="w-xl rounded-2xl opacity-20">
          <Image src={codeSnippet} alt="code snippet" />
        </div>
        <div className="w-xl rounded-2xl opacity-65">
          <Image src={codeSnippet} alt="code snippet" />
        </div>
        <div className="w-xl rounded-2xl">
          <Image src={codeSnippet} alt="code snippet" />
        </div>
        <div className="w-xl rounded-2xl opacity-65">
          <Image src={codeSnippet} alt="code snippet" />
        </div>
        <div className="w-xl rounded-2xl opacity-20">
          <Image src={codeSnippet} alt="code snippet" />
        </div>
      </div>
    </div>
  );
};

export default Home;
