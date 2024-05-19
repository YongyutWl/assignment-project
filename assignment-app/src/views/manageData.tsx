"use client";
import { getUserMockup } from "@/api/mockupApi";
import { IMockUserDataRes } from "@/interface/userMockup";
import React, { useState, useEffect } from "react";
import _ from "lodash";

const ManageData = () => {
  const [data, setData] = useState<IMockUserDataRes>();
  const departmentGroup = _.groupBy(data?.users, "company.department");
  const groupUserLength = _.keys(departmentGroup);

  console.log("data  >>", data);
  console.log("groupUser  >>", departmentGroup);
  console.log("groupUserLength  >>", groupUserLength);
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
