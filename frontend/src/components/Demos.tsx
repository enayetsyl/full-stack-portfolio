import DemoCard, { Demo } from './DemoCard';

const demos: Demo[] = [
  {
    title: 'Missed-Call Text-Back Automation',
    description:
      "When a call goes unanswered, the caller instantly receives a text-back — so the job stays with you instead of going to the next company. At the same time, the lead lands in the owner's inbox. Runs automatically, around the clock. Built with Make.com, Twilio, and WhatsApp.",
    youtubeId: 'Y0CpWy2dCII',
  },
];

const Demos = () => {
  return (
    <div className="container px-4 mx-auto py-20">
      <h2 className="text-3xl font-medium mb-4 text-center">Demos</h2>
      <p className="text-lg font-light opacity-75 max-w-3xl mx-auto text-center mb-12">
        A quick look at the automations I build — running live, start to finish.
      </p>
      <div className="flex flex-wrap justify-center gap-8">
        {demos.map((demo, i) => (
          <div
            key={i}
            className="w-full max-w-2xl lg:w-[calc(50%_-_1rem)]"
          >
            <DemoCard demo={demo} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Demos;
