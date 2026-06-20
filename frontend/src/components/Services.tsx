const services = [
  {
    title: '24/7 AI Voice Receptionist',
    body: 'Your phone gets answered every time, even at 9 pm on a Sunday. A natural-sounding AI receptionist answers questions, books appointments into your calendar, and texts you a summary. Callers never hit voicemail again.',
  },
  {
    title: 'Missed-Call Text-Back',
    body: "When you can't pick up, the caller instantly receives a text: 'Sorry we missed you — how can we help?' The job stays with you instead of going to the next company on Google.",
  },
  {
    title: 'Booking & Reminder Automation',
    body: 'Automatic confirmations and reminders by text and email, sent 24 hours and 2 hours before each appointment. Fewer no-shows, fewer empty slots, no manual follow-up.',
  },
  {
    title: 'Review-Request Automation',
    body: 'After each completed job or visit, your real customers automatically receive a polite request to leave a Google review. More genuine reviews, zero extra work for your staff.',
  },
  {
    title: 'Business Websites',
    body: 'A clean, fast website built to do one thing: turn visitors into phone calls and bookings. Clear services, clear contact, loads quickly on a phone.',
  },
];

const Services = () => {
  return (
    <div className="container px-4 mx-auto py-20">
      <h2 className="text-3xl font-medium mb-4 text-center">
        Services — What I Build for Small Businesses
      </h2>
      <p className="text-lg font-light opacity-75 max-w-3xl mx-auto text-center mb-12">
        I help clinics, home-service companies, and other small businesses stop
        losing calls, bookings, and time. Everything below is built, installed,
        and maintained by me — explained in plain English, no technical work
        needed from you.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
        {services.map((item, i) => {
          const { title, body } = item;

          return (
            <div className="text-left h-full" key={i}>
              <div className="w-full flex flex-col items-start gap-2 border custom_border rounded-xl p-6 md:p-8 h-full group text-white">
                <h2 className="text-2xl font-bold">{title}</h2>
                <p className="opacity-75">{body}</p>
              </div>
            </div>
          );
        })}
      </div>
      <p className="text-lg font-light opacity-75 max-w-3xl mx-auto text-center mt-12">
        Have a question about any of these? Email me at{' '}
        <a
          href="mailto:enayetflweb@gmail.com"
          className="underline hover:opacity-100"
        >
          enayetflweb@gmail.com
        </a>{' '}
        — I reply in writing within a day. No sales call needed.
      </p>
    </div>
  );
};

export default Services;
