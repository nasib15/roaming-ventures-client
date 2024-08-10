/* eslint-disable react/no-unescaped-entities */
const Faq = () => {
  return (
    <div className="lg:my-24 mx-auto max-w-[90%]">
      <section id="faq" className=" text-black ">
        <div className="container flex flex-col justify-center space-y-6 px-4 py-8 mx-auto md:p-8">
          <h2 className="text-3xl font-bold mx-auto ">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            <details className="w-full border rounded-lg">
              <summary className="font-semibold px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
                How do I book a tour or activity?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 opacity-70">
                Booking a tour or activity is easy! Simply browse our website,
                select your desired tour or activity, choose your preferred date
                and time, and proceed to the checkout to complete your
                reservation securely.
              </p>
            </details>
            <details className="w-full border rounded-lg">
              <summary className="font-semibold px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
                What should I pack for my trip?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 opacity-70">
                Packing essentials vary depending on your destination and the
                nature of your trip. We recommend checking our destination
                guides for specific packing tips. Generally, items like
                comfortable clothing, appropriate footwear, sunscreen, and a
                camera are essential.
              </p>
            </details>
            <details className="w-full border rounded-lg">
              <summary className="font-semibold px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
                Are tours suitable for children and seniors?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 opacity-70">
                Many of our tours are family-friendly and suitable for all ages,
                including children and seniors. However, certain activities may
                have age or health restrictions. Please check the tour details
                or contact us for more information on age suitability.
              </p>
            </details>
            <details className="w-full border rounded-lg">
              <summary className="font-semibold px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
                What if I need to cancel or reschedule my booking?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 opacity-70">
                We understand that plans can change. Please refer to our
                cancellation policy outlined on each tour or activity page for
                specific details. If you need to cancel or reschedule, simply
                contact our customer service team, and we'll be happy to assist
                you.
              </p>
            </details>
            <details className="w-full border rounded-lg">
              <summary className="font-semibold px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
                Do you offer group discounts?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 opacity-70">
                Yes, we offer group discounts for certain tours and activities.
                Group size requirements and discounts vary by tour, so be sure
                to check the tour details for any applicable group rates. For
                large group bookings, please contact us directly for
                personalized assistance.
              </p>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faq;
