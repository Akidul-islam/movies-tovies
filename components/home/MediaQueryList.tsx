export function MediaQueryList() {
  return (
    <div>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4'>
        {[
          {
            title: 'Al Fondo Hay Sitio',
            date: 'Mar 30, 2009',
            score: 79,
            img: 'https://placehold.co/200x300?text=Al+Fondo+Hay+Sitio',
          },
          {
            title: 'Goede Tijden, Slechte Tijden',
            date: 'Oct 01, 1990',
            score: 44,
            img: 'https://placehold.co/200x300?text=Goede+Tijden,+Slechte+Tijden',
          },
          {
            title: 'Chronicles of the Sun',
            date: 'Aug 27, 2018',
            score: 77,
            img: 'https://placehold.co/200x300?text=Chronicles+of+the+Sun',
          },
          {
            title: 'Sturm der Liebe',
            date: 'Sep 26, 2005',
            score: 60,
            img: 'https://placehold.co/200x300?text=Sturm+der+Liebe',
          },
          {
            title: 'Gute Zeiten, schlechte Zeiten',
            date: 'May 11, 1992',
            score: 58,
            img: 'https://placehold.co/200x300?text=Gute+Zeiten,+schlechte+Zeiten',
          },
          {
            title: 'Strawberries with Sugar',
            date: 'Aug 30, 2003',
            score: 54,
            img: 'https://placehold.co/200x300?text=Strawberries+with+Sugar',
          },
          {
            title: 'Match of the Day',
            date: 'Aug 22, 1964',
            score: 74,
            img: 'https://placehold.co/200x300?text=Match+of+the+Day',
          },
          {
            title: 'Egoli: Place of Gold',
            date: 'Apr 06, 1992',
            score: 68,
            img: 'https://placehold.co/200x300?text=Egoli:+Place+of+Gold',
          },
          {
            title: 'Late Show with David Letterman',
            date: 'Aug 30, 1993',
            score: 63,
            img: 'https://placehold.co/200x300?text=Late+Show+with+David+Letterman',
          },
          {
            title: 'Barátok közt',
            date: 'Oct 26, 1998',
            score: 46,
            img: 'https://placehold.co/200x300?text=Barátok+közt',
          },
          {
            title: 'Late Night with Seth Meyers',
            date: 'Feb 25, 2014',
            score: 55,
            img: 'https://placehold.co/200x300?text=Late+Night+with+Seth+Meyers',
          },
          {
            title: 'Ek Mahanayak - Dr B R Ambedkar',
            date: 'Dec 17, 2019',
            score: 100,
            img: 'https://placehold.co/200x300?text=Ek+Mahanayak+-+Dr+B+R+Ambedkar',
          },
          {
            title: 'Tomorrow Is Ours',
            date: 'Jul 17, 2017',
            score: 62,
            img: 'https://placehold.co/200x300?text=Tomorrow+Is+Ours',
          },
          {
            title: 'Secret Lives',
            date: 'Jan 25, 1999',
            score: 48,
            img: 'https://placehold.co/200x300?text=Secret+Lives',
          },
          {
            title: 'Rooster Teeth Animated Adventures',
            date: 'Sep 28, 2011',
            score: 86,
            img: 'https://placehold.co/200x300?text=Rooster+Teeth+Animated+Adventures',
          },
          {
            title: 'Getroud met Rugby: Die Sepie',
            date: 'Apr 04, 2016',
            score: 60,
            img: 'https://placehold.co/200x300?text=Getroud+met+Rugby:+Die+Sepie',
          },
          {
            title: 'Big Brother',
            date: 'Jul 05, 2000',
            score: 37,
            img: 'https://placehold.co/200x300?text=Big+Brother',
          },
          {
            title: 'Plus belle la vie',
            date: 'Aug 30, 2004',
            score: 44,
            img: 'https://placehold.co/200x300?text=Plus+belle+la+vie',
          },
          {
            title: 'WWE Raw',
            date: 'Jan 11, 1993',
            score: 67,
            img: 'https://placehold.co/200x300?text=WWE+Raw',
          },
          {
            title: 'C.I.D.',
            date: 'Jan 21, 1998',
            score: 60,
            img: 'https://placehold.co/200x300?text=C.I.D.',
          },
        ].map((show) => (
          <div key={show.title} className='bg-white rounded shadow p-4'>
            <img
              src={show.img}
              alt={show.title}
              className='w-full h-48 object-cover rounded'
            />
            <div className='mt-2'>
              <div className='flex justify-between items-center'>
                <h3 className='text-lg font-bold'>{show.title}</h3>
                <span className='bg-green-500 text-white rounded-full px-2 py-1'>
                  {show.score}
                </span>
              </div>
              <p className='text-gray-600'>{show.date}</p>
            </div>
          </div>
        ))}
      </div>
      <div className='mt-8 text-center'>
        <button className='bg-blue-500 text-white py-2 px-4 rounded'>
          Load More
        </button>
      </div>
    </div>
  );
}
