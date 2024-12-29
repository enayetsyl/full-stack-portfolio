import Form from "@/components/Form";
import Social from "@/components/Social";


const Contact = () => {
  return (
    <div className="xl:pl-[270px]">
      <div className="container px-4 mx-auto max-w-3xl py-12">
        <h2 className="text-3xl sm:text-[40px] mb-4">{`Let's Talk`}</h2>
        <p className="font-extralight text-gray-400 mb-8">
          {` If you'd like to talk about a potential project or just say hi, send
          me a message or email me at`}{' '}
          <span className="text-white font-medium">enayetflweb@gmail.com</span>!
        </p>
        <Form />
        <Social center={true} marginTop={true} />
      </div>
      <div className="relative border-b custom_border w-full"></div>
    </div>
  );
};

export default Contact;