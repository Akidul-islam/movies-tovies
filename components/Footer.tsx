'use client';
export const Footer = () => {
  return (
    <footer className='bg-blue-900 text-white p-8'>
      <div className='flex flex-col md:flex-row justify-between'>
        <div className='mb-4 md:mb-0'>
          <h2 className='text-xl font-bold'>THE MOVIE DB</h2>
          <button className='bg-blue-700 px-4 py-2 rounded mt-4'>
            JOIN THE COMMUNITY
          </button>
        </div>
        <div className='flex flex-col md:flex-row'>
          <div className='mr-8 mb-4 md:mb-0'>
            <h3 className='font-bold'>THE BASICS</h3>
            <ul>
              <li>About TMDB</li>
              <li>Contact Us</li>
              <li>Support Forums</li>
              <li>API</li>
              <li>System Status</li>
            </ul>
          </div>
          <div className='mr-8 mb-4 md:mb-0'>
            <h3 className='font-bold'>GET INVOLVED</h3>
            <ul>
              <li>Contribution Bible</li>
              <li>Add New Movie</li>
              <li>Add New TV Show</li>
            </ul>
          </div>
          <div className='mr-8 mb-4 md:mb-0'>
            <h3 className='font-bold'>COMMUNITY</h3>
            <ul>
              <li>Guidelines</li>
              <li>Discussions</li>
              <li>Leaderboard</li>
            </ul>
          </div>
          <div>
            <h3 className='font-bold'>LEGAL</h3>
            <ul>
              <li>Terms of Use</li>
              <li>API Terms of Use</li>
              <li>Privacy Policy</li>
              <li>DMCA Policy</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
