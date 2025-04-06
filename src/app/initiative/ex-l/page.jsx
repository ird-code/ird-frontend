import React from "react";
export default function ExL() {

  const topRowSubjects = [
    "Mathematics",
    "Science",
    "English Grammar",
    "Nepali Grammar",
  ];

  const bottomRowSubjects = [
    "Sanskrit Language",
    "Social Studies",
  ];

  return (
    <section className="mt-20 md:mt-40">
      
      <div className="max-w-[1280px] mx-auto px-4 pb-16 md:pb-32">
        <div className="text-center pb-8">
          <h2 className="text-[#850d09] text-3xl">
Ex-L          </h2>
        </div>
        <div className="mt-8 md:mt-16 sm:px-4 grid grid-cols-1 lg:grid-cols-5 gap-6 md:gap-8 items-center">
          <div className="col-span-1 lg:col-span-3">
            <p className="text-base md:text-lg">
           <b> Excel with Ex-L </b>– Ex-L (Excel Learning) is an innovative personalized learning platform designed to enhance student education beyond the classroom. Aligned with the latest school and national curriculum guidelines, Ex-L supports students from Grade 1 to Grade 10 in mastering concepts, strengthening skills, and improving retention through interactive learning tools.            </p>
            <br></br>
            <p className="text-base md:text-lg">
<b>Why Ex-L?</b> <br></br>
Traditional classroom learning in Nepal follows a "one-size-fits-all" approach, where all students receive the same assignments, homework, and pace of instruction. This often leaves behind students who need extra support in specific areas. Teachers, burdened with large class sizes and limited time, struggle to provide personalized assistance to each student. Ex-L bridges this gap by offering:

            </p>
          </div>
          <div className="col-span-1 lg:col-span-2 flex justify-center items-center mt-6 lg:mt-0">
            <img
              src="/assets/images/ex-l.webp"
              alt="Education Reform"
              className="w-full max-w-md h-auto rounded-xl"
            />
          </div>
        </div>
      </div>
      <div className="max-w-[1280px] mx-auto px-4">
        <div className="text-center">
          <h2 className="text-[#850d09]">
          Ex-L Features          </h2>
        </div>
        <div className="mt-8 md:mt-16 sm:px-4 items-center">
          <div className="col-span-1 md:col-span-3">
            <ul className="text-base md:text-lg">
  <li className="pb-4">
    <strong>Personalized Learning Paths</strong> – Students can practice targeted concepts, math skills, and critical information at their own pace.
  </li>
  <li className="pb-4">
    <strong>Interactive Tools for Better Retention</strong> – Flashcards, quizzes, and self-tests help students reinforce learning in a fun and engaging way.
  </li>
  <li className="pb-4">
    <strong>Guided Progression from Basic to Advanced</strong> – The app features a structured question bank covering all levels of understanding, ensuring students build confidence step by step without feeling overwhelmed.
  </li>
  <li className="pb-4">
    <strong>Workshops and Motivation Sessions</strong> – Include frequent sessions with leaders and experts across various disciplines which students could be passionate about.
  </li>
  <li className="pb-4">
    <strong>Reward Reinforcement Techniques</strong> – Motivational elements like achievement badges and progress tracking encourage students to stay engaged and keep learning.
  </li>
  <li className="pb-4">
    <strong>Quick Access to Key Information</strong> – No more digging through textbooks for hours—Ex-L presents concepts in a clear and concise manner, making learning more efficient.
  </li>
  <li className="pb-4">
    <strong>Teacher-Assigned Individual Homework</strong> – Teachers can assign customized tasks based on students' unique needs, ensuring they get the right support to improve their understanding.
  </li>
  <li className="pb-4">
    <strong>Skill-Based & Conceptual Strengthening</strong> – Focused learning modules help students grasp fundamental concepts and build essential skills.
  </li>
</ul>

          </div>
         
        </div>
        <div className="mt-12 md:mt-16 sm:px-4 grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-8 items-center">
          <div className="col-span-1 md:col-span-2 flex justify-center items-center order-2 md:order-1 mt-6 md:mt-0">
            <img
              src="/assets/images/exl-media.jpg"
              alt="Education Reform"
              className="h-auto rounded-[30%]"
            />
          </div>
          <div className="col-span-1 md:col-span-3 order-1 md:order-2">
          <h3 className="mb-4">Assessment
          </h3>            
          <ul className="text-base md:text-lg">
  <li className="pb-4">
    <strong>Track Student Progress</strong> – Teachers have access to real-time assessment results, enabling them to monitor individual student growth and identify areas that need improvement.
  </li>
  <li className="pb-4">
    <strong>Assign Customized Practice Modules</strong> – Teachers can assign specific lessons and exercises tailored to each student’s learning needs.
  </li>
  <li className="pb-4">
    <strong>Environmental Education</strong> – Teach sustainability, climate change, and eco-friendly practices.
  </li>
  <li className="pb-4">
    <strong>School-Wide Portal for Collaboration</strong> – Each school will have a dedicated Ex-L portal where teachers and students can communicate, share progress, and collaborate for a more connected and efficient learning experience.
  </li>
</ul>

          </div>
        </div>

        <div className="max-w-[1280px] mx-auto px-4 pt-20">
        <div className="text-center">
          <h2 className="text-[#850d09]">
         Subjects        </h2>
         <div className="p-6">
         <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
        {topRowSubjects.map((subject, index) => (
          <div
            key={index}
            className="bg-white border border-gray-300 rounded-xl shadow-lg py-10 px-6 text-center text-xl font-semibold"
          >
            {subject}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
        {bottomRowSubjects.map((subject, index) => (
          <div
            key={index}
            className="bg-white border border-gray-300 rounded-xl shadow-lg py-10 px-6 text-center text-xl font-semibold"
          >
            {subject}
          </div>
        ))}
      </div>
    </div>


              </div>
          </div>
       
        
      </div>
    </section>
  );
}