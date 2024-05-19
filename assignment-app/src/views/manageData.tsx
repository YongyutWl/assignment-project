"use client";
import { getUserMockup, productManager } from "@/api/mockupApi";
import { IMockUserDataRes } from "@/interface/userMockup";
import React, { useState, useEffect } from "react";
import _ from "lodash";

const ManageData = () => {
  const [data, setData] = useState<IMockUserDataRes>();

  const departmentGroup = _.groupBy(data?.users, "company.department");
  const groupUserLength = _.keys(departmentGroup);

  const countGender = _.countBy(productManager, "gender");
  const countHair = _.countBy(productManager, "hair.color");

  /*[Department]: 
  {
    "male": 1,                      // ---> Male Count Summary
    "female": 1,                    // ---> Female Count Summary
    "ageRange": "XX-XX",            // ---> Range
    "hair": {                       // ---> "Color": Color Summary
              "Black": 1,                
              "Blond": 1,
              "Chestnut": 1,
              "Brown": 1
            },
    "addressUser": {                // ---> "firstNamelastName": postalCode
      "TerryMedhurst": "XXXXX",
      }
    }
   */

  console.log("data  >>", data);
  console.log("groupUser  >>", departmentGroup);
  console.log("groupUserLength  >>", groupUserLength);
  console.log("productManager  >>", productManager);

  console.log("countHair  >>", countHair);
  console.log("countGender  >>", countGender);
  const getMockUserData = async () => {
    try {
      const res = await getUserMockup();
      setData(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMockUserData();
  }, []);
  return <div>ManageData</div>;
};

export default ManageData;
