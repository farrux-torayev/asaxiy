import React from "react";
import Navbar from "../navbar";
import Footer from "../footer";

const About = () => {
  return (
    <> 
    <Navbar/>
    <div className="w-[1300px] m-auto pt-[200px]">
      <div>
        <h1 className="text-center text-2xl font-bold">Biz haqimizda </h1>
        <p className="">
          {" "}
          Agar siz katta biznes faqat katta sarmoya bilan boshlanadi deb
          o'ylasangiz, siz adashasiz. Buning yorqin namunasi Asaxiy.uz. Qanday
          summa bilan biz do'konimizni ochganimizni taxmin qiling. Qanday
          raqamlar hozir xayolingizda paydo bo'lmasin, 99% ehtimol bilan ular
          noto'g'ri. To'g'ri javob esa – 400$. Endi esa hammasi haqida batafsil.
        </p>
        <hr className="py-[30px]" />
      </div>
      <div>
        <h2 className="text-2xl font-bold">Asaxiy boshlanishi</h2>
        <p className="py-[30px]">
          Asaxiy.uz O'zbekistonda maishiy texnika va elektronika savdosi
          sohasida elektron savdo pionerlaridan biri hisoblanadi. Do'kon
          yaratish g'oyasi ilk bor 2014-yilda Firuz Allayevga Yevropada ta'lim
          olayotgan paytda kelgan. O'sha paytda chet el mamlakatlarida
          onlayn-do'konlar oddiy holat edi, biroq bizning mamlakatimizda bu
          bozor deyarli bo'sh edi.
        </p>
        <p className="py-[30px]">
          Firuz o'z g'oyasi bilan do'sti – kompaniyaning kelajakdagi hammuassisi
          Eldor G'afurov bilan o'rtoqlashgan. O'shanda assortimentni maishiy
          texnika bilan to'ldirish qarori qabul qilingan edi. Mijozlarning
          qulayligi uchun kompaniya tovarlarni xaridor ko'rsatgan manzilgacha
          yetkazib berish amaliyotini yo'lga qo'ydi. Dastlab Toshkent bo'ylab,
          keyinchalik butun mamlakat, shu jumladan olis hududlarga ham yetkazib
          berish imkoniyati yaratildi.
        </p>
        <p className="py-[30px]">
          Pandemiyaga qaramay, kompaniya vaqt o'tishi bilan rivojlandi va
          sifatli xizmat, keng assortiment va arzon narxlar tufayli xaridorlar
          ishonchini qozondi.
        </p>
      </div>
      <div>
        <h2 className="text-2xl font-bold">Asaxiy.uz bugungi kunda</h2>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default About;
