import Card from '../card';

export default function WhatWeOffer() {
  return (
    <section className="flex items-center justify-center p-2 md:p-4 lg:p-8">
      <div className="flex-col gap-2 text-center text-zinc-700 md:gap-4 lg:max-w-5xl lg:gap-8">
        <h2 className="mb-2 text-lg font-bold md:gap-4 md:text-2xl lg:mb-8 lg:text-5xl">
          What We offer?
        </h2>
        <p>
          Explore our range of tools designed to help you succeed. Our toolkit is designed to cater
          to all your professional needs, whether you&apos;re an entrepreneur looking to grow your
          business, a job seeker aiming to create a standout CV, or a business owner needing
          professional receipts. Discover the perfect tools to enhance your productivity and achieve
          your goals.
        </p>
        <div className="mt-4 grid grid-cols-3 gap-4 lg:mt-6 lg:gap-6">
          <Card
            title="Professional CV Generator"
            description={`Craft a compelling and visually appealing resume with our Professional CV Generator. Tailor your resume to highlight your unique skills, experience, and achievements, ensuring that you stand out to potential employers. Our easy-to-use interface allows you to choose from a variety of templates and customize them to suit your professional style. Whether you're just starting your career or looking to make a move, our CV generator helps you present your best self.`}
            navigate="/intro"
            navigateText="Craft Your Perfect CV"
          />
          <Card
            title="Professional CV Generator"
            description={`Craft a compelling and visually appealing resume with our Professional CV Generator. Tailor your resume to highlight your unique skills, experience, and achievements, ensuring that you stand out to potential employers. Our easy-to-use interface allows you to choose from a variety of templates and customize them to suit your professional style. Whether you're just starting your career or looking to make a move, our CV generator helps you present your best self.`}
            navigate="/intro"
            navigateText="Craft Your Perfect CV"
          />
          <Card
            title="Professional CV Generator"
            description={`Craft a compelling and visually appealing resume with our Professional CV Generator. Tailor your resume to highlight your unique skills, experience, and achievements, ensuring that you stand out to potential employers. Our easy-to-use interface allows you to choose from a variety of templates and customize them to suit your professional style. Whether you're just starting your career or looking to make a move, our CV generator helps you present your best self.`}
            navigate="/intro"
            navigateText="Craft Your Perfect CV"
          />
        </div>
      </div>
    </section>
  );
}
