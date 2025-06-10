"use client";
import { Menubar } from "primereact/menubar";
import { Button } from "primereact/button";
import { useRouter } from "next/navigation";

export default function NavBar() {
    const router = useRouter();
    const items = [
        {
            label: "首頁 Home",
            icon: "pi pi-home",
            command: () => router.push("/"),
        },
        {
            label:"注冊 Register",
            icon:"pi pi-user",
            command: () => router.push("/register"),
        },
        {
            label:"登入 Login",
            icon:"pi pi-sign-in",
            command: () => router.push("/login"),
        },
        {
            label: "新增聯絡人 Add Contact",
            icon:"pi pi-plus",
            command: () => router.push("/addcontact"),
        },
        {
            label: "檢視聯絡人 View Contact",
            icon: "pi pi-eye",
            command: () => router.push("/viewcontact"),
        },
        {
            label: "會員管理頁面 Member Management",
            icon: "pi pi-users",
            command: () => router.push("/manage"),
        },
        {
            label: "關於我們 About Us",
            icon: "pi pi-info-circle",
            command: () => router.push("/about"),
        },
        {
            label: "購物車 Shopping Cart",
            icon: "pi pi-shopping-cart",
            command: () => router.push("/cart"),
        },
        {
            label: "多層選單",
            icon: "pi pi-check",
            items: [
                {
                    label: "頁面一",
                    icon: "pi pi-plus",
                    command: () => router.push("/page1"),
                },
                {
                    label: "頁面二",
                    icon: "pi pi-plus",
                    command: () => router.push("/page2"),
                },
            ],
        },
    ];
    const end = (
        <div className="flex align-items-center gap-2">
            <Button icon="pi pi-user" rounded text />
        </div>
    );

    return (
        <div className="card">
            <Menubar model={items} end={end} />
        </div>
    );
}