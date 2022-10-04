import './style.scss';

function Loader() {
  return (
    <div id="loader" className="w-full h-full flex flex-col items-center justify-center">
      <div className='bg-white pt-[4rem] px-6 rounded-full shadow-2xl shadow-white border-greyPlaceholder/40 border-2 border-solid '>
        <svg>
          <g>
            <path d="M 50,100 A 1,1 0 0 1 50,0"/>
          </g>
          <g>
            <path d="M 50,75 A 1,1 0 0 0 50,-25"/>
          </g>
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#F22259" stopOpacity={1} />
              <stop offset="100%" stopColor='#0A6ABF' stopOpacity={1} />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

export default Loader;