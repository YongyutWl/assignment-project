"use client";
import { getUserMockup } from "@/api/mockupApi";
import { IMockUserDataRes } from "@/interface/userMockup";
import React, { useState, useEffect } from "react";
import _ from "lodash";
import { Typography } from "@mui/material";
import { CompanyData } from "@/interface/answer";

const ManageData = () => {
  const [data, setData] = useState<IMockUserDataRes>();
  const [answerData, setAnswerData] = useState<CompanyData>({});

  const findAnswer = (data: IMockUserDataRes) => {
    if (!data) return;
    const departmentGroup = _.groupBy(data?.users, "company.department");
    const groupUserLength = _.keys(departmentGroup);

    const answer: CompanyData = _.reduce(
      groupUserLength,
      (acc, item) => {
        const minAge = _.minBy(departmentGroup[item], "age");
        const maxAge = _.maxBy(departmentGroup[item], "age");
        const countGender = _.countBy(departmentGroup[item], "gender");
        const countHair = _.countBy(departmentGroup[item], "hair.color");
        const addressUser = _.reduce(
          departmentGroup[item],
          (acc, item) => {
            return {
              ...acc,
              [`${item.firstName}${item.lastName}`]: item.address.postalCode,
            };
          },
          {}
        );

        return {
          ...acc,
          [item]: {
            ...countGender,
            ["ageRange"]: `${minAge?.age}-${maxAge?.age}`,
            ["hair"]: countHair,
            ["addressUser"]: addressUser,
          },
        };
      },
      {}
    );

    setAnswerData(answer);
  };

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

  useEffect(() => {
    if (!data?.users?.length) return;
    findAnswer(data as IMockUserDataRes);
  }, [data]);
  return (
    <React.Fragment>
      <Typography variant="h3" gutterBottom>
        ManageData
      </Typography>

      {answerData &&
        Object.keys(answerData).map((key) => {
          return (
            <React.Fragment key={key}>
              <Typography variant="h6" gutterBottom>
                {key}
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                {JSON.stringify(answerData[key])}
              </Typography>
            </React.Fragment>
          );
        })}
    </React.Fragment>
  );
};

export default ManageData;
