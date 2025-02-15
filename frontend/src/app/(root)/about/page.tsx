/* eslint-disable react/no-unescaped-entities */
import Button from '@/components/Button';

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
            I'm a passionate and innovative Frontend developer with a flair for
            creating exceptional user experiences. I love to do vercetile work
            and give the design and minimal outlook throught my code.
          </p>
          <div
            className="w-full h-[550px] rounded-xl bg-no-repeat bg-top my-12"
            style={{
              backgroundImage: `url('https://res.cloudinary.com/deqyxkw0y/image/upload/v1735383179/Md_Enayetur_Rahman_Photo_admfn0.png')`,
            }}
          ></div>
          {/* <img
            src={
              'https://res.cloudinary.com/deqyxkw0y/image/upload/v1735383179/Md_Enayetur_Rahman_Photo_admfn0.png'
            }
            alt="own"
            className="w-full rounded-xl object-top max-h-[550px] my-12"
          /> */}
          <p className="text-xl text-justify opacity-90 mb-8">
            I’m Md Enayetur Rahman, a Full-Stack Developer with a passion for
            building scalable, high-performance applications that make an
            impact. My journey in tech is unique—I transitioned from having no
            formal technical background to becoming a Full-Stack Developer
            within a year, securing an internship that turned into a permanent
            role, and quickly stepping up as a second team lead.
            <br />
            <br />
            I specialize in Next.js, Node.js, PostgreSQL, MongoDB, WebRTC, and
            automation tools like n8n, with hands-on experience in AI-powered
            integrations, scalable system design, and real-time applications.
            I’ve worked in multinational teams across India, Pakistan, and
            Bangladesh, collaborating on USA-based projects and mentoring junior
            developers to drive team success.
            <br />
            <br />
            Beyond coding, I love solving problems—whether in tech or society. I
            actively reflect on social challenges, brainstorm solutions, and
            contribute through charitable initiatives such as winter clothing
            distribution and medical fundraisers. I also serve as a volunteer
            principal at a kindergarten school, leading 12 teachers and 5
            administrators, which has strengthened my leadership, communication,
            and management skills.
            <br />
            <br />
            While balancing a full-time job, I continuously push my limits by
            learning data structures, algorithms, and system design to deepen my
            technical understanding. I believe in constant growth, discipline,
            and making a meaningful impact—both in technology and beyond.
            <br />
            <br />
            When I’m not coding, I spend time with my family, two kids, parents,
            and siblings, enjoying outdoor trips, home feasts, and deep
            conversations. I value strong relationships, faith, and continuous
            learning, all of which shape who I am as a person and a
            professional.
          </p>
          <Button data={buttonData} />
        </div>
      </div>
      <div className="relative border-b custom_border w-full"></div>
    </div>
  );
};

export default About;
