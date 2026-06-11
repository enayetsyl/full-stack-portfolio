/* eslint-disable react/no-unescaped-entities */
import Button from '@/components/Button';
import Image from 'next/image';

const About = () => {
  const buttonData = {
    link: '/contact',
    text: "Let's Talk",
  };

  return (
    <div className="xl:pl-[270px]">
      <div className="container px-4 mx-auto max-w-3xl">
        <div className="py-12">
          <h2 className="text-3xl sm:text-[40px] mb-3">About Me</h2>
          <p className="font-light text-[17px]">
            I'm a full-stack developer who helps small service businesses
            capture more of the customers they're already paying to attract. I
            build AI phone receptionists, missed-call text-back systems, booking
            and reminder automations, and simple business websites — then keep
            them running so you don't have to think about them.
          </p>
          {/* <div
            className="w-full h-[550px] rounded-xl bg-no-repeat bg-top my-12 overflow-hidden"
            style={{
              backgroundImage: `url('https://res.cloudinary.com/deqyxkw0y/image/upload/v1735383179/Md_Enayetur_Rahman_Photo_admfn0.png')`,
            }}
          ></div> */}
          <div className="max-w-[400px] h-auto mx-auto">
            <Image
              width={400}
              height={400}
              src={
                'https://res.cloudinary.com/deqyxkw0y/image/upload/v1735383179/Md_Enayetur_Rahman_Photo_admfn0.png'
              }
              alt="own"
              className="w-full rounded-xl object-top object-cover max-h-[550px] my-12"
            />{' '}
          </div>
          <p className="text-xl text-justify opacity-90 mb-8">
            I’m Md Enayetur Rahman, a full-stack developer with 2+ years of
            professional experience building production applications. My path
            into tech is unusual: I came from a chartered accountancy
            background, taught myself development, and within a year went from
            beginner to a permanent developer role — and then to second team
            lead.
            <br />
            <br />
            Since April 2024 I’ve worked full-time at a software company
            building real products for US-based clients: AI voice and automation
            systems, video-generation pipelines, real-time applications with
            WebRTC and Socket.io, and integrations across n8n, Make.com,
            Deepgram, and the GPT API. My core stack is Next.js, Node.js,
            PostgreSQL, and MongoDB. I’ve collaborated in multinational teams
            across India, Pakistan, and Bangladesh and mentored junior
            developers along the way.
            <br />
            <br />
            My accounting background means I think about your business the way
            you do — in revenue, costs, and missed opportunities, not in
            technical features. When I propose an automation, it’s because the
            numbers make sense for you.
            <br />
            <br />
            Beyond work, I volunteer as principal of a primary school, leading
            12 teachers and 5 administrators — which keeps my communication and
            management skills sharp. I contribute to charitable initiatives like
            winter clothing distribution and medical fundraisers. When I’m not
            working, I’m with my family — two kids, parents, and siblings —
            enjoying outdoor trips and long conversations. Faith, strong
            relationships, and continuous learning shape everything I do.
          </p>
          <Button data={buttonData} />
        </div>
      </div>
      <div className="relative border-b custom_border w-full"></div>
    </div>
  );
};

export default About;
