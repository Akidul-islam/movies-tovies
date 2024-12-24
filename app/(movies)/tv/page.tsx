export default function Tv() {
  return (
    <div>
      <header className='bg-white py-6'>
        <div className='container mx-auto flex justify-between items-center px-4'>
          <h1 className='text-3xl font-bold'>RODSHOP</h1>
          <nav className='hidden md:flex space-x-4'>
            <a href='#' className='text-gray-600 hover:text-orange-500'>
              Home
            </a>
            <a href='#' className='text-gray-600 hover:text-orange-500'>
              About
            </a>
            <a href='#' className='text-gray-600 hover:text-orange-500'>
              Services
            </a>
            <a href='#' className='text-gray-600 hover:text-orange-500'>
              Portfolio
            </a>
            <a href='#' className='text-gray-600 hover:text-orange-500'>
              Team
            </a>
            <a href='#' className='text-gray-600 hover:text-orange-500'>
              Contact
            </a>
            <a href='#' className='text-white bg-orange-500 px-4 py-2 rounded'>
              Get Started
            </a>
          </nav>
          <div className='md:hidden'>
            <button
              id='menu-btn'
              className='text-gray-600 hover:text-orange-500'
            >
              <i className='fas fa-bars'></i>
            </button>
          </div>
        </div>
        <nav id='mobile-menu' className='hidden md:hidden'>
          <a
            href='#'
            className='block text-gray-600 hover:text-orange-500 py-2'
          >
            Home
          </a>
          <a
            href='#'
            className='block text-gray-600 hover:text-orange-500 py-2'
          >
            About
          </a>
          <a
            href='#'
            className='block text-gray-600 hover:text-orange-500 py-2'
          >
            Services
          </a>
          <a
            href='#'
            className='block text-gray-600 hover:text-orange-500 py-2'
          >
            Portfolio
          </a>
          <a
            href='#'
            className='block text-gray-600 hover:text-orange-500 py-2'
          >
            Team
          </a>
          <a
            href='#'
            className='block text-gray-600 hover:text-orange-500 py-2'
          >
            Contact
          </a>
          <a
            href='#'
            className='block text-white bg-orange-500 px-4 py-2 rounded'
          >
            Get Started
          </a>
        </nav>
      </header>

      <section className='bg-orange-50 py-20'>
        <div className='container mx-auto flex flex-col md:flex-row items-center px-4'>
          <div className='md:w-1/2'>
            <h2 className='text-4xl font-bold mb-4'>
              Bettrer digital experience with Ninestars
            </h2>
            <p className='text-gray-600 mb-6'>
              We are team of talented designers making websites with Bootstrap
            </p>
            <a href='#' className='text-white bg-orange-500 px-6 py-3 rounded'>
              Get Started
            </a>
          </div>
          <div className='md:w-1/2 mt-8 md:mt-0'>
            <img
              src='https://placehold.co/600x400'
              alt='Illustration of a person sitting next to a rocket'
            />
          </div>
        </div>
      </section>

      <section className='py-20'>
        <div className='container mx-auto flex flex-col md:flex-row items-center px-4'>
          <div className='md:w-1/2 mb-8 md:mb-0'>
            <img
              src='https://placehold.co/600x400'
              alt='Illustration of two people working on a computer'
            />
          </div>
          <div className='md:w-1/2'>
            <h2 className='text-3xl font-bold mb-4'>
              Voluptatem dignissimos provident quasi
            </h2>
            <p className='text-gray-600 mb-6'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className='flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4'>
              <div>
                <i className='fas fa-check-circle text-orange-500 text-2xl'></i>
                <h3 className='text-xl font-bold'>Corporis voluptates sit</h3>
                <p className='text-gray-600'>
                  Consequuntur sunt aut quasi enim aliquam quae harum pariatur
                  laboris nisi ut aliquip
                </p>
              </div>
              <div>
                <i className='fas fa-check-circle text-orange-500 text-2xl'></i>
                <h3 className='text-xl font-bold'>Ullamco laboris nisi</h3>
                <p className='text-gray-600'>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='bg-orange-50 py-20'>
        <div className='container mx-auto text-center px-4'>
          <h2 className='text-3xl font-bold mb-4'>Services</h2>
          <p className='text-gray-600 mb-12'>
            Check out the great services we offer
          </p>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            <div className='bg-white p-6 rounded shadow'>
              <i className='fas fa-heart text-orange-500 text-4xl mb-4'></i>
              <h3 className='text-xl font-bold mb-2'>Lorem Ipsum</h3>
              <p className='text-gray-600'>
                Voluptatum deleniti atque corrupti quos dolores et quas
                molestias excepturi sint occaecati cupiditate non provident
              </p>
            </div>
            <div className='bg-white p-6 rounded shadow'>
              <i className='fas fa-file-alt text-orange-500 text-4xl mb-4'></i>
              <h3 className='text-xl font-bold mb-2'>Sed ut perspiciatis</h3>
              <p className='text-gray-600'>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur
              </p>
            </div>
            <div className='bg-white p-6 rounded shadow'>
              <i className='fas fa-tachometer-alt text-orange-500 text-4xl mb-4'></i>
              <h3 className='text-xl font-bold mb-2'>Magni Dolores</h3>
              <p className='text-gray-600'>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum
              </p>
            </div>
            <div className='bg-white p-6 rounded shadow'>
              <i className='fas fa-globe text-orange-500 text-4xl mb-4'></i>
              <h3 className='text-xl font-bold mb-2'>Nemo Enim</h3>
              <p className='text-gray-600'>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className='py-20'>
        <div className='container mx-auto text-center px-4'>
          <h2 className='text-3xl font-bold mb-4'>Portfolio</h2>
          <p className='text-gray-600 mb-12'>
            Check out our beautifull portfolio
          </p>
          <div className='flex justify-center space-x-4 mb-8'>
            <a href='#' className='text-gray-600 hover:text-orange-500'>
              All
            </a>
            <a href='#' className='text-gray-600 hover:text-orange-500'>
              App
            </a>
            <a href='#' className='text-gray-600 hover:text-orange-500'>
              Card
            </a>
            <a href='#' className='text-gray-600 hover:text-orange-500'>
              Web
            </a>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            <img
              src='https://placehold.co/400x300'
              alt='Product image 1'
              className='rounded shadow'
            />
            <img
              src='https://placehold.co/400x300'
              alt='Product image 2'
              className='rounded shadow'
            />
            <img
              src='https://placehold.co/400x300'
              alt='Product image 3'
              className='rounded shadow'
            />
            <img
              src='https://placehold.co/400x300'
              alt='Product image 4'
              className='rounded shadow'
            />
            <img
              src='https://placehold.co/400x300'
              alt='Product image 5'
              className='rounded shadow'
            />
            <img
              src='https://placehold.co/400x300'
              alt='Product image 6'
              className='rounded shadow'
            />
            <img
              src='https://placehold.co/400x300'
              alt='Product image 7'
              className='rounded shadow'
            />
            <img
              src='https://placehold.co/400x300'
              alt='Product image 8'
              className='rounded shadow'
            />
            <img
              src='https://placehold.co/400x300'
              alt='Product image 9'
              className='rounded shadow'
            />
          </div>
        </div>
      </section>

      <section className='bg-orange-50 py-20'>
        <div className='container mx-auto px-4'>
          <h2 className='text-3xl font-bold mb-4 text-center'>F.A.Q</h2>
          <p className='text-gray-600 mb-12 text-center'>
            Frequently Asked Questions
          </p>
          <ul className='space-y-4'>
            <li className='text-gray-600'>
              <i className='fas fa-chevron-right text-orange-500'></i> Non
              consectetur a erat nam at lectus urna duis?
            </li>
            <li className='text-gray-600'>
              <i className='fas fa-chevron-right text-orange-500'></i> Feugiat
              scelerisque varius morbi enim nunc faucibus a pellentesque?
            </li>
            <li className='text-gray-600'>
              <i className='fas fa-chevron-right text-orange-500'></i> Dolor sit
              amet consectetur adipiscing elit pellentesque habitant morbi?
            </li>
            <li className='text-gray-600'>
              <i className='fas fa-chevron-right text-orange-500'></i> Ac odio
              tempor orci dapibus. Aliquam eleifend mi in nulla?
            </li>
            <li className='text-gray-600'>
              <i className='fas fa-chevron-right text-orange-500'></i> Tempus
              quam pellentesque nec nam aliquam sem et tortor consequat?
            </li>
            <li className='text-gray-600'>
              <i className='fas fa-chevron-right text-orange-500'></i> Tortor
              vitae purus faucibus ornare. Varius vel pharetra vel turpis nunc
              eget lorem dolor?
            </li>
          </ul>
        </div>
      </section>

      <section className='py-20'>
        <div className='container mx-auto text-center px-4'>
          <h2 className='text-3xl font-bold mb-4'>Team</h2>
          <p className='text-gray-600 mb-12'>Our team is always here to help</p>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            <div className='text-center'>
              <img
                src='https://placehold.co/200x200'
                alt='Team member 1'
                className='rounded-full mx-auto mb-4'
              />
              <h3 className='text-xl font-bold'>John Doe</h3>
              <p className='text-gray-600'>CEO</p>
            </div>
            <div className='text-center'>
              <img
                src='https://placehold.co/200x200'
                alt='Team member 2'
                className='rounded-full mx-auto mb-4'
              />
              <h3 className='text-xl font-bold'>Jane Smith</h3>
              <p className='text-gray-600'>Designer</p>
            </div>
            <div className='text-center'>
              <img
                src='https://placehold.co/200x200'
                alt='Team member 3'
                className='rounded-full mx-auto mb-4'
              />
              <h3 className='text-xl font-bold'>Mike Johnson</h3>
              <p className='text-gray-600'>Developer</p>
            </div>
            <div className='text-center'>
              <img
                src='https://placehold.co/200x200'
                alt='Team member 4'
                className='rounded-full mx-auto mb-4'
              />
              <h3 className='text-xl font-bold'>Emily Davis</h3>
              <p className='text-gray-600'>Manager</p>
            </div>
          </div>
        </div>
      </section>

      <section className='bg-orange-50 py-20'>
        <div className='container mx-auto text-center px-4'>
          <h2 className='text-3xl font-bold mb-4'>Clients</h2>
          <p className='text-gray-600 mb-12'>They trusted us</p>
          <div className='flex flex-wrap justify-center space-x-8'>
            <img
              src='https://placehold.co/100x50'
              alt='Client logo 1'
              className='mb-4'
            />
            <img
              src='https://placehold.co/100x50'
              alt='Client logo 2'
              className='mb-4'
            />
            <img
              src='https://placehold.co/100x50'
              alt='Client logo 3'
              className='mb-4'
            />
            <img
              src='https://placehold.co/100x50'
              alt='Client logo 4'
              className='mb-4'
            />
            <img
              src='https://placehold.co/100x50'
              alt='Client logo 5'
              className='mb-4'
            />
            <img
              src='https://placehold.co/100x50'
              alt='Client logo 6'
              className='mb-4'
            />
          </div>
        </div>
      </section>

      <section className='py-20'>
        <div className='container mx-auto px-4'>
          <h2 className='text-3xl font-bold mb-4 text-center'>Contact Us</h2>
          <p className='text-gray-600 mb-12 text-center'>
            Contact us the get started
          </p>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            <div className='bg-white p-6 rounded shadow'>
              <h3 className='text-xl font-bold mb-4'>Location:</h3>
              <p className='text-gray-600 mb-4'>
                A108 Adam Street, New York, NY 535022
              </p>
              <h3 className='text-xl font-bold mb-4'>Email:</h3>
              <p className='text-gray-600 mb-4'>info@example.com</p>
              <h3 className='text-xl font-bold mb-4'>Call:</h3>
              <p className='text-gray-600'>+1 5589 55488 55</p>
            </div>
            <div className='bg-white p-6 rounded shadow'>
              <form>
                <div className='mb-4'>
                  <input
                    type='text'
                    placeholder='Your Name'
                    className='w-full p-3 border rounded'
                  />
                </div>
                <div className='mb-4'>
                  <input
                    type='email'
                    placeholder='Your Email'
                    className='w-full p-3 border rounded'
                  />
                </div>
                <div className='mb-4'>
                  <textarea
                    placeholder='Message'
                    className='w-full p-3 border rounded'
                  ></textarea>
                </div>
                <button
                  type='submit'
                  className='text-white bg-orange-500 px-6 py-3 rounded'
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className='bg-white py-6'>
        <div className='container mx-auto px-4'>
          <div className='flex flex-col md:flex-row justify-between items-center mb-6'>
            <h2 className='text-2xl font-bold mb-4 md:mb-0'>RODSHOP</h2>
            <div className='flex flex-wrap justify-center space-x-4'>
              <a href='#' className='text-gray-600 hover:text-orange-500'>
                Home
              </a>
              <a href='#' className='text-gray-600 hover:text-orange-500'>
                About
              </a>
              <a href='#' className='text-gray-600 hover:text-orange-500'>
                Services
              </a>
              <a href='#' className='text-gray-600 hover:text-orange-500'>
                Portfolio
              </a>
              <a href='#' className='text-gray-600 hover:text-orange-500'>
                Team
              </a>
              <a href='#' className='text-gray-600 hover:text-orange-500'>
                Contact
              </a>
            </div>
          </div>
          <div className='flex flex-col md:flex-row justify-between items-center'>
            <p className='text-gray-600 mb-4 md:mb-0'>
              &copy; Copyright Ninestars. All Rights Reserved
            </p>
            <p className='text-gray-600'>Designed by BootstrapMade</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
