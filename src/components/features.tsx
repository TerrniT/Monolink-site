import { Feature, Description, Heading, Paragraph } from "@/components/atoms"

const Features = () => {
  return (
    <div className='mt-44 flex flex-col items-center '>
      <Description>Features</Description>
      <Heading>What makes Monolink so special ?</Heading>
      <Paragraph>
        There are plenty of benefits when using Monolink. We tried to list some of them out.
      </Paragraph>

      <div className='mt-36 flex flex-col gap-6 md:flex-col md:gap-12 lg:flex-row '>
        <Feature
          image='/frame.svg'
          title='Save time & resources'
          description=" You don't have to spend thousands of dollars to get a nice website just to launch your product."
        />
        <Feature
          image='/prime.svg'
          title='Save time & resources'
          description=" You don't have to spend thousands of dollars to get a nice website just to launch your product."
        />
        <Feature
          image='/project.svg'
          title='Save time & resources'
          description=" You don't have to spend thousands of dollars to get a nice website just to launch your product."
        />
        <Feature
          image='/random.svg'
          title='Save time & resources'
          description=" You don't have to spend thousands of dollars to get a nice website just to launch your product."
        />
      </div>
    </div>
  )
}

export default Features
