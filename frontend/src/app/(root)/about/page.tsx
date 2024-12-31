/* eslint-disable react/no-unescaped-entities */
import Button from '@/components/Button';
import own from '../../../public/assets/own-3.jpg';


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
          <img
            src={'https://res.cloudinary.com/deqyxkw0y/image/upload/v1735383179/Md_Enayetur_Rahman_Photo_admfn0.png'}
            alt="own"
            className="w-full rounded-xl object-cover max-h-[450px] my-12"
          />
          <p className="font-extralight opacity-50 mb-8">
            I am a passionate React developer, dedicated to shaping the digital
            world through innovative and user-centric web applications. With a
            strong command of JavaScript, HTML, and CSS, I have embarked on an
            exciting journey of transforming design visions into seamless,
            interactive experiences on the web.
            <br />
            <br />
            My work revolves around harnessing the power of React, a
            cutting-edge JavaScript library, to build robust and efficient
            front-end solutions. I thrive on tackling complex challenges,
            whether it's optimizing performance, enhancing user interfaces, or
            integrating third-party APIs. Each project I undertake is an
            opportunity to explore new possibilities and refine my skills in the
            ever-evolving world of web development.
            <br />
            <br />
            In addition to my technical prowess, I'm a problem solver and a
            creative thinker. I take pride in my ability to collaborate
            effectively with cross-functional teams, ensuring that the end
            product not only meets but exceeds client and user expectations.
            User experience is at the forefront of my work, and I constantly
            strive to deliver intuitive and visually appealing applications.
            <br />
            <br />
            The fast-paced nature of the tech industry is a constant source of
            motivation for me. I am always eager to learn about emerging
            technologies and best practices to stay ahead of the curve. My goal
            as a React developer is not just to write code but to craft digital
            experiences that leave a lasting impression on users.
            <br />
            <br />
            In a world where digital presence is paramount, I see myself as a
            catalyst for change, creating web applications that not only meet
            the functional needs of businesses but also elevate the overall
            online experience. I am excited to continue my journey as a React
            developer, pushing boundaries and making a meaningful impact in the
            digital realm.
          </p>
          <Button data={buttonData} />
        </div>
      </div>
      <div className="relative border-b custom_border w-full"></div>
    </div>
  );
};

export default About;