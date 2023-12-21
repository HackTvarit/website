"use client";

import React from "react";
import Image from "next/image";
import { useState } from "react";

const Faq = () => {
  const [faq, setFaq] = useState(-1);

  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="py-20 flex flex-col gap-6">
        {[...Array(5)].map((value, index) => {
          return (
            <>
              <div className="">
                <div
                  className="flex justify-between text-xl font-semibold cursor-pointer"
                  onClick={() => setFaq(faq == index ? -1 : index)}
                >
                  <div className="">0{index + 1}. What is HackTvarit ?</div>
                  <div className="">
                    {faq != index ? (
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
                {faq == index && (
                  <div className="mt-4 w-[95%]">
                    {
                      "Marketing eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born."
                    }
                  </div>
                )}
              </div>
              <hr className="border border-[#4F4747] my-4"></hr>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Faq;
