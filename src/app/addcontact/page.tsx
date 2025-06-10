"use client";
import { useState } from "react";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { RadioButton } from "primereact/radiobutton";
import { Card } from "primereact/card";
import { InputTextarea } from "primereact/inputtextarea";

interface ContactData {
  name: string; // 姓名
  phone: string; // 電話
  education: string; // 學歷
  email: string; // 電子郵件
  remark: string; // 備註
}

export default function AddContact() {
  const [contactData, setContactData] = useState<ContactData>({
    name: "",
    phone: "",
    education: "",
    email: "",
    remark: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const contactDataString =
      "姓名: " +
      contactData.name +
      "\n" +
      "電話: " +
      contactData.phone +
      "\n" +
      "學歷: " +
      contactData.education +
      "\n" +
      "電子郵件: " +
      contactData.email +
      "\n" +
      "備註: " +
      contactData.remark +
      "\n";
    alert("聯絡人資料:\n" + contactDataString);
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <Card title="新增聯絡人" className="w-full max-w-md">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <label htmlFor="name">姓名</label>
          <InputText
            id="name"
            value={contactData.name}
            onChange={(e) =>
              setContactData({ ...contactData, name: e.target.value })
            }
            className="w-full mb-4"
          />
          <label htmlFor="phoen">電話</label>
          <InputText
            id="phone"
            value={contactData.phone}
            onChange={(e) =>
              setContactData({ ...contactData, phone: e.target.value })
            }
            className="w-full mb-4"
          />
          <label>學歷</label>
          <div className="flex gap-4">
            <div className="flex items-center">
              <RadioButton
                inputId="degree"
                name="education"
                value="大學部"
                checked={contactData.education === "大學部"}
                onChange={(e) =>
                  setContactData({ ...contactData, education: e.value })
                }
              />
              <label htmlFor="degree" className="ml-2">
                大學部
              </label>
            </div>
            <div className="flex items-center">
              <RadioButton
                inputId="master"
                name="education"
                value="碩士班"
                checked={contactData.education === "碩士班"}
                onChange={(e) =>
                  setContactData({ ...contactData, education: e.value })
                }
              />
              <label htmlFor="master" className="ml-2">
                碩士班
              </label>
            </div>
            <div className="flex items-center">
              <RadioButton
                inputId="phd"
                name="education"
                value="博士班"
                checked={contactData.education === "博士班"}
                onChange={(e) =>
                  setContactData({ ...contactData, education: e.value })
                }
              />
              <label htmlFor="phd" className="ml-2">
                博士班
              </label>
            </div>
          </div>
          <label htmlFor="email">電子郵件</label>
          <InputText
            id="email"
            value={contactData.email}
            onChange={(e) =>
              setContactData({ ...contactData, email: e.target.value })
            }
            className="w-full mb-4"
          />
          <label htmlFor="remark">備註</label>
          <InputTextarea
            id="remark"
            value={contactData.remark}
            onChange={(e) =>
              setContactData({ ...contactData, remark: e.target.value })
            }
            className="w-full mb-4"
            rows={3}
          />
          <Button label="新增" type="submit" className="mt-4" />
        </form>
      </Card>
    </div>
  ); 
}
