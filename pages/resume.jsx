import React from "react";
import Head from "next/head";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";

const resume = () => {
  return (
    <>
      <Head>
        <title>Hussain | Resume</title>
        <meta
          name="description"
          content="I'm a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences."
        />
        <link rel="icon" href="/fav.png" />
      </Head>

      <div className="max-w-[940px] mx-auto p-2 pt-[120px]">
        <h2 className="text-center">Resume</h2>
        <div className="bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center">
          <h2 className="text-center">Hussain Lokhandwala</h2>
          <div className="flex">
            <a
              href="https://www.linkedin.com/in/hussain-lokhandwala-41aab230b"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn size={20} style={{ marginRight: "1rem" }} />
            </a>
            <a
              href="https://github.com/hussaiinn?tab=repositories"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub size={20} style={{ marginRight: "1rem" }} />
            </a>
          </div>
        </div>
        <div className="text-center py-4 text-xl font-bold uppercase tracking-wider">
          <div className="hidden sm:block">
            <p>
              Web Development <span className="px-1">|</span> Cloud Operator{" "}
              <span className="px-1">|</span> Servicenow Developer
            </p>
          </div>
          <div className="block sm:hidden">
            <p>Web Development</p>
            <p className="py-2">Cloud Operator</p>
            <p>Servicenow Developer</p>
          </div>
        </div>
        <p>
          Enthusiastic Computer Science graduate (Class of 2024) with
          proficiency in React.js and Next.js, skilled in delivering
          user-centric web solutions through effective collaboration with
          cross-functional teams. Aspiring Cloud Developer with a solid
          foundation in cloud computing concepts, eager to apply knowledge to
          real-world cloud solutions. Certified ServiceNow System Administrator
          and Developer, experienced in scripting, workflows, and ITSM. Worked
          on various projects to enhance system functionality and efficiency.
        </p>

        {/* Skills */}
        <div className="text-center py-4">
          <h5 className="text-center underline text-[18px] py-2">Skills</h5>
          <p className="py-2">
            <span className="font-bold">Technical Skills</span>
            <span className="px-2">|</span>Full Web Developer
            <span className="px-2">|</span> HTML
            <span className="px-2">|</span>CSS
            <span className="px-2">|</span>Javascript
            <span className="px-2">|</span>React JS
            <span className="px-2">|</span>Node JS
            <span className="px-2">|</span>Next JS
            <span className="px-2">|</span>Express JS
            <span className="px-2">|</span>Python
            <span className="px-2">|</span>Java OOPs
            <span className="px-2">|</span>Mongo DB
            <span className="px-2">|</span>MY SQL
            {/* <span className="px-2">|</span>NoSQL */}
            {/* <span className="px-2">|</span>Redux */}
            <span className="px-2">|</span>Tailwind
            <span className="px-2">|</span> Firebase
            <span className="px-2">|</span> RESTAPI
            <span className="px-2">|</span> NPM Tools
          </p>
          <p className="py-2">
            <span className="font-bold">Amazon Web Services</span>
            <span className="px-2">|</span>Amazon Web Services Cloud
            Practitioner
          </p>
          <p className="py-2">
            <span className="font-bold">Servicenow</span>
            <span className="px-2">|</span>Administrator
            <span className="px-2">|</span>Development
            <span className="px-2">|</span>Scripting
            <span className="px-2">|</span>WorkFlows
            <span className="px-2">|</span>ITSM
            <span className="px-2">|</span>CMDB
            <span className="px-2">|</span>Asset Management
            <span className="px-2">|</span>Service Catalog
            <span className="px-2">|</span>REST API
            <span className="px-2">|</span>SOAP API
            <span className="px-2">|</span>UI Actions
            <span className="px-2">|</span>Business Rules
            <span className="px-2">|</span>Client Scripts
            <span className="px-2">|</span>Script Includes
            <span className="px-2">|</span>Performance Analytics
            <span className="px-2">|</span>Reporting
          </p>
        </div>

        <div className="text-center py-4">
          <h5 className="text-center underline text-[18px] py-2">
            Certificates
          </h5>
          <p className="py-2">
            <span className="font-bold">Servicenow</span>
            <span className="px-2">|</span>Servicenow Certified Application
            Developer
            <span className="px-2">|</span> Servicenow Certified System
            Administrator
          </p>
        </div>

        <h5 className="text-center underline text-[18px] py-4">
          Web Development Projects
        </h5>
        {/* Experience */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">
              Doctor Consultation Platform
            </span>
            <span className="px-2">|</span>DocCare
          </p>
          <Link href="https://medical-consultation-p-git-043771-hussain-lokhandwalas-projects.vercel.app/">
            <p className="py-1 italic cursor-pointer">
              <b>Link</b>
            </p>
          </Link>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Developed an advanced medical consultation platform to enhance
              communication between healthcare providers and patients.
            </li>
            <li>
              Implemented user-friendly appointment scheduling to improve
              accessibility for patients.
            </li>
            <li>
              Prioritized patient privacy and ensured data security in
              compliance with healthcare standards.
            </li>
            <li>Utilized MongoDB for efficient database management.</li>
            <li>
              Integrated Google Authentication to bolster security measures.
            </li>
            <li>
              Improved healthcare service accessibility and increased patient
              engagement.
            </li>
            <li>
              Optimized administrative workflows for medical practitioners.
            </li>
          </ul>
        </div>

        {/* Personal Experience */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">Blog Platform</span>
            <span className="px-2">|</span>Promptopia
          </p>
          <Link href="https://nextjs-project-promptopia-gamma.vercel.app/">
            <p className="py-1 italic cursor-pointer">
              <b>Link</b>
            </p>
          </Link>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Developed Promptopia, a blogging website using Next.js to
              demonstrate full-stack development.
            </li>
            <li>
              Integrated Firebase Authentication for secure Gmail sign-in
              functionality.
            </li>
            <li>Utilized MongoDB for efficient data management and storage.</li>
            <li>
              Implemented CRUD operations to allow users to create, read,
              update, and delete posts.
            </li>
            <li>
              Enabled users to browse and view profiles, enhancing user
              interaction.
            </li>
            <li>
              Showcased the seamless integration of Next.js, Firebase, and
              MongoDB.
            </li>
          </ul>
        </div>
        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">E-Commerce Website</span>
            <span className="px-2">|</span>Patheria Medical
          </p>
          <Link href="https://ecom-website-h3pn-git-main-hussain-lokhandwalas-projects.vercel.app/">
            <p className="py-1 italic cursor-pointer">
              <b>Link</b>
            </p>
          </Link>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>Developed a comprehensive e-commerce website using Next.js.</li>
            <li>
              Created two distinct interfaces: an admin page for managing stock
              and items, and a user page for purchasing products.
            </li>
            <li>
              Leveraged the capabilities of Next.js to ensure a seamless and
              efficient shopping experience.
            </li>
            <li>
              Implemented robust stock management for efficient inventory
              control.
            </li>
            <li>
              Designed an intuitive user interface to enhance the shopping
              experience.
            </li>
          </ul>
        </div>

        {/*  */}
        <h5 className="text-center underline text-[18px] py-4">
          Servicenow Projects
        </h5>

        {/* Experience */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold">Leave Management System</span>
            {/* <span className="px-2">|</span>Sherman, TX */}
          </p>
          <p className="py-1 italic">
            <b>GitLab</b>
          </p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Developed a ServiceNow leave management system to streamline the
              process of requesting and managing leave for employees worldwide.
            </li>
            <li>
              Customized the application to accommodate different types of leave
              across various countries.
            </li>
            <li>
              Designed a user-friendly interface to enhance usability and
              employee satisfaction.
            </li>
            <li>
              Ensured seamless integration with existing HR systems to simplify
              HR tasks.
            </li>
            <li>
              Improved operational efficiency and employee engagement through
              effective leave management.
            </li>
          </ul>
        </div>
        <div className="py-6">
          <p className="italic">
            <span className="font-bold">Order Management</span>
            {/* <span className="px-2">|</span>Sherman, TX */}
          </p>
          <p className="py-1 italic">
            <b>GitLab</b>
          </p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Developed an Order Management System in ServiceNow to enable
              efficient handling of customer orders.
            </li>
            <li>
              Streamlined the approval process with intuitive workflows and
              designated user groups.
            </li>
            <li>
              Utilized ServiceNow&apos;s scripting capabilities to customize order
              forms and validation rules.
            </li>
            <li>
              Ensured data integrity and security in compliance with
              organizational standards.
            </li>
            <li>
              Enhanced operational efficiency through seamless integration with
              existing ServiceNow modules.
            </li>
          </ul>
        </div>
        <div className="py-6">
          <p className="italic">
            <span className="font-bold">Hospital Management</span>
            {/* <span className="px-2">|</span>Sherman, TX */}
          </p>
          <p className="py-1 italic">
            <b>GitLab</b>
          </p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Developed a Patient Management Application in ServiceNow to enable
              efficient handling and approval of patient records by doctors.
            </li>
            <li>
              Implemented client-side scripting to create responsive and
              user-friendly interfaces.
            </li>
            <li>
              Utilized server-side scripting for robust backend functionality
              and data processing.
            </li>
            <li>
              Integrated automated notifications to keep doctors informed of
              patient record status changes.
            </li>
            <li>
              Enhanced operational efficiency through intuitive workflows and
              streamlined approval processes.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default resume;
