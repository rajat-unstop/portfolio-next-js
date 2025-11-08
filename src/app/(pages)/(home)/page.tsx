'use client';
import Link from 'next/link';
import Image from 'next/image';
import codeSnippet from '../../../../public/code-snippet.svg';
import './home.css';

const GITHUB_LINK = 'https://github.com/DARKPROGRAMMER16';

const CODE_SNIPPET_OPACITY = [0.2, 0.65, 1, 0.65, 0.2];

const Home = () => {
  return (
    <div className="h-full w-full flex items-center justify-center">
      {/* Left Section - Hero Content */}
      <section className="left">
        <p className="text-lg text-slate-500">Hi all, I am</p>
        <h1 className="text-6xl text-slate-50">Rajat Dash</h1>
        <h3 className="text-indigo-500 text-4xl">&gt; Front-end Developer</h3>

        <div className="subInfo mt-18">
          <p className="text-lg text-slate-500">{'// find my profile on Github'}</p>
          <p className="text-white">
            <span className="text-indigo-500">const</span>{' '}
            <span className="text-teal-400">githubLink</span> ={' '}
            <Link
              href={GITHUB_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="text-rose-300 underline hover:text-rose-400 transition-colors"
            >
              {`"${GITHUB_LINK}"`}
            </Link>
          </p>
        </div>
      </section>

      {/* Right Section - Code Snippets */}
      <section className="right h-full w-3xl flex flex-col justify-center items-center gap-2 overflow-y-hidden">
        {CODE_SNIPPET_OPACITY.map((opacity, index) => (
          <div key={index} className="w-xl rounded-2xl" style={{ opacity }}>
            <Image
              src={codeSnippet}
              alt={`Code snippet decoration ${index + 1}`}
              priority={opacity === 1}
            />
          </div>
        ))}
      </section>
    </div>
  );
};

export default Home;
