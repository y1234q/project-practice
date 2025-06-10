"use client"
import { useState } from "react";
import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

interface Contactinfo {
    name: string;
    phone: string;
    education: string;
    email: string;
    remarks: string;
    }

const searchContact: Contactinfo[] = [
    {
        name: "Adam",
        phone:"0123456789",
        education:"大學",
        email: "adam@email.com",
        remarks:"這是備註",
    },
    {
        name:"Betty",
        phone:"0987654321",
        education:"高中",
        email: "bettuy@email.com",
        remarks:"這是備註",
    },
    {
        name:"Charles",
        phone:"1234567890",
        education:"碩士",
        email: "charles@email.com",
        remarks:"這是備註",
    },
];

export default function ViewContact() {
    const [query, setQuery] = useState("");
    const [contacts] = useState<Contactinfo[]>(searchContact);
    const [serached, setSearched] = useState(false);

    const filteredContacts = contacts.filter(contact =>
        contact.name.includes(query) ||
        contact.phone.includes(query) ||
        contact.education.includes(query) ||
        contact.email.includes(query) ||
        contact.remarks.includes(query)
    );

    const handleSearch = () => {
        setSearched(true);
    };
    
    return(
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <Card title="聯絡人搜尋" className="w-[600px]">
                <div className="flex flex-col gap-4">
                    <InputText
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="搜尋聯絡人..."
                        className="w-full"
                    />
                    <Button label="搜尋" onClick= {handleSearch} className="w-full" />
                </div>
            </Card>

            {serached && (
                <Card title={`搜尋結果 (${filteredContacts.length})`} className="w-[600px] mt-4">
                    <div className="flex flex-col gap-4">
                        {filteredContacts.map((contact, index) => (
                            <Card key={index} title={contact.name} className="big-white shadow-md">
                                <div className="flex flex-col gap-2">
                                    <div><strong>姓名:</strong> {contact.name}</div>
                                    <div><strong>電話:</strong> {contact.phone}</div>
                                    <div><strong>學歷:</strong> {contact.education}</div>
                                    <div><strong>電子郵件:</strong> {contact.email}</div>
                                    <div><strong>備註:</strong> {contact.remarks}</div>
                                </div>
                            </Card>
                        ))}
                        {filteredContacts.length === 0 && (
                            <p className="text-gray-500">未找到符合的聯絡人。</p>
                        )}
                    </div>
                </Card>
            )}
        </div>
        )}
