function App() {
  return (
    <div className="min-h-screen bg-[#f7f5f2] text-black">

      {/* Navbar */}
      <nav className="fixed left-0 top-0 z-50 w-full px-4 pt-4">
        <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full bg-black px-6 py-4 text-white">

          <h1 className="text-xl font-black">
            THREAD<span className="text-orange-400">HUB</span>
          </h1>

          <div className="hidden gap-8 md:flex">
            <a href="#home" className="text-sm hover:text-orange-400">
              Home
            </a>

            <a href="#collections" className="text-sm hover:text-orange-400">
              Collections
            </a>

            <a href="#about" className="text-sm hover:text-orange-400">
              About
            </a>

            <a
              href="#contact"
              className="rounded-full bg-orange-500 px-5 py-2 text-sm font-bold text-black"
            >
              Contact Us
            </a>
          </div>

        </div>
      </nav>


      {/* Hero */}
      <section
        id="home"
        className="relative flex min-h-screen items-center overflow-hidden bg-black text-white"
      >

        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-50"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=2000&q=80')",
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" />


        {/* Content */}
        <div className="relative mx-auto w-full max-w-7xl px-6 pt-20">

          <p className="mb-6 text-sm font-bold uppercase tracking-[0.3em] text-orange-400">
            Wholesale Fashion • Pan India
          </p>

          <h2 className="max-w-5xl text-5xl font-black leading-none tracking-tight sm:text-7xl lg:text-8xl">

            Fashion that
            <br />

            <span className="text-orange-400">
              moves business.
            </span>

          </h2>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-white/70">
            Premium wholesale clothing for retailers, boutiques,
            resellers and online businesses.
          </p>


          <div className="mt-10 flex flex-col gap-4 sm:flex-row">

            <a
              href="#collections"
              className="rounded-full bg-orange-500 px-7 py-4 text-center font-bold text-black transition duration-300 hover:scale-105 hover:bg-orange-400"
            >
              Explore Collection →
            </a>

            <a
              href="#contact"
              className="rounded-full border border-white/30 px-7 py-4 text-center font-bold transition duration-300 hover:bg-white hover:text-black"
            >
              Become a Buyer
            </a>

          </div>


          {/* Stats */}

          <div className="mt-20 grid max-w-xl grid-cols-3 border-t border-white/20 pt-6">

            <div>
              <p className="text-3xl font-black">
                10K+
              </p>
              <p className="text-sm text-white/50">
                Products
              </p>
            </div>

            <div>
              <p className="text-3xl font-black">
                2K+
              </p>
              <p className="text-sm text-white/50">
                Retailers
              </p>
            </div>

            <div>
              <p className="text-3xl font-black">
                25+
              </p>
              <p className="text-sm text-white/50">
                Cities
              </p>
            </div>

          </div>

        </div>

      </section>
      {/* Collections */}
<section
  id="collections"
  className="bg-[#f7f5f2] px-6 py-24 sm:py-32"
>
  <div className="mx-auto max-w-7xl">

    {/* Section heading */}
    <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">

      <div>
        <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-orange-500">
          Our Collections
        </p>

        <h2 className="text-4xl font-black tracking-tight sm:text-6xl">
          Fashion for every
          <br />
          kind of customer.
        </h2>
      </div>

      <p className="max-w-md text-gray-500">
        Discover our latest wholesale clothing collections
        designed for retailers, boutiques and resellers.
      </p>

    </div>


    {/* Collection cards */}
    <div className="grid gap-6 md:grid-cols-3">

      {/* Men's */}
      <div className="group relative h-[500px] overflow-hidden rounded-[2rem]">

        <img
          src="https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?auto=format&fit=crop&w=1000&q=80"
          alt="Men's clothing"
          className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

        <div className="absolute bottom-0 p-8 text-white">

          <p className="text-sm text-orange-400">
            COLLECTION 01
          </p>

          <h3 className="mt-2 text-3xl font-black">
            Men's Wear
          </h3>

          <p className="mt-2 text-sm text-white/60">
            Shirts, T-shirts, jeans and more.
          </p>

          <button className="mt-6 font-bold transition group-hover:text-orange-400">
            Explore Collection →
          </button>

        </div>

      </div>


      {/* Women's */}
      <div className="group relative h-[500px] overflow-hidden rounded-[2rem]">

        <img
          src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1000&q=80"
          alt="Women's clothing"
          className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

        <div className="absolute bottom-0 p-8 text-white">

          <p className="text-sm text-orange-400">
            COLLECTION 02
          </p>

          <h3 className="mt-2 text-3xl font-black">
            Women's Wear
          </h3>

          <p className="mt-2 text-sm text-white/60">
            Dresses, tops, ethnic wear and more.
          </p>

          <button className="mt-6 font-bold transition group-hover:text-orange-400">
            Explore Collection →
          </button>

        </div>

      </div>


      {/* Kids */}
      <div className="group relative h-[500px] overflow-hidden rounded-[2rem]">

        <img
          src="https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=1000&q=80"
          alt="Kids clothing"
          className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

        <div className="absolute bottom-0 p-8 text-white">

          <p className="text-sm text-orange-400">
            COLLECTION 03
          </p>

          <h3 className="mt-2 text-3xl font-black">
            Kids Wear
          </h3>

          <p className="mt-2 text-sm text-white/60">
            Comfortable and trendy kids fashion.
          </p>

          <button className="mt-6 font-bold transition group-hover:text-orange-400">
            Explore Collection →
          </button>

        </div>

      </div>

    </div>

  </div>
</section>
{/* Why Choose Us */}
<section
  id="about"
  className="bg-black px-6 py-24 text-white sm:py-32"
>
  <div className="mx-auto max-w-7xl">

    {/* Heading */}
    <div className="max-w-3xl">

      <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-orange-400">
        Why Choose Us
      </p>

      <h2 className="text-4xl font-black leading-tight sm:text-6xl">
        More than clothes.
        <br />
        We build businesses.
      </h2>

      <p className="mt-6 max-w-2xl text-base leading-7 text-white/50">
        We help retailers and resellers find quality fashion,
        competitive prices and reliable wholesale supply.
      </p>

    </div>


    {/* Feature cards */}
    <div className="mt-16 grid gap-6 md:grid-cols-3">

      {/* Card 1 */}
      <div className="group rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 transition duration-500 hover:-translate-y-3 hover:bg-white/[0.08]">

        <div className="flex items-center justify-between">

          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500 text-2xl">
            ₹
          </div>

          <span className="text-sm font-bold text-white/20">
            01
          </span>

        </div>

        <h3 className="mt-10 text-2xl font-black">
          Better Prices
        </h3>

        <p className="mt-4 leading-7 text-white/45">
          Wholesale pricing designed to help you maintain
          healthy margins and grow your clothing business.
        </p>

        <div className="mt-8 h-1 w-10 bg-orange-500 transition-all duration-500 group-hover:w-20" />

      </div>


      {/* Card 2 */}
      <div className="group rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 transition duration-500 hover:-translate-y-3 hover:bg-white/[0.08]">

        <div className="flex items-center justify-between">

          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500 text-2xl">
            🚚
          </div>

          <span className="text-sm font-bold text-white/20">
            02
          </span>

        </div>

        <h3 className="mt-10 text-2xl font-black">
          Fast Delivery
        </h3>

        <p className="mt-4 leading-7 text-white/45">
          Get your wholesale orders delivered efficiently
          so your inventory keeps moving.
        </p>

        <div className="mt-8 h-1 w-10 bg-orange-500 transition-all duration-500 group-hover:w-20" />

      </div>


      {/* Card 3 */}
      <div className="group rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 transition duration-500 hover:-translate-y-3 hover:bg-white/[0.08]">

        <div className="flex items-center justify-between">

          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500 text-2xl">
            ✓
          </div>

          <span className="text-sm font-bold text-white/20">
            03
          </span>

        </div>

        <h3 className="mt-10 text-2xl font-black">
          Quality First
        </h3>

        <p className="mt-4 leading-7 text-white/45">
          Carefully selected styles with a focus on quality,
          comfort and modern fashion.
        </p>

        <div className="mt-8 h-1 w-10 bg-orange-500 transition-all duration-500 group-hover:w-20" />

      </div>

    </div>

  </div>
</section>

    </div>
  )
}

export default App