import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Doccare from '../public/assets/projects/doccare.png';
import promptopia from '../public/assets/projects/promptopia.png'
import netflixImg from '../public/assets/projects/netflix.jpg'
import Ecom from '../public/assets/projects/Ecom.png'
import twitchImg from '../public/assets/projects/twitch.jpg'
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4'>What I've Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Doctor Consultation'
            backgroundImg={Doccare}
            projectUrl='/doctor'
            tech='Next JS'
          />
          <ProjectItem
            title='Promptopia'
            backgroundImg={promptopia}
            projectUrl='/promptopia'
            tech='Next JS'

          />
          <ProjectItem
            title='E-commerce'
            backgroundImg={Ecom}
            projectUrl='/ecom'
            tech='Next JS'

          />
          {/* <ProjectItem
            title='Twitch UI'
            backgroundImg={twitchImg}
            projectUrl='/twitch'
            tech='Next JS'

          /> */}
        </div>
      </div>
    </div>
  );
};

export default Projects;
