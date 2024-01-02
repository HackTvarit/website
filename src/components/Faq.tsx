"use client"
import React, { useState } from "react";
import Image from "next/image";

const Faq = () => {
  const [faq, setFaq] = useState(-1);

  const faqData = [
    {
      question: "1. Can I participate remotely?",
      answer:
        "HackTvarit 2024 is an in-person hackathon. So remote participation is not applicable.",
    },
    {
      question: "2. How much does it cost to participate?",
      answer:
        "Nothing, participation in HackTvarit 2024 is absolutely FREE!!🎉 We’ll have meals, snacks, and beverages onsite at the hackathon, in addition to swags, prizes, fun mini-events and more.",
    },
    {
      question: "3. I am a beginner, can I participate?",
      answer:
        "Absolutely. We will have mentors and resources available, along with several workshops targeted for beginners. Come learn and experience your first hackathon at HackTvarit.",
    },
    {
      question: "4. What is the maximum team size? Can I participate as a solo Hacker?",
      answer:
        "We encourage you to make a team with a minimum of 2 and a maximum of 4 members. If you are a solo hacker and do not have a team, you can still register and find team members on our Discord server.",
    },
    {
      question: "5. I am below 18 years of age, can I participate in the hackathon?",
      answer:
        "Yes! You can participate in the hackathon but we would need written consent from your parent/guardian and you wouldn’t be allowed to leave the venue during the hackathon.",
    },
    {
      question: "6. Will you support or reimburse our travel expenses?",
      answer:
        "Since HackTvarit 2024 is a community-driven hackathon, unfortunately we will not be able to support you with travel.",
    },
    {
      question: "7. What are the sleeping arrangements?",
      answer:
        "At night (16th) we will have a supervised sleeping space for hackers to rest and sleep at the venue. We recommend bringing your own blanket if you need one.",
    },
    {
      question: "8. What are the arrangements for women hackers?",
      answer:
        "We want to make sure that all women hackers feel comfortable and safe at the hackathon. We have arranged a separate sleeping area for girls, clean washrooms, personal hygiene and sanitary kits, etc.",
    },
    {
      question: "9. Can my parent/guardian stay at the venue?",
      answer:
        "No. Arrangements like sleeping area, food, etc., are only for the attendees. We recommend you to find a stay option for them near the venue. They can drop you at the hackathon venue on 16th March and can pick you on 17th March but can't stay at the venue during the hackathon as we do not have any provision for them.",
    },
    {
      question: "10. Can hackers start working on projects in advance?",
      answer:
        "No. You can only start working on the projects once hacking begins on 16th March after the opening ceremony. Any project with an earlier commit history will be disqualified. However, you can learn the basic tools and technologies you might need before the hackathon.",
    },
    {
      question: "11. I have more questions, how and where can I reach out?",
      answer:
        "You can reach out to us on our Discord Server or email us at hacktvarit@gmail.com! We're always ready to answer all your questions.",
    },
  ];

  return (
    <div className="max-w-screen-xl mx-auto p-4" id="faq">
      <div className="py-20 flex flex-col gap-6">
        {faqData.map((data, index) => {
          return (
            <div key={index} className="">
              <div
                className="flex justify-between text-xl font-semibold cursor-pointer"
                onClick={() => setFaq(faq === index ? -1 : index)}
              >
                <div className="">{data.question}</div>
                <div className="">
                  {faq !== index ? (
                    <Image
                      src="/images/PlusIcon.svg"
                      alt=""
                      width={30}
                      height={30}
                    />
                  ) : (
                    <Image
                      src="/images/MinusIcon.svg"
                      alt=""
                      width={30}
                      height={30}
                    />
                  )}
                </div>
              </div>
              {faq === index && (
                <div className="mt-4 w-[95%]">{data.answer}</div>
              )}
              <hr className="border border-[#4F4747] my-4"></hr>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Faq;
